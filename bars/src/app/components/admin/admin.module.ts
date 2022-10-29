import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { MyNotesComponent } from './components/my-notes/my-notes.component';
import { NotesComponent } from './components/notes/notes.component';
import { NoteDetailsComponent } from './components/note-details/note-details.component';


@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    MyNotesComponent,
    NoteDetailsComponent,
    NotesComponent,
    AdminDashboardComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
