import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Contact} from '../contact';

@Component({
  selector: 'app-contact-view',
  templateUrl: './contact-view.component.html',
  styleUrls: ['./contact-view.component.css']
})
export class ContactViewComponent implements OnInit {

  @Input()
  selectedContact?: Observable<Contact | undefined>;

  constructor() { }

  ngOnInit(): void {
  }

}
