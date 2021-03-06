import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../model/contact';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(private http: HttpClient) { }

  contacts: Contact[] = [
    {firstName:'mario', lastName: 'rossi', phoneNumber: '322', email: 'mario.rossi@test.com'},
    {firstName:'giuseppe', lastName: 'verdi', phoneNumber: '911', email: 'giuseppe.verdi@test.com'},
    {firstName: 'andrea', lastName: 'bianchi', phoneNumber: '777', email: 'andrea.bianchi@test.com'}
  ];

  getContacts():Observable<Contact[]>{
    return of (this.contacts);
  }

  addContact(contact: Contact){
    return of ( this.contacts.push(contact));
  }

  removeContact(index: number){
    this.contacts.splice(index, 1);
  }

  removeAllContacts(){
    this.contacts = [];
  }

  updateContact(index: number, contact: Contact){
    this.contacts.forEach(
      (elem, i)=> {
        if(index === i){
          this.contacts[i] = contact;
        }
      }
    )
  }

}
