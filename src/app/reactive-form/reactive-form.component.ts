import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  loginControl = new FormControl('def login', [
    Validators.required, Validators.minLength(2)]);


  myFormGroup: FormGroup = new FormGroup({
    login: this.loginControl,
    password: new FormControl('def pass')
  });

  constructor() {
  }

  ngOnInit(): void {
  }

  submit() {
  }

  customValidator(control: AbstractControl) {
    if (control.value.includes('fuck')) {
      return {fuckPresent: true}
    }
    return null
  }
}
