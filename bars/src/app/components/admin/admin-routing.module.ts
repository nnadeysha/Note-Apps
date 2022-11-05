import { MyNotesComponent } from './components/my-notes/my-notes.component';
import { NotesResolver} from './resolvers/notes.resolver';
import { NoteResolver} from './resolvers/note.resolver';

import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotesComponent } from '../notes/notes.component';
import { NoteEditComponent } from './components/my-notes/note-edit/note-edit.component';

const routes: Routes = [
  {path: '', component: AdminDashboardComponent,
children: [
  {path: 'notes', component: NotesComponent, resolve: {
    notes: NotesResolver
  }},
  {path: 'notes/note/:id', component: NoteEditComponent, resolve: {
    note: NoteResolver
  }},
  {path: 'notes/note', redirectTo: 'notes', pathMatch: 'full'},
  {path: 'my-notes', component: MyNotesComponent},
  {path: '', redirectTo: 'my-notes', pathMatch: 'full' }
]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
