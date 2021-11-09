import { Component } from '@angular/core';
import {Contact} from './contact';
import {BehaviorSubject, Observable, of} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'contact-book-demo';
  subject = new BehaviorSubject<Contact | undefined>(undefined);
  contact$ = this.subject.asObservable();

  contacts: Array<Contact> = [
    {firstName: 'Maria', lastName: 'Anders'} as Contact,
    {firstName: 'Christina', lastName: 'Berglund'} as Contact,
    {firstName: 'Francisco', lastName: 'Chang'} as Contact,
    {firstName: 'Roland', lastName: 'Mendel'} as Contact,
    {firstName: 'Helen', lastName: 'Bennett'} as Contact,
    {firstName: 'Philip', lastName: 'Cramer'} as Contact,
    {firstName: 'Yoshi', lastName: 'Tannamuri'} as Contact,
    {firstName: 'Giovanni', lastName: 'Rovelli'} as Contact,
    {firstName: 'Simon', lastName: 'Crowther'} as Contact,
    {firstName: 'Marie', lastName: 'Bertrand'} as Contact
  ];
  contacts$: Observable<Array<Contact> | undefined> = of(this.contacts.length != 0 ? this.contacts : undefined);

  AppComponent() {
    this.subject.subscribe();
    this.contact$.subscribe();
  }

  addContact(contactParam: Contact) {
    this.contacts.push(Object.assign({} as Contact, contactParam));
    this.contacts$ = of(this.contacts);
  }
}
