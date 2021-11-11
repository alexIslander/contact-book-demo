import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ContactFormComponent} from './contact-form.component';
import {FormsModule, NgForm} from '@angular/forms';
import {contactFeatureKey, ContactState} from '../store/reducer/contact.reducer';
import {MockStore, provideMockStore} from '@ngrx/store/testing';
import * as contactActions from '../store/action/contact.actions';
import {Contact} from '../contact';

describe('ContactFormComponent', () => {
  let component: ContactFormComponent;
  let fixture: ComponentFixture<ContactFormComponent>;
  let storeMock: MockStore<ContactState>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactFormComponent],
      imports: [FormsModule],
      providers: [provideMockStore({initialState: {[contactFeatureKey]: {contacts: [], selectedContact: undefined}}})]
    }).compileComponents();
  });

  beforeEach(async() => {
    fixture = await TestBed.createComponent(ContactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('cannot submit, without value', async() => {
    await fixture.detectChanges();
    await fixture.whenStable().then( () => {
      const contactForm: NgForm = fixture.debugElement.children[0].injector.get(NgForm);
      expect(contactForm?.form.valid).toBeFalsy();
      const button = fixture.debugElement.nativeElement.querySelector('#submitButton');
      expect(button.disabled).toBeTruthy();
    })

  });
  it('should submit, after all values are given', async() => {
    await fixture.whenStable().then( () => {
      storeMock = TestBed.inject(MockStore);
      const spySubmit = spyOn(component, 'onSubmit').and.callThrough();

      const contactForm: NgForm = fixture.debugElement.children[0].injector.get(NgForm);
      contactForm.form.controls['firstName'].setValue('test_venue');
      contactForm.form.controls['lastName'].setValue('test_venue');
      contactForm.form.controls['phone'].setValue('test_venue');
      contactForm.form.controls['email'].setValue('test_venue');
      contactForm.form.controls['address'].setValue('test_venue');
      expect(contactForm.form.valid).toBeTruthy();

      const button = fixture.debugElement.nativeElement.querySelector('#submitButton');
      expect(button.disabled).toBeFalsy();

      // when form is submitted
      button.click();
      fixture.detectChanges();

      expect(spySubmit).toHaveBeenCalled();
      expect(contactForm.form.controls['firstName'].value).toBeNull();
    })
  });

  it('form is submitted, and store add action triggered', async () => {
    storeMock = TestBed.inject(MockStore);
    const spyDispatch = spyOn(storeMock, 'dispatch').and.stub();

    let testForm = new NgForm([], []);
    setTimeout(() => {
      testForm.setValue({
        firstName: "yo",
        lastName: "yo",
        phone: "yo",
        email: "yo",
        address: "yo"
      });
    });

    component.onSubmit(testForm);

    await fixture.detectChanges();
    expect(spyDispatch).toHaveBeenCalledWith(contactActions.addContact({} as Contact));
  });
});
