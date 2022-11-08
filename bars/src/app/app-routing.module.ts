import { SignUpComponent } from './components/users/sign-up/sign-up.component';
import { NotesComponent } from './components/notes/notes.component';
import { LoginComponent } from './components/users/login/login.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { AuthGuard } from './guards/auth.guard';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotesResolver } from './components/admin/resolvers/notes.resolver';




const routes: Routes = [
  {path: '', redirectTo: '/main-page', pathMatch: 'full'},
  {path: 'main-page', component: MainPageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'notes', component: NotesComponent, resolve: {
    notes: NotesResolver
  }},
  {path: 'admin/:id',
  canActivate: [AuthGuard],
  canDeactivate: [AuthGuard],
    loadChildren: () => import('./components/admin/admin.module').then(module => module.AdminModule)
  },
  {path: '**', component: NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
