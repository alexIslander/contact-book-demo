import {ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import { ContactViewComponent } from './contact-view.component';
import {MockStore, provideMockStore} from '@ngrx/store/testing';
import {ContactState} from '../store/reducer/contact.reducer';
import {Contact} from '../contact';

describe('ContactViewComponent', () => {
  let component: ContactViewComponent;
  let fixture: ComponentFixture<ContactViewComponent>;
  let store: MockStore<ContactState>;

  describe('ContactViewComponent positive', async () => {
    let contact = {firstName: 'Main', lastName: 'User'} as Contact;
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ ContactViewComponent ],
        providers: [provideMockStore({initialState: {['contact']: {contacts: [contact], selectedContact: contact}}})]
      })
        .compileComponents();
    });

    it('should display selected contact', () => {
      fixture = TestBed.createComponent(ContactViewComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();

      expect(component).toBeTruthy();
      store = TestBed.inject(MockStore);
      fixture.detectChanges();

      const compiled = fixture.nativeElement as HTMLElement;
      let divElement = compiled.querySelector('div');
      expect(divElement?.textContent).not.toBeNull();
      expect(divElement?.textContent).not.toContain('Nothing to display.');
      expect(compiled.getElementsByTagName('p')[0]?.textContent)
        .toContain('Firstname: Main');
      expect(compiled.getElementsByTagName('p')[1]?.textContent)
        .toContain('Lastname: User');
    });
  });

  describe('ContactViewComponent negative', async () => {
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ ContactViewComponent ],
        providers: [provideMockStore({initialState: {['contact']: {contacts: [], selectedContact: undefined}}})]
      })
        .compileComponents();
    });

    it('should not display selected contact', fakeAsync(() => {
      fixture = TestBed.createComponent(ContactViewComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();

      expect(component).toBeTruthy();
      store = TestBed.inject(MockStore);
      fixture.detectChanges();

      const compiled = fixture.nativeElement as HTMLElement;
      expect(compiled.querySelector('p')?.textContent).toContain('Nothing to display.');
    }));
  });
});
