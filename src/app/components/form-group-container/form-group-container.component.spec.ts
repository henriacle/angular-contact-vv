import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroupContainerComponent } from './form-group-container.component';


describe('FormGroupContainerComponent', () => {
  let component: FormGroupContainerComponent;
  let fixture: ComponentFixture<FormGroupContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormGroupContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormGroupContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
