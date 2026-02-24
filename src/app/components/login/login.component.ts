import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  styleUrls: ['./login.component.scss'],
  template: `
    <button (click)="login()">Login</button>
  `
})
export class LoginComponent {

  constructor(private authService: AuthService) {}

  login() {
    this.authService.login('admin', '1234')
      .subscribe(res => console.log(res));
  }

}
