import { MyNotesComponent } from './../my-notes.component';
import { NotesModel } from './../../../../../model/notes.model';
import { INotes } from 'src/app/model/notes.interface';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  Router,
} from '@angular/router';
import { NotesService } from '../../../../../services/notes.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalService } from 'src/app/services/modal.service';
import { identifierName } from '@angular/compiler';

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.scss'],
})
export class NoteFormComponent implements OnInit {
  noteForm!: FormGroup;
  noteModelObj: INotes = new NotesModel();
  id: number;
  constructor(
    private modalService: ModalService,
    private notesService: NotesService,
    private activatedRoute: ActivatedRoute,
    private myNotes: MyNotesComponent
  ) {
    this.id = activatedRoute.snapshot.params['id'];
  }

  addNewNote() {
    this.noteModelObj.name = this.noteForm.value.name;
    this.noteModelObj.date = this.noteForm.value.date;
    this.noteModelObj.remark = this.noteForm.value.remark;
    this.noteModelObj.userId = this.noteForm.value.userId;
    this.notesService.create(this.noteModelObj).subscribe(() => {
      alert("Note Added Successfull");
      this.noteForm.reset();
      this.modalService.close();
      this.myNotes.ngOnInit()
    },
    err=> {
      alert("Something went wrong")
    });
  }

  ngOnInit(): void {
    this.noteForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(20),
        Validators.pattern(/^(?=[a-z0-9])[a-z0-9\s]{0,99}[a-z0-9]$/i),
      ]),
      date: new FormControl('', [Validators.required]),
      remark: new FormControl('', [
        Validators.pattern(/^(?=[a-z0-9])[a-z0-9\s]{0,99}[a-z0-9]$/i),
        Validators.maxLength(500),
      ]),
      userId: new FormControl(this.id.toString()),
    });
  }
}
