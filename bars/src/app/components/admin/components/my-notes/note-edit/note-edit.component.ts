import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { INotes } from 'src/app/model/notes.interface';

@Component({
  selector: 'app-note-edit',
  templateUrl: './note-edit.component.html',
  styleUrls: ['./note-edit.component.scss']
})
export class NoteEditComponent implements OnInit {
  notes!: Observable<INotes>;
  id!: number;
  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    /* this.activateRoute.params.subscribe(params => this.id = params?.['id']);
    this.user = this.adminService.getPerson(this.id) */
    this.notes = this.activatedRoute.data.pipe(map((data)=> data?.['note']))
  }

}
