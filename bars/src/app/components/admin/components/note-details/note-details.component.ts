import { AdminService } from '../../services/admin.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { User } from '../../user';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-note-details',
  templateUrl: './note-details.component.html',
  styleUrls: ['./note-details.component.scss']
})
export class NoteDetailsComponent implements OnInit {
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
