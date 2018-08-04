import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiModule } from '@app/ui/ui.module';
import { HttpClientModule } from '@angular/common/http';
import { KeysPipe } from '@app/shared/pipes/keys.pipe';
import { AssuntoComponent } from '@app/components/assunto-select-input/assunto.component';
import { FormGroupContainerComponent } from '@app/components/form-group-container/form-group-container.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    UiModule
  ],
  declarations: [KeysPipe, AssuntoComponent, FormGroupContainerComponent],
  exports: [
    FormGroupContainerComponent,
    AssuntoComponent,
    UiModule,
    KeysPipe,
    FormsModule,
    ReactiveFormsModule
  ],
})
export class SharedModule { }
