import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClient, HttpClientModule, HttpHandler} from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { ContactsService } from './contacts.service';
import { Contact } from '../model/contact';

describe('ContactsService', () => {
  let service: ContactsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClientTestingModule, HttpClient, HttpHandler]
    });
    service = TestBed.inject(ContactsService);
  });

  it('should be created', () => {
    expect(service.getContacts).toBeTruthy();
  });

  it("should empty all contacts (with default data)", () => {
    service.removeAllContacts();
    expect(service.contacts.length).toBe(0);
  });


  it("should add contact (with default data)", () => {
    let contact: Contact = 
      {
        firstName:'mario', 
        lastName: 'rossi', 
        phoneNumber: '322', 
        email: 'mario.rossi@test.com'
      };

    let initialLength = service.contacts.length;

    service.addContact(contact);

    expect(service.contacts.length).toBe(initialLength + 1);
  });

  it("should modify contact at first index (with default data)", () => {

    service.updateContact(0, 
      {
        firstName:'test', 
        lastName: 'test', 
        phoneNumber: 'test', 
        email: 'test@test.com'
      });

    expect(service.contacts[0].firstName).toBe('test');
    expect(service.contacts[0].firstName).not.toBe('mario');
  });

  it("should modify contact at last index (with default data)", () => {

    let lastIndex = service.contacts.length - 1;

    service.updateContact(lastIndex, 
      {
        firstName:'test', 
        lastName: 'test', 
        phoneNumber: 'test', 
        email: 'test@test.com'
      });

    expect(service.contacts[lastIndex].firstName).toBe('test');
    expect(service.contacts[lastIndex].firstName).not.toBe('andrea');
  });

  it("should remove contact at first index (with default data)", () => {

    let lengthBeforeRemove = service.contacts.length;

    service.removeContact(0);

    expect(service.contacts.length).toBe(lengthBeforeRemove - 1);

  });

  it("should remove contact at last index (with default data)", () => {

    let lengthBeforeRemove = service.contacts.length;

    service.removeContact(lengthBeforeRemove -1);

    expect(service.contacts.length).toBe(lengthBeforeRemove - 1);

  });

  /* Starting with emty list of contacts */

  it("should empty all contacts (with NO default data)", () => {
    service.contacts = [];

    service.removeAllContacts();
    expect(service.contacts.length).toBe(0);
  });


  it("should add contact (with NOs default data)", () => {
    service.contacts = [];

    let contact: Contact = 
      {
        firstName:'mario', 
        lastName: 'rossi', 
        phoneNumber: '322', 
        email: 'mario.rossi@test.com'
      };

    let initialLength = service.contacts.length;

    service.addContact(contact);

    expect(service.contacts.length).toBeGreaterThan(0);
    expect(service.contacts.length).toBe(initialLength + 1);
  });

  it("should modify contact at first index (with NO default data)", () => {
    service.contacts = [];

    service.addContact( 
      {
        firstName:'test before', 
        lastName: 'tes beforet', 
        phoneNumber: 'test before', 
        email: 'test-before@test.com'
    });

    service.updateContact(0, 
      {
        firstName:'test', 
        lastName: 'test', 
        phoneNumber: 'test', 
        email: 'test@test.com'
    });

    expect(service.contacts.length).toBeGreaterThan(0);
    expect(service.contacts[0].firstName).toBe('test');
    expect(service.contacts[0].firstName).not.toBe('test before');
  });

  it("should modify contact at last index (with NO default data)", () => {
    service.contacts = [];

    service.addContact( 
      {
        firstName:'test', 
        lastName: 'test', 
        phoneNumber: 'test', 
        email: 'test@test.com'
      });

    service.addContact( 
      {
        firstName:'test2', 
        lastName: 'test2', 
        phoneNumber: 'test2', 
        email: 'test2@test.com'
      });

    let lastIndex = service.contacts.length - 1;

    expect(service.contacts[lastIndex].firstName).not.toBe('test');
    expect(service.contacts[lastIndex].firstName).toBe('test2');

    service.updateContact(lastIndex, 
      {
        firstName:'test3', 
        lastName: 'test3', 
        phoneNumber: 'test3', 
        email: 'test3@test.com'
      });

    expect(service.contacts[lastIndex - 1].firstName).toBe('test');
    expect(service.contacts[lastIndex - 1].firstName).not.toBe('test2');
  });

  it("should remove contact at first index (with NO default data)", () => {
    service.contacts = [];

    service.removeContact(0);

    expect(service.contacts.length).toBe(0);

  });

  it("should remove contact at last index (with NO default data)", () => {
    service.contacts = [];

    let lengthBeforeRemove = service.contacts.length;

    service.removeContact(lengthBeforeRemove -1);

    expect(service.contacts.length).toBe(0);

  });

});
