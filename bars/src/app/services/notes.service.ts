import { map } from 'rxjs/operators';
import { filter, Observable, tap } from 'rxjs';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { INotes } from 'src/app/model/notes.interface';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  notes: INotes[] = [];
  notesList!: Observable<INotes[]>
  constructor(
    private http: HttpClient
  ) { }

  getNotesList() {
    return this.http.get<INotes[]>('http://localhost:3001/notes')
  }

  getNote(id: number){
    return this.http.get<INotes>(`http://localhost:3001/notes/${id}`)
  }


  create(note: INotes) {
    return this.http.post<INotes>('http://localhost:3001/notes', note)/* .pipe(map((res: INotes) => res)) */
  }
}
