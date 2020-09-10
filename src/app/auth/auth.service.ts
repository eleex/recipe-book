import { AuthResponseData } from './models/auth-response-data.model';
import { AuthRequestData } from './models/auth-request-data';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiKey = 'AIzaSyCO1CEnYSDHJFvNLfLpn5tfRJHY7D3O0DM';

  constructor(private http: HttpClient) {}

  signup(user: AuthRequestData): Observable<AuthResponseData> {
    user.returnSecureToken = true;

    return this.http
      .post<AuthResponseData>(
        `https://identitytoolkit.googleapis.co/v1/accounts:signUp?key=${this.apiKey}`,
        user
      )
      .pipe(
        catchError((errorRes) => {
          let errorMessage = 'An unknown error occurred!';

          if (!errorRes.error && !errorRes.error.error) {
            return throwError(errorMessage);
          }

          switch (errorRes.error.error.message) {
            case 'EMAIL_EXISTS':
              errorMessage = 'This email exists already!';
          }

          return throwError(errorMessage);
        })
      );
  }

  login(user: AuthRequestData): Observable<AuthResponseData> {
    user.returnSecureToken = true;

    return this.http
      .post<AuthResponseData>(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.apiKey}`,
        user
      )
      .pipe(
        catchError((errorRes) => {
          let errorMessage = 'An unknown error occurred!';

          if (!errorRes.error && !errorRes.error.error) {
            return throwError(errorMessage);
          }

          switch (errorRes.error.error.message) {
            case 'EMAIL_NOT_FOUND':
              errorMessage = 'This email not found!';
              break;
            case 'INVALID_PASSWORD':
              errorMessage = 'The password is invalid!';
              break;
            case 'USER_DISABLED':
              errorMessage =
                'The user account has been disabled by an administrator!';
              break;
          }
          return throwError(errorMessage);
        })
      );
  }
}
