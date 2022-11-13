import { Injectable } from '@angular/core';
import {Resolve} from '@angular/router';
import { delay, Observable } from 'rxjs';
import { INotes } from 'src/app/model/notes.interface';
import { NotesService } from '../../services/notes.service';

@Injectable({
  providedIn: 'root'
})
export class NotesResolver implements Resolve<INotes[]> {

  constructor(
    private notesService: NotesService
  ) { }

  resolve(): Observable<INotes[]> {
    return this.notesService.getNotesList().pipe(
      delay(1000)
    )
  }
}
