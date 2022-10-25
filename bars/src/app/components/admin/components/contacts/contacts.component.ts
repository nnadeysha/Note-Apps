import { AdminService } from './../../services/admin.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { User } from '../../user';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  personalList!: Observable<User[]>

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.personalList = this.adminService.getPersonalList()
  }

}
