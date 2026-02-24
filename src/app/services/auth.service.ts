import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    login(username: string, password: string): Observable<any> {

    if (username === 'admin' && password === '1234') {
        return of({
            user: username,
            token: 'fake-jwt-token'
        }).pipe(delay(800));
    }

    return throwError(() => new Error('Credenciales inválidas'));
    }

}