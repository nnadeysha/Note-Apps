import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {

  noteForm!: FormGroup;

  constructor() {}

  addNewNote() {

  }

  ngOnInit(): void {
    this.noteForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-zA-Z][a-zA-Z0-9-_.]{1,20}$'),
      ]),
      date: new FormControl('', [
        Validators.required
      ]),
      remark: new FormControl('', [
        Validators.pattern('^[a-zA-Z][a-zA-Z0-9-_.]{0,200}$'),
      ]),
    });

}}
