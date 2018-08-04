import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ContactMessage } from '@app/via-varejo';

@Component({
  selector: 'vv-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {
  @Input() active: boolean;
  @Input() message: ContactMessage;
  @Output() selectMessage: EventEmitter<ContactMessage> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  select(message) {
    this.selectMessage.emit(message);
  }
}
