import { Action, createReducer, on } from '@ngrx/store';
import * as contactActions from '../action/contact.actions';
import {Contact} from '../../contact';

export const contactFeatureKey = 'contact';

export interface ContactState {
  contacts: Contact[];
  selectedContact: Contact | undefined;
}

export const initialState: ContactState = {
  contacts: [],
  selectedContact: undefined
};

export const contactReducer = createReducer(
  initialState,
  on(contactActions.addContactSuccess, (state: ContactState, {contact}) =>
    ({
      ...state,
      contacts: [...state.contacts, contact]
    })),
  on(contactActions.selectedContact, (state: ContactState, {contact}) =>
    ({
      ...state,
      selectedContact: contact
    }))
);

export function reducer(state: ContactState | undefined, action: Action): any {
  return contactReducer(state, action);
}
