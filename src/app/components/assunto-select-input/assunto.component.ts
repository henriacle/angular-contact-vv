import { Component, OnInit, Input, forwardRef, HostListener, ViewChild, Renderer2 } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormControl } from '@angular/forms';

const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => AssuntoComponent),
  multi: true
};

@Component({
  selector: 'vv-assunto',
  templateUrl: './assunto.component.html',
  styleUrls: ['./assunto.component.scss'],
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class AssuntoComponent implements ControlValueAccessor {
  @ViewChild('assunto') assunto;
  @Input() assuntoList;

  onChange;
  onTouched;

  constructor( private renderer: Renderer2 ) { }

  writeValue( value: any ): void {
    const div = this.assunto.nativeElement;
    this.renderer.setValue(div, value);
  }

  registerOnChange( fn: any ): void {
    this.onChange = fn;
  }

  registerOnTouched( fn: any ): void {
    this.onTouched = fn;
  }

  setDisabledState(): void {
  }

  change( $event ) {
    this.onChange($event.target.value);
    this.onTouched($event.target.value);
  }
}
