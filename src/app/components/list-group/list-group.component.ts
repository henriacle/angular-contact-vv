import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ContactMessage } from '@app/via-varejo';

@Component({
  selector: 'vv-list-group',
  templateUrl: './list-group.component.html',
  styleUrls: ['./list-group.component.scss']
})
export class ListGroupComponent implements OnInit {
  @Input() messages: ContactMessage[];
  @Output() selectedMessage: EventEmitter<ContactMessage> = new EventEmitter();
  currentMessage: ContactMessage;
  constructor() { }

  ngOnInit() {
  }

  selectMessage(message) {
    this.currentMessage = message;
    this.selectedMessage.emit(message);
  }
}
