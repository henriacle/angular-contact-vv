import { Component, OnInit, DoCheck, ElementRef, Renderer2, ContentChild, ContentChildren } from '@angular/core';

@Component({
  selector: 'vv-form-group-container',
  templateUrl: './form-group-container.component.html',
  styleUrls: ['./form-group-container.component.scss']
})
export class FormGroupContainerComponent implements OnInit, DoCheck {
  @ContentChild('vvInput') vvInput: ElementRef;
  @ContentChildren('vvInputDeep') vvInputDeep: ElementRef;

  constructor(private elf: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
  }

  ngDoCheck() {
    if (!this.vvInput) {
      return;
    }

    const classListElement = this.vvInput.nativeElement;
    const classList: any = this.vvInput.nativeElement.classList;
    this.checkInvalid(classList, classListElement);
  }

  checkInvalid(classList, classListElement) {
    if (classList.contains('ng-invalid') && classList.contains('ng-dirty') ) {
      this.renderer.addClass(classListElement, 'is-invalid');
      return;
    }

    if (!classList.contains('ng-invalid')) {
      this.renderer.removeClass(classListElement, 'is-invalid');
    }
  }
}
