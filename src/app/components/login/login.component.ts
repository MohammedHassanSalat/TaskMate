import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(private AuthService: AuthService, private Router: Router) {}

  loginForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/),
    ]),
  });

  isShowMsg: boolean = false;
  dataMsg: string = '';

  displayAlert(dataMsg: string) {
    this.isShowMsg = true;
    this.dataMsg = dataMsg;
  }

  onSubmit() {
    this.AuthService.singnIn(this.loginForm.value.email!,this.loginForm.value.password!)
    .then(() => this.Router.navigate(['/dashboard']))
    .catch(() => this.displayAlert('invalid data please try again'))
  }

}
