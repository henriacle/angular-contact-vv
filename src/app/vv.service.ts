import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Injectable } from '@angular/core';
import { ContactMessage } from '@app/via-varejo';
import swal from 'sweetalert2';

@Injectable()
export class VvService {
  messageList: BehaviorSubject<ContactMessage[]> = new BehaviorSubject([]);

  constructor() { }

  public storeMessage(message: ContactMessage): Promise<any> {
    return new Promise((resolve, reject) => {
      const localMessages = localStorage.contactMessages;
      const currentDate = new Date();
      message.data = currentDate.getTime();
      message.id = (currentDate.getTime() + Math.random()).toString();

      if (!localMessages) {
        this.checkStorage(localMessages, message);
        this.getLocalMessages();
        resolve();
      }

      this.setLocalMessages(localMessages, message);
      resolve();
    });
  }

  private checkStorage(localMessages, message) {
    const messages = [message];
    this.setLocalMessage(JSON.stringify(messages));
  }

  private setLocalMessages(localMessages, message) {
    localMessages = JSON.parse(localMessages);
    localMessages.push(message);
    this.setLocalMessage(JSON.stringify(localMessages));
  }

  private setLocalMessage(mensagens) {
    localStorage.setItem('contactMessages', mensagens);
  }

  public getLocalMessages() {
    const local = localStorage.contactMessages;

    if (!local) {
      this.messageList.next([]);
      return;
    }

    const messages = JSON.parse(localStorage.contactMessages);
    this.messageList.next(messages);
  }

  public removerMensagem(mensagem: ContactMessage) {
    const lista: ContactMessage[] = JSON.parse(localStorage.contactMessages);
    const novaLista = lista.filter((data) => {
      if (data.id !== mensagem.id) {
        return data;
      }
    });

    swal('Sucesso', 'Mensagem removida com sucesso!', 'success');

    this.setLocalMessage(JSON.stringify(novaLista));
    this.messageList.next(novaLista);
  }
}
