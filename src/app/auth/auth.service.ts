import { AuthResponseData } from './models/auth-response-data.model';
import { AuthRequestData } from './models/auth-request-data';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
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
      .pipe(catchError(this.handleError));
  }

  login(user: AuthRequestData): Observable<AuthResponseData> {
    user.returnSecureToken = true;

    return this.http
      .post<AuthResponseData>(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.apiKey}`,
        user
      )
      .pipe(catchError(this.handleError));
  }

  private handleError(errorRes: HttpErrorResponse): Observable<never> {
    let errorMessage = 'An unknown error occurred!';

    if (!errorRes.error && !errorRes.error.error) {
      return throwError(errorMessage);
    }

    switch (errorRes.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'This email exists already!';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'This email does not exist.';
        break;
      case 'INVALID_PASSWORD':
        errorMessage = 'This password is not correct.';
        break;
      case 'USER_DISABLED':
        errorMessage =
          'The user account has been disabled by an administrator!';
        break;
      default:
        errorMessage = 'An unknown error occurred!';
        break;
    }

    return throwError(errorMessage);
  }
}
