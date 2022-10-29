import { UsersResolver } from './resolvers/users.resolver';
import { UserResolver } from './resolvers/user.resolver';
import { HomeComponent } from './components/home/home.component';
import { ContactsDetailsComponent } from './components/contacts-details/contacts-details.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: AdminDashboardComponent,
children: [
  {path: 'contacts', component: ContactsComponent, resolve: {
    users: UsersResolver
  }},
  {path: 'contacts/user/:id', component: ContactsDetailsComponent, resolve: {
    user: UserResolver
  }},
  {path: 'contacts/user', redirectTo: 'contacts', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full' }
]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
