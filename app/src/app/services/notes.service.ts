import { delay, map, retry } from 'rxjs/operators';
import { Observable, tap } from 'rxjs';
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
    return this.http.get<INotes[]>('http://localhost:3001/notes').pipe(
      delay(200),
      retry(2),
      tap((notes) => this.notes = notes),

    )
  }

  getMyNotes(idUser: string) {
    return this.http.get<INotes[]>('http://localhost:3001/notes').pipe(
      retry(2),
      map((data) => {
        return data.filter(note => note.userId === idUser)
      })

    )
  }


  create(note: INotes) {
    return this.http.post<INotes>('http://localhost:3001/notes', note).pipe(
      tap(note => this.notes.push(note))
    )
  }

  delete(id: number){
    return this.http.delete<any>(`http://localhost:3001/notes/${id}`).pipe(map((res: INotes)=> {
      return res
    }))
  }

  update(data: INotes, id: number){
    return this.http.put<INotes>(`http://localhost:3001/notes/${id}`, data).pipe(map((res: INotes)=> {
      return res
    }))
  }
}
