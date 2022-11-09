import {  NotesService } from '../../../services/notes.service';
import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { delay, Observable } from 'rxjs';
import { INotes } from 'src/app/model/notes.interface';

@Injectable({
  providedIn: 'root'
})
export class NoteResolver implements Resolve<INotes[]> {
  constructor(
    private notesService: NotesService
  ){

  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<INotes[]> {
    return this.notesService.getMyNotes(route.params?.['id']).pipe(
      delay(1000)
    )
  }
}
