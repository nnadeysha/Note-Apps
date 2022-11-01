import { Notes } from 'src/app/model/notes.interface';
import { map, mapTo } from 'rxjs/operators';
import { ResolveEnd, ResolveStart, Router, ActivatedRoute } from '@angular/router';
import { filter, merge, Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {



  notesList!: Observable<Notes[]>

  constructor(

    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    /* this.personalList = this.adminService.getPersonalList(); */
    this.notesList = this.activatedRoute.data.pipe(map((data)=> {
      console.log(data?.['notes'])
      return data?.['notes']
    }
      ))

  }

}
