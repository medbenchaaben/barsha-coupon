import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OffresComponent } from './offres.component';

describe('OffresComponent', () => {
  let component: OffresComponent;
  let fixture: ComponentFixture<OffresComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OffresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
