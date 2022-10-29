import { map, mapTo } from 'rxjs/operators';
import { ResolveEnd, ResolveStart, Router, ActivatedRoute } from '@angular/router';
import { AdminService } from './../../services/admin.service';
import { filter, merge, Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { User } from '../../user';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {



  personalList!: Observable<User[]>

  constructor(private adminService: AdminService,
    
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    /* this.personalList = this.adminService.getPersonalList(); */
    this.personalList = this.activatedRoute.data.pipe(map((data)=> data?.['users']))


  }

}
