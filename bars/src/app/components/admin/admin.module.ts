import { ModalComponent } from './components/modal/modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { MyNotesComponent } from './components/my-notes/my-notes.component';
import { NoteFormComponent } from './components/my-notes/note-form/note-form.component';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    MyNotesComponent,
    AdminDashboardComponent,
    NoteFormComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
