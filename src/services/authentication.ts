import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, tap, throwError } from 'rxjs';

interface LoginRequest {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://192.168.100.2:8080/api/auth';

  constructor(private http: HttpClient) { }

  authenticate(email: string, password: string): Observable<boolean> {
    const loginRequest: LoginRequest = { email, password };

    console.log('AuthService: authenticate called');
    console.log('Request:', loginRequest);

    return this.http.post<boolean>(this.apiUrl, loginRequest).pipe(
      tap(response => {
        console.log('AuthService: response received', response);
      }),
      catchError(error => {
        console.error('AuthService: error occurred', error);
        window.alert('Login Failed');
        return throwError(error);
      })
    );
  }
}
