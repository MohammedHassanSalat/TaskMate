import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [RouterLink,ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  constructor(private AuthService: AuthService, private Router: Router) {}

  signupForm = new FormGroup({
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
    this.AuthService.register(
      this.signupForm.value.email!,
      this.signupForm.value.password!
    )
      .then(() => {
        this.Router.navigate(['login']);
      })
      .catch(() => {
        this.displayAlert('invlaid data please try again');
      });
  }
}
