import { INotes } from 'src/app/model/notes.interface';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterNotes'
})
export class FilterNotesPipe implements PipeTransform {

  transform(notes: INotes[], id: number): INotes[] {

    return notes.filter(note =>  note.userId === id)
  }

}
