import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageNotFoundComponent } from './message-not-found.component';

describe('MessageNotFoundComponent', () => {
  let component: MessageNotFoundComponent;
  let fixture: ComponentFixture<MessageNotFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageNotFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
