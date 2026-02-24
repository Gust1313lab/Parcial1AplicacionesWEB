import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  styleUrls: ['./login.component.scss'],
  template: `
  <h1>Login</h1>

  <input placeholder="Usuario" #user>
  <input type="password" placeholder="Password" #pass>

  <button (click)="login(user.value, pass.value)">Login</button>

  <p *ngIf="errorMsg" style="color:red">
    {{ errorMsg }}
  </p>
`
})
export class LoginComponent {
  errorMsg = '';

  constructor(private authService: AuthService) {}

  login(username: string, password: string) {

  //Validación
  if (!username || !password) {
    this.errorMsg = 'Debe ingresar usuario y contraseña';
    return;
  }

  //limpiar error si todo está bien
  this.errorMsg = '';

  this.authService.login(username, password)
    .subscribe({
      next: res => console.log('UI', res),
      error: err => this.errorMsg = 'Credenciales incorrectas'
    });
}

}
