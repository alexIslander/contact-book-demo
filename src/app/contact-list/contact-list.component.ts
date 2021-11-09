import {Component, Input, OnInit} from '@angular/core';
import {BehaviorSubject, Observable, of, Subject} from 'rxjs';
import {Contact} from '../contact';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  @Input()
  contacts?: Observable<Contact[] | undefined>;

  @Input()
  contactSubject?: BehaviorSubject<Contact | undefined>;
  selectedContact?: Contact;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(contact: Contact): void {
    this.selectedContact = contact;
    this.contactSubject?.next(contact);
  }
}
