import { Component, OnInit } from '@angular/core';
import { VvService } from '@app/vv.service';
import { ContactMessage } from '@app/via-varejo';
import swal from 'sweetalert2';

@Component({
  selector: 'vv-lista-mensagens',
  templateUrl: './lista-mensagens.component.html',
  styleUrls: ['./lista-mensagens.component.scss']
})
export class ListaMensagensComponent implements OnInit {
  messages: ContactMessage[] = [];
  selectedMessage: ContactMessage;
  constructor(public vvService: VvService) { }

  ngOnInit() {
    this.vvService.getLocalMessages();

    this.vvService.messageList.subscribe(data => {
      this.messages = data;
    });
  }

  removerMensagem(message: ContactMessage) {
    swal({
      title: 'Deseja realmente remover essa mensagem?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim',
      cancelButtonText: 'Não'
    }).then((doIt) => {
      if (doIt.value) {
        this.vvService.removerMensagem(message);
        this.selectedMessage = null;
      }
    });
  }
}
