import {createFeatureSelector, createSelector, MemoizedSelector} from '@ngrx/store';
import * as fromContact from '../reducer/contact.reducer';
import {Contact} from '../../contact';

const getAppState: MemoizedSelector<object, fromContact.ContactState> =
  createFeatureSelector<fromContact.ContactState>(fromContact.contactFeatureKey);

export const getContacts: MemoizedSelector<object, Contact[]> = createSelector(
  getAppState,
  (state: fromContact.ContactState) => state?.contacts
);

export const selectSelectedContact = createSelector(
  getAppState,
  (state: fromContact.ContactState) => state?.selectedContact
);
