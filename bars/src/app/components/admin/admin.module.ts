import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { MyNotesComponent } from './components/my-notes/my-notes.component';
import { NoteEditComponent } from './components/my-notes/note-edit/note-edit.component';


@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    MyNotesComponent,
    NoteEditComponent,
    AdminDashboardComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
