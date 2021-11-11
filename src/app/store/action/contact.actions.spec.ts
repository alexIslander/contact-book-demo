import * as fromContact from './contact.actions';

describe('ContactActions', () => {
  it('should return add contact', () => {
    expect(fromContact.addContact.type).toBe('[Contact] Add Contact');
  });
  it('should return add contact success', () => {
    expect(fromContact.addContactSuccess.type).toBe('[Contact] Add Contact Success');
  });
  it('should return selected contact', () => {
    expect(fromContact.selectedContact.type).toBe('[Contact] Select Contact');
  });
});
