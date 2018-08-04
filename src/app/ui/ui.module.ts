import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '@app/ui/footer/footer.component';
import { HeaderComponent } from '@app/ui/header/header.component';
import { StageComponent } from '@app/ui/stage/stage.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    HeaderComponent,
    StageComponent,
    FooterComponent
  ],
  exports: [
    HeaderComponent,
    StageComponent,
    FooterComponent
  ]
})
export class UiModule { }
