import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, Subject, BehaviorSubject } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { AuthRequestData } from './models/auth-request-data';
import { AuthResponseData } from './models/auth-response-data.model';
import { User } from './models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiKey = 'AIzaSyCO1CEnYSDHJFvNLfLpn5tfRJHY7D3O0DM';
  user = new BehaviorSubject<User>(null);

  constructor(private http: HttpClient) {}

  signup(userData: AuthRequestData): Observable<AuthResponseData> {
    userData.returnSecureToken = true;

    return this.http
      .post<AuthResponseData>(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.apiKey}`,
        userData
      )
      .pipe(
        catchError(this.handleError),
        tap((resData) => {
          this.handleAuthentication(
            resData.email,
            resData.localId,
            resData.idToken,
            +resData.expiresIn
          );
        })
      );
  }

  login(userData: AuthRequestData): Observable<AuthResponseData> {
    userData.returnSecureToken = true;

    return this.http
      .post<AuthResponseData>(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.apiKey}`,
        userData
      )
      .pipe(
        catchError(this.handleError),
        tap((resData) => {
          this.handleAuthentication(
            resData.email,
            resData.localId,
            resData.idToken,
            +resData.expiresIn
          );
        })
      );
  }

  private handleAuthentication(
    email: string,
    userId: string,
    token: string,
    expiresIn: number
  ): void {
    const expirationDate = new Date(Date.now() + expiresIn * 1000);

    const user = new User(email, userId, token, expirationDate);

    this.user.next(user);
  }

  private handleError(errorRes: HttpErrorResponse): Observable<never> {
    let errorMessage = 'An unknown error occurred!';

    if (!errorRes.error || !errorRes.error.error) {
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
