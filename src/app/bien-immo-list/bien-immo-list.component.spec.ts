import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BienImmoListComponent } from './bien-immo-list.component';

describe('BienImmoListComponent', () => {
  let component: BienImmoListComponent;
  let fixture: ComponentFixture<BienImmoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BienImmoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BienImmoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
