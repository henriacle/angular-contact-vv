import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'contato'
  },
  {
    path: 'contato',
    loadChildren: '@app/containers/contato/contato.module#ContatoModule'
  },
  {
    path: 'mensagens',
    loadChildren: '@app/containers/mensagens/mensagens.module#MensagensModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
