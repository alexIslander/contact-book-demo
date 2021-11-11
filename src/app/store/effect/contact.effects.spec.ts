import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import {Observable, of} from 'rxjs';

import { ContactEffects } from './contact.effects';
import {MockStore, provideMockStore} from '@ngrx/store/testing';
import {ContactState, initialState} from '../reducer/contact.reducer';
import * as contactActions from '../action/contact.actions';
import {Contact} from '../../contact';

describe('ContactEffects', () => {
  let actions$: Observable<any>;
  let effects: ContactEffects;
  let store: MockStore<ContactState>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ContactEffects,
        provideMockActions(() => actions$),
        provideMockStore({ initialState })
      ]
    });

    effects = TestBed.inject(ContactEffects);
    store = TestBed.inject(MockStore);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('addContact$', () => {
    it('should trigger addContactSuccess action', (done) => {
      let contact = {} as Contact;
      actions$ = of(contactActions.addContact(contact));
      effects.addContact$.subscribe((res) => {
        expect(res).toEqual(contactActions.addContactSuccess(contact));
        done();
      });
    });
  });
});
