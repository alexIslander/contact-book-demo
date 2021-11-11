import {reducer, initialState, ContactState} from './contact.reducer';
import {Contact} from '../../contact';
import {addContactSuccess, selectedContact} from '../action/contact.actions';

describe('Contact Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;
      const result = reducer(initialState, action);
      expect(result).toBe(initialState);
    });
  });

  describe('Action cases', () => {
    it('when addContactSuccess action dispatched, should update contacts', () => {
      const input = {firstName: 'Main', lastName: 'User'} as Contact;
      const result: ContactState = reducer(initialState, addContactSuccess(input));
      expect(result.contacts).toEqual([input]);
    });
    it('when selectedContact action dispatched, should update selectedContact', () => {
      const input = {firstName: 'Main', lastName: 'User'} as Contact;
      const result: ContactState = reducer(initialState, selectedContact(input));
      expect(result.selectedContact).toEqual(input);
    });
  });
});
