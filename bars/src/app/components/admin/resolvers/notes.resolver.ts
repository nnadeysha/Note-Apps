import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { catchError, delay, EMPTY, Observable, of } from 'rxjs';
import { Notes } from 'src/app/model/notes.interface';
import { NotesService } from '../../../services/notes.service';

@Injectable({
  providedIn: 'root'
})
export class NotesResolver implements Resolve<Notes[]> {

  constructor(
    private  notesService:  NotesService
  ){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Notes[]> {
    return this.notesService.getNotesList().pipe(
      delay(2000)
    )
  }
}
