import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ContactFormComponent} from './contact-form.component';
import {FormsModule} from '@angular/forms';
import {contactFeatureKey} from '../store/reducer/contact.reducer';
import {provideMockStore} from '@ngrx/store/testing';

describe('ContactFormComponent', () => {
  let component: ContactFormComponent;
  let fixture: ComponentFixture<ContactFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactFormComponent],
      imports: [FormsModule],
      providers: [provideMockStore({initialState: {[contactFeatureKey]: {contacts: [], selectedContact: undefined}}})]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
