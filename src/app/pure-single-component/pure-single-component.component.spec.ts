import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PureSingleComponentComponent } from './pure-single-component.component';

describe('PureSingleComponentComponent', () => {
  let component: PureSingleComponentComponent;
  let fixture: ComponentFixture<PureSingleComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PureSingleComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PureSingleComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
