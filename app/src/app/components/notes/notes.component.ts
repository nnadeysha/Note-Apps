import { AuthService } from 'src/app/services/auth.service';
import { INotes } from 'src/app/model/notes.interface';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {



  notesList!: Observable<INotes[]>

  constructor(

    private activatedRoute: ActivatedRoute,
    private authService: AuthService
    ) { }

  ngOnInit(): void {
    this.notesList = this.activatedRoute.data.pipe(map((data)=> {
      console.log(data)
      return data?.['notes']
    }
      ))

  }

  isAuth(): boolean {
    return this.authService.isLoggedIn()
  }

}
