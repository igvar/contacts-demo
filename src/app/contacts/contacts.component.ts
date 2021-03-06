import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Contact } from '../model/contact';
import { ContactsService } from './contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  isEdit: boolean = true;
  indexToEdit: number = 0;
  showAlert:boolean = false;

  firstName:string = "";
  lastName:string = "";
  phoneNumber:string = "";

  contacts$: Observable<Contact[]> = new Observable<Contact[]>();

  constructor(public contactService: ContactsService, private router: Router) { }

  ngOnInit() {
    this.contacts$ = this.contactService.getContacts();
  }

  goToAdd(){
    this.router.navigate(['/contacts/add']);
  }

  goToEdit(index: number){

    localStorage.setItem('isEdit', 'true');
    localStorage.setItem('indexToEdit', index.toString());

    this.isEdit = true;
    this.indexToEdit = index;

    this.router.navigate(['/contacts/add']);
  }

  addContact(){
    this.contactService.addContact(
      {
        firstName: this.firstName,
        lastName: this.lastName,
        phoneNumber: this.phoneNumber
      }
    )
    this.showAlert = true;
  }

  removeContact(index: number){
    this.contactService.removeContact(index);
    this.showAlert = true;
  }

}
