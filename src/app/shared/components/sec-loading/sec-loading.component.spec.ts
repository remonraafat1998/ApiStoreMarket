import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecLoadingComponent } from './sec-loading.component';

describe('SecLoadingComponent', () => {
  let component: SecLoadingComponent;
  let fixture: ComponentFixture<SecLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecLoadingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
