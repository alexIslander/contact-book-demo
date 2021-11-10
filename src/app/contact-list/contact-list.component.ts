import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Contact} from '../contact';
import {select, Store} from '@ngrx/store';
import {ContactState} from '../store/reducer/contact.reducer';
import {getContacts} from '../store/selector/contact.selectors';
import {filter} from 'rxjs/operators';
import {selectedContact} from '../store/action/contact.actions';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent {

  contacts$?: Observable<Contact[] | undefined>;
  selectedContact?: Contact;

  constructor(private store: Store<ContactState>) {
    this.contacts$ = this.store.pipe(
      select(getContacts),
      filter(contacts => contacts.length > 0)
    );
  }

  onSelect(contact: Contact): void {
    this.selectedContact = contact;
    this.store.dispatch(selectedContact(contact));
  }
}
