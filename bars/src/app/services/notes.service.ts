import { filter, Observable, tap } from 'rxjs';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { INotes } from 'src/app/model/notes.interface';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  notes: INotes[] = [];
  constructor(
    private http: HttpClient
  ) { }

  getNotesList() {
    return this.http.get<INotes[]>('http://localhost:3001/notes')
  }

  getNote(id: number){
    return this.http.get<INotes>(`http://localhost:3001/notes/${id}`)
  }

  getMyNotes(user: string) {
    return this.http.get<INotes[]>('http://localhost:3001/notes')
  }

  create(note: INotes): Observable<INotes> {
    return this.http.post<INotes>('http://localhost:3001/notes', note)
    .pipe(
      tap(data => this.notes.push(data))
    )
  }
}
