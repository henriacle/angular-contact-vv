import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MensagemSelecionadaComponent } from './mensagem-selecionada.component';

describe('MensagemSelecionadaComponent', () => {
  let component: MensagemSelecionadaComponent;
  let fixture: ComponentFixture<MensagemSelecionadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MensagemSelecionadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MensagemSelecionadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
