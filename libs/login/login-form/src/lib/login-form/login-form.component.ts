import { Component } from '@angular/core';
import { UserService } from '@nx-dynamic-mf/shared/data-access-user';

@Component({
  selector: 'nx-dynamic-mf-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  username = '';
  password = '';
  isLoggedIn$ = this.userService.isUserLoggedIn$;

  constructor(private userService: UserService) {}

  login() {
    this.userService.checkCredentials(this.username, this.password);
  }
}
