import { NoteFormComponent } from './note-form/note-form.component';
import { NotesService } from './../../../../services/notes.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, map, Observable } from 'rxjs';
import { INotes } from 'src/app/model/notes.interface';
import { ModalService } from 'src/app/services/modal.service';


@Component({
  selector: 'app-my-notes',
  templateUrl: './my-notes.component.html',
  styleUrls: ['./my-notes.component.scss']
})
export class MyNotesComponent implements OnInit {
  idUser: string;
  notesList!: Observable<INotes[]>
  notes! : INotes[];

  constructor(
    private activatedRoute: ActivatedRoute,
    public modalService: ModalService,
    public notesService: NotesService,
  ) {
    this.idUser = activatedRoute.snapshot.params['id'];
  }

  ngOnInit(){
    this.notesList = this.notesService.getNotesList().pipe(map((data)=> {
      return data.filter(note => note.userId === this.idUser.toString())
    }));

  }

  deleteNote(id: number) {

    this.notesService.delete(id).subscribe(res => {
      alert('Note deleted');
      this.ngOnInit()
    })
  }

}

