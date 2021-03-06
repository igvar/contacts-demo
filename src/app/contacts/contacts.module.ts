import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsComponent } from './contacts.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [ContactsComponent, AddContactComponent],
  imports: [
    CommonModule,
    ContactsRoutingModule,
    HttpClientModule,
		FormsModule,
  ]
})
export class ContactsModule { }
