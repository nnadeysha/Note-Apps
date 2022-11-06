import {  NotesService } from '../../../services/notes.service';
import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { catchError, delay, EMPTY, EmptyError, Observable, of, filter } from 'rxjs';
import { INotes } from 'src/app/model/notes.interface';

@Injectable({
  providedIn: 'root'
})
export class MyNotesResolver implements Resolve<INotes[]> {
  constructor(
    private  notesService:  NotesService
  ){}

  resolve(): Observable<INotes[]> {
    return this.notesService.getNotesList().pipe(
      delay(2000),
    )
  }
  /* resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<INotes[]> {

  } */
}
