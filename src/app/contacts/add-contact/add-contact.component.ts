import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from 'src/app/model/contact';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent implements OnInit {

  isEdit: boolean = false;
  indexToEdit: number = 0;

  showAlert: boolean = false;

  contact: Contact = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: ''
  }

  constructor(public contactService: ContactsService, private router: Router) { }

  ngOnInit() {
    this.isEdit =  (localStorage.getItem('isEdit') == 'true');

    let indexString = localStorage.getItem('indexToEdit');
    this.indexToEdit = parseInt(indexString ? indexString: '0');

    if(this.isEdit){
      this.contactService.getContacts()
        .subscribe((contacts: Contact[])=>{
          contacts.forEach((elem: Contact, index: number) => {
            if(index === this.indexToEdit) {
              this.contact = elem;
            }
          })
        });
    }

    localStorage.setItem('isEdit', '');
    localStorage.setItem('indexToEdit', '');
  }

  goToContacts(){
    this.router.navigate(['/contacts']);
  }

  updateContact(){
    if(this.isEdit) {
      this.contactService.updateContact(
        this.indexToEdit,
        {
          firstName: this.contact.firstName,
          lastName: this.contact.lastName,
          phoneNumber: this.contact.phoneNumber,
          email: this.contact.email
        }
      )
      this.showAlert = true;
    }
  }

  addContact(){
    this.contactService.addContact(
      {
        firstName: this.contact.firstName,
        lastName: this.contact.lastName,
        phoneNumber: this.contact.phoneNumber,
        email: this.contact.email
      }
    )
    this.showAlert = true;
  }

}
