import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustumPopUpComponent } from './custum-pop-up.component';

describe('CustumPopUpComponent', () => {
  let component: CustumPopUpComponent;
  let fixture: ComponentFixture<CustumPopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustumPopUpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustumPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
