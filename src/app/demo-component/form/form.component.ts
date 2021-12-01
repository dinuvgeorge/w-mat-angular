import {Component} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  contactForm: FormGroup = this.formBuilder.group({
    km: [10]
  });

  constructor(private formBuilder: FormBuilder) {

  }

  onSubmit() {
    alert('Your form data : ' + this.contactForm.value.km);
  }
}
