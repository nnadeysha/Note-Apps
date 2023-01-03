import { AuthService } from 'src/app/services/auth.service';
import { NotesService } from '../../services/notes.service';
import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { delay, Observable, tap } from 'rxjs';
import { INotes } from 'src/app/model/notes.interface';

@Injectable({
  providedIn: 'root',
})
export class MyNotesResolver implements Resolve<INotes[]> {
  constructor(
    private notesService: NotesService,
    private authService: AuthService
  ) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<INotes[]> {
    return this.notesService.getMyNotes(route.params?.['id']).pipe(delay(1000));
  }
}
