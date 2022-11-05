import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, map, Observable } from 'rxjs';
import { INotes } from 'src/app/model/notes.interface';

@Component({
  selector: 'app-my-notes',
  templateUrl: './my-notes.component.html',
  styleUrls: ['./my-notes.component.scss']
})
export class MyNotesComponent implements OnInit {
  notesList!: Observable<INotes[]>
  constructor(
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.notesList = this.activatedRoute.data.pipe(map((data)=> {
      return data?.['notes']
    }
      ))

      
  }



}
// /p.title.toLowerCase().includes(search.toLowerCase())
