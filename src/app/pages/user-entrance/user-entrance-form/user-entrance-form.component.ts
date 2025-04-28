import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-entrance-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './user-entrance-form.component.html',
  styleUrl: './user-entrance-form.component.scss'
})
export class UserEntranceFormComponent implements OnChanges, OnInit {
  @Input() isLoginEntrance: boolean = true; 
  form: FormGroup;
  isInputFocused = {
    email: false,
    password: false,
    confirmPassword: false
  }
  showInputContent = {
    password: false,
    confirmPassword: false
  }
  
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
    }
  );
  }

  ngOnChanges() {
    this.form?.get('password').setValue('');
  }

  onInputGotFocus(inputName: string) {
    this.isInputFocused[inputName] = true;
  }

  onInputLostFocus(inputName: string) {
    this.isInputFocused[inputName] = false;
  }
  
  toggleInputContent(inputName: string) {
    this.showInputContent[inputName] = !this.showInputContent[inputName];
  }

  clearInputValue(inputName: string) {
    this.form.get(inputName).setValue('');
  }

  samePasswordsValidator() {
    const password = this.form.get('password')?.value;
    const confirmPassword = this.form.get('confirmPassword')?.value;
    
    return password === confirmPassword ? null : { passwordsMismatch: true };
  }
}
