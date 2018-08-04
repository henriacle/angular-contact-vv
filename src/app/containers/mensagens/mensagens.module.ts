import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MensagensRoutingModule } from './mensagens-routing.module';
import { ListaMensagensComponent } from './lista-mensagens/lista-mensagens.component';
import { ListItemComponent } from '@app/components/list-item/list-item.component';
import { ListGroupComponent } from '@app/components/list-group/list-group.component';
import { MensagemSelecionadaComponent } from '@app/components/mensagem-selecionada/mensagem-selecionada.component';

@NgModule({
  imports: [
    CommonModule,
    MensagensRoutingModule
  ],
  declarations: [
    ListaMensagensComponent,
    ListItemComponent,
    ListGroupComponent,
    MensagemSelecionadaComponent
  ]
})
export class MensagensModule { }
