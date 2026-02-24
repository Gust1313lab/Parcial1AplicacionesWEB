import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  styleUrls: ['./login.component.scss'],
  template: `
    <h1>Login</h1>
    <input placeholder="Usuario" #user>
    <input type="password" placeholder="Password" #pass>
    <button (click)="login(user.value, pass.value)">Login</button>
  `
})
export class LoginComponent {

  constructor(private authService: AuthService) {}

  login(username: string, password: string) {
    this.authService.login(username, password)
      .subscribe(res => console.log('UI', res));
  }

}
