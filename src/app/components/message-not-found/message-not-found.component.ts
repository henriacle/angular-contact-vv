import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'vv-message-not-found',
  templateUrl: './message-not-found.component.html',
  styleUrls: ['./message-not-found.component.scss']
})
export class MessageNotFoundComponent implements OnInit {
  @Input() messagesLength;
  constructor() { }

  ngOnInit() {
  }

}
