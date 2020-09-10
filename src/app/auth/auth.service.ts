import { AuthResponseData } from './models/auth-response-data.model';
import { AuthRequestData } from './models/auth-request-data';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiKey = 'AIzaSyCO1CEnYSDHJFvNLfLpn5tfRJHY7D3O0DM';

  constructor(private http: HttpClient) {}

  signup(user: AuthRequestData): Observable<AuthResponseData> {
    user.returnSecureToken = true;

    return this.http.post<AuthResponseData>(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.apiKey}`,
      user
    );
  }
}
