import * as fromContact from './contact.actions';

describe('addContacts', () => {
  it('should return an action', () => {
    expect(fromContact.addContact.type).toBe('[Contact] Add Contact');
  });
});
