import {createAction} from '@ngrx/store';
import {Contact} from '../../contact';

export const addContact = createAction(
  '[Contact] Add Contact',
  (contact: Contact) => ({contact})
);

export const addContactSuccess = createAction(
  '[Contact] Add Contacts Success',
  (contact: Contact) => ({contact})
);

export const selectedContact = createAction(
  '[Contact] Select Contact',
  (contact: Contact) => ({contact})
);
