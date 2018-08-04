import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaMensagensComponent } from './lista-mensagens.component';

describe('ListaMensagensComponent', () => {
  let component: ListaMensagensComponent;
  let fixture: ComponentFixture<ListaMensagensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaMensagensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaMensagensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
