import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TuthestComponent } from './tuthest.component';

describe('TuthestComponent', () => {
  let component: TuthestComponent;
  let fixture: ComponentFixture<TuthestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TuthestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TuthestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
