import { Component, Input, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  @Input()
  title!: string;
  isForm!: boolean;

  constructor(public modalService: ModalService) {}

  ngOnInit(): void {
    this.title = this.modalService.title;
    this.isForm = this.modalService.isForm;
  }
}
