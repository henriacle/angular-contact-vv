import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ContactMessage } from '@app/via-varejo';

@Component({
  selector: 'vv-mensagem-selecionada',
  templateUrl: './mensagem-selecionada.component.html',
  styleUrls: ['./mensagem-selecionada.component.scss']
})
export class MensagemSelecionadaComponent implements OnInit {
  @Input() message;
  @Output() removerMensagem: EventEmitter<ContactMessage> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  removerMensagemHandler(mensagem: ContactMessage) {
    this.removerMensagem.emit(mensagem);
  }

}
