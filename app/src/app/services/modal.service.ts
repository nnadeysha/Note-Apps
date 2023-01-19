import { ThisReceiver } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  isVisible$ = new BehaviorSubject<boolean>(false);
  title!: string;
  isForm!: boolean;
  isDeleteForm?: boolean;

  open(title: string, isForm: boolean, isDeleteForm?: boolean) {
    this.isVisible$.next(true);
    this.title = title;
    this.isForm = isForm;
    this.isDeleteForm = isDeleteForm;
  }

  close() {
    this.isVisible$.next(false);
  }
}
