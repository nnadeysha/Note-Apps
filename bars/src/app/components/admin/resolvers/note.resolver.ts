import {  NotesService } from '../../../services/notes.service';
import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { catchError, delay, EMPTY, EmptyError, Observable, of } from 'rxjs';
import { INotes } from 'src/app/model/notes.interface';

@Injectable({
  providedIn: 'root'
})
export class NoteResolver implements Resolve<INotes> {
  constructor(
    private notesService: NotesService,
    private router: Router
  ){

  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<INotes> {
    return this.notesService.getNote(route.params?.['id']).pipe(
      delay(2000),
      catchError(() => {
        this.router.navigate(['admin/notes']);
        return EMPTY
      })
    )
  }
}
