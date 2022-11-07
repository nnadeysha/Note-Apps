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


  createNote(note: INotes) {
    return this.http.post<INotes>('http://localhost:3001/notes', note)/* .pipe(map((res: INotes) => res)) */
  }

  delete(id: number){
    return this.http.delete<any>(`http://localhost:3001/notes/${id}`).pipe(map((res: INotes)=> {
      return res
    }))
  }

  update(data: INotes, id: number){
    return this.http.put<INotes>('http://localhost:3001/notes/'+id, data).pipe(map((res: INotes)=> {
      return res
    }))
  }
}
//app.delete('/api/names/:id', (req, res) => { const index = names.indexOf(name); names.splice(index,1); res.send(names); })
