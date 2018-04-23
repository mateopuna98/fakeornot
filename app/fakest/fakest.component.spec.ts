import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FakestComponent } from './fakest.component';

describe('FakestComponent', () => {
  let component: FakestComponent;
  let fixture: ComponentFixture<FakestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FakestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FakestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
