import { MyNotesComponent } from './components/my-notes/my-notes.component';
import { NotesResolver} from './resolvers/notes.resolver';
import { NoteResolver} from './resolvers/note.resolver';

import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotesComponent } from '../notes/notes.component';

const routes: Routes = [
  {path: '', component: AdminDashboardComponent,

children: [
  {path: '',
  resolve: {
    admin: NoteResolver
  }, component: MyNotesComponent},
  {path: 'notes', component: NotesComponent, resolve: {
    notes: NotesResolver
  }}
]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
