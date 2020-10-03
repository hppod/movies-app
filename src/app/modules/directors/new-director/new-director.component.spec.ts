import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDirectorComponent } from './new-director.component';

describe('NewDirectorComponent', () => {
  let component: NewDirectorComponent;
  let fixture: ComponentFixture<NewDirectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewDirectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDirectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
