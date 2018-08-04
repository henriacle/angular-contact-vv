import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaMensagensComponent } from './lista-mensagens/lista-mensagens.component';

const routes: Routes = [
  {
    path: '',
    component: ListaMensagensComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MensagensRoutingModule { }
