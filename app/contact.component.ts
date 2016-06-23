import { Component } from 'angular2/core';
import { FormBuilder, Validators } from 'angular2/common';
import { ControlMessages } from './control-messages.component';
import { ValidationService } from './validation.service';

@Component({
  selector: 'contact',
  directives: [ControlMessages],
  templateUrl: 'app/contact.component.html'
})
export class ContactComponent {
  contactForm: any;

  constructor(private _formBuilder: FormBuilder) {

    this.contactForm = this._formBuilder.group({
      'name': ['', Validators.required],
      'email': ['', Validators.compose([Validators.required, ValidationService.emailValidator])],
      'message': ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.dirty && this.contactForm.valid) {
      alert(`Name: ${this.contactForm.value.name} Email: ${this.contactForm.value.email} Message: ${this.contactForm.value.message}`);
    }
  }
}
