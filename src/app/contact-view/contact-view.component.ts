import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Contact} from '../contact';
import {select, Store} from '@ngrx/store';
import {ContactState} from '../store/reducer/contact.reducer';
import {selectSelectedContact} from '../store/selector/contact.selectors';

@Component({
  selector: 'app-contact-view',
  templateUrl: './contact-view.component.html',
  styleUrls: ['./contact-view.component.css']
})
export class ContactViewComponent {

  selectedContact$?: Observable<Contact | undefined>;

  constructor(private store: Store<ContactState>) {
    this.selectedContact$ = this.store.pipe(select(selectSelectedContact));
  }

}
