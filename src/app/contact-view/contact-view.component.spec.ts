import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactViewComponent } from './contact-view.component';
import {provideMockStore} from '@ngrx/store/testing';
import {contactFeatureKey} from '../store/reducer/contact.reducer';

describe('ContactViewComponent', () => {
  let component: ContactViewComponent;
  let fixture: ComponentFixture<ContactViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactViewComponent ],
      providers: [provideMockStore({initialState: {[contactFeatureKey]: {contacts: [], selectedContact: undefined}}})]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
