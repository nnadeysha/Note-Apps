import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Notes } from 'src/app/model/notes.interface';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(
    private http: HttpClient
  ) { }

  getNotesList() {
    return this.http.get<Notes[]>('http://localhost:3001/notes')
  }

  getNote(id: number){
    return this.http.get<Notes>(`http://localhost:3001/notes/${id}`)
  }
}
