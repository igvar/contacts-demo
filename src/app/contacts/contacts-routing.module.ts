import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddContactComponent } from './add-contact/add-contact.component';

import { ContactsComponent } from './contacts.component';

const routes: Routes = [
  {
     path: '', 
     component: ContactsComponent
  },
  {
    path: 'add', 
    component: AddContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactsRoutingModule { }
