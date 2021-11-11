import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ContactListComponent} from './contact-list.component';
import {contactFeatureKey, ContactState} from '../store/reducer/contact.reducer';
import {MockStore, provideMockStore} from '@ngrx/store/testing';
import {Contact} from '../contact';
import * as contactActions from '../store/action/contact.actions';

describe('ContactListComponent', () => {
  let component: ContactListComponent;
  let fixture: ComponentFixture<ContactListComponent>;
  let store: MockStore<ContactState>;
  let contact = {firstName: 'Main', lastName: 'User'} as Contact;

  describe('ContactListComponent negative', async () => {
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ContactListComponent],
        providers: [provideMockStore({initialState: {[contactFeatureKey]: {contacts: [], selectedContact: undefined}}})]
      })
        .compileComponents();
    });

    it('should not display contact list', () => {
      fixture = TestBed.createComponent(ContactListComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();

      expect(component).toBeTruthy();
      store = TestBed.inject(MockStore);
      fixture.detectChanges();

      const compiled = fixture.nativeElement as HTMLElement;
      expect(compiled.querySelector('p')?.textContent).toContain('Nothing to display.');
    });
  });

  describe('ContactListComponent positive', async () => {
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ContactListComponent],
        providers: [provideMockStore({initialState: {['contact']: {contacts: [contact], selectedContact: undefined}}})]
      })
        .compileComponents();
    });

    beforeEach(() => {
      fixture = TestBed.createComponent(ContactListComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should display contact list', () => {
      expect(component).toBeTruthy();
      store = TestBed.inject(MockStore);

      const compiled = fixture.nativeElement as HTMLElement;
      expect(compiled.querySelector('table')).not.toBeNull();
      expect(compiled.querySelector('.head')).not.toBeNull();
      expect(compiled.getElementsByTagName('tr').length).toBe(2);
      let firstDataLine = compiled.getElementsByTagName('tr')[1];
      let firstCell = firstDataLine.getElementsByTagName('td')[0];
      let secondCell = firstDataLine.getElementsByTagName('td')[1];
      expect(firstCell.textContent).toBe('Main');
      expect(secondCell.textContent).toBe('User');
    });

    it('selected row should be highlighted', async () => {
      expect(component).toBeTruthy();
      store = TestBed.inject(MockStore);
      const spyDispatch = spyOn(store, 'dispatch').and.stub();
      const spySelect = spyOn(component, 'onSelect').and.callThrough();

      const compiled = fixture.nativeElement as HTMLElement;
      expect(compiled.querySelector('table')).not.toBeNull();
      let firstDataLine = compiled.getElementsByTagName('tr')[1];

      firstDataLine.click();

      fixture.detectChanges();
      expect(spySelect).toHaveBeenCalledTimes(1);
      expect(firstDataLine.className).toBe('selected');
      await fixture.detectChanges();
      expect(spyDispatch).toHaveBeenCalledWith(contactActions.selectedContact(contact));
    });
  });
});
