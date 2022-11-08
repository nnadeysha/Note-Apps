import { NotesService } from './../../../../services/notes.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, map, Observable } from 'rxjs';
import { INotes } from 'src/app/model/notes.interface';
import { ModalService } from 'src/app/services/modal.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { NotesModel } from 'src/app/model/notes.model';


@Component({
  selector: 'app-my-notes',
  templateUrl: './my-notes.component.html',
  styleUrls: ['./my-notes.component.scss']
})
export class MyNotesComponent implements OnInit {
  idUser: string;
  notesList!: Observable<INotes[]>
  notes! : INotes[];
  noteForm!: FormGroup;
  noteModelObj: INotes = new NotesModel();

  constructor(
    private activatedRoute: ActivatedRoute,
    public modalService: ModalService,
    public notesService: NotesService,
  ) {
    this.idUser = activatedRoute.snapshot.params['id'];
  }

  ngOnInit(){
    this.getMyNotes();
    this.noteForm = new FormGroup({
      name: new FormControl ('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(20),
        Validators.pattern(/^(?=[a-z0-9])[a-z0-9\s]{0,99}[a-z0-9]$/i),
      ]),
      date:new FormControl ('', [Validators.required]),
      remark:new FormControl ('', [
        Validators.pattern(/^(?=[a-z0-9])[a-z0-9\s]{0,99}[a-z0-9]$/i),
        Validators.maxLength(500),
      ]),
      userId:new FormControl (this.idUser.toString()),
      number:new FormControl (0,[ Validators.required,Validators.min(1), Validators.max(10000)])
    });

  }

  getMyNotes(){
    this.notesList = this.notesService.getMyNotes(this.idUser)/* .pipe(map((data)=> {
      return data.filter(note => note.userId === this.idUser.toString())
    })) */

  }

  deleteNote(id: number) {

    this.notesService.delete(id).subscribe(res => {
      alert('Note deleted');
      this.getMyNotes()
    })
  }

  openForm(){

  }

  addNewNote() {
    this.noteModelObj.name = this.noteForm.value.name;
    this.noteModelObj.date = this.noteForm.value.date;
    this.noteModelObj.remark = this.noteForm.value.remark;
    this.noteModelObj.userId = this.idUser.toString();
    this.noteModelObj.number = this.noteForm.value.number;

    this.notesService.createNote(this.noteModelObj).subscribe(() => {
      alert("Note Added Successfull");
      this.modalService.close();
      this.getMyNotes()
    },
    err=> {
      alert("Something went wrong")
    });
  }

  editNote(data: INotes, id: number){
    this.noteForm.controls['name'].setValue(data.name);
    this.noteForm.controls['number'].setValue(data.number);
    this.noteForm.controls['date'].setValue(data.date);
    this.noteForm.controls['remark'].setValue(data.remark);
    this.notesService.update(data, id);
    this.getMyNotes()
  }

}

