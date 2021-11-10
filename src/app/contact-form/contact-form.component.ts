import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Contact} from '../contact';
import {Store} from '@ngrx/store';
import {ContactState} from '../store/reducer/contact.reducer';
import {NgForm} from '@angular/forms';
import {addContact} from '../store/action/contact.actions';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {

  constructor(private store: Store<ContactState>) { }

  onSubmit(contactForm: NgForm) {
    this.store.dispatch(addContact(contactForm.value as Contact));
  }
}
