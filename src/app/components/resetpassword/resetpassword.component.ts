import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-resetpassword',
  standalone: true,
  imports: [RouterLink,ReactiveFormsModule],
  templateUrl: './resetpassword.component.html',
  styleUrl: './resetpassword.component.css'
})
export class ResetpasswordComponent {
  constructor(private AuthService: AuthService) {}

    resetPasswordForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/),
      ]),
    });

    isShowMsg: boolean = false;
    dataMsg: string = '';

    displayAlert(dataMsg: string) {
      this.isShowMsg = true;
      this.dataMsg = dataMsg;
    }

    onSubmit() {
      this.AuthService.resetPassword(this.resetPasswordForm.value.email!)
        .then(() => {
          this.displayAlert('a link is sent to your email reset your password and');
        })
        .catch(() => {
          this.displayAlert('invlaid data please try again');
        });
    }
}
