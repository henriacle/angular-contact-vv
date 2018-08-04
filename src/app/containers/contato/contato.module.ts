import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContatoRoutingModule } from '@app/containers/contato/contato-routing.module';
import { SharedModule } from '@app/shared/shared.module';
import { ContatoService } from '@app/containers/contato/contato.service';
import { ContatoComponent } from '@app/containers/contato/contato-form/contato-form.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ContatoRoutingModule
  ],
  declarations: [ContatoComponent],
  providers: [ContatoService]
})
export class ContatoModule { }
