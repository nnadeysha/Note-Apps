import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  signUpForm!: FormGroup;

  constructor(private authService: AuthService) {}

  signUpSubmit() {
    this.authService.signUp(this.signUpForm.value);
  }

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-zA-Z][a-zA-Z0-9-_.]{1,20}$'),
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern('^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$'),
      ]),
    });
  }
}
