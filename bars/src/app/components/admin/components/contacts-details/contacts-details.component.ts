import { AdminService } from '../../services/admin.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { User } from '../../user';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-contacts-details',
  templateUrl: './contacts-details.component.html',
  styleUrls: ['./contacts-details.component.scss']
})
export class ContactsDetailsComponent implements OnInit {
  user!: Observable<User>;
  id!: number;
  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    /* this.activateRoute.params.subscribe(params => this.id = params?.['id']);
    this.user = this.adminService.getPerson(this.id) */
    this.user = this.activatedRoute.data.pipe(map((data)=> data?.['user']))
  }

}
