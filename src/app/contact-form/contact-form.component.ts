import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Contact} from '../contact';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  @Output()
  contactEmitter = new EventEmitter<Contact>();
  user: Contact = {} as Contact;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.contactEmitter.emit(this.user);
  }
}
