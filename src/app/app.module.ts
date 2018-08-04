import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from '@app/app.component';
import { AppRoutingModule } from '@app/app-routing.module';
import { ContatoModule } from '@app/containers/contato/contato.module';
import { SharedModule } from '@app/shared/shared.module';
import { MensagensModule } from '@app/containers/mensagens/mensagens.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ContatoModule,
    MensagensModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
