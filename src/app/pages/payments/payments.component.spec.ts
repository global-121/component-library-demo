import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentsComponent } from './payments.component';
import { RouterModule } from '@angular/router';
import { provideExperimentalZonelessChangeDetection } from '@angular/core';

describe('PaymentsComponent', () => {
  let component: PaymentsComponent;
  let fixture: ComponentFixture<PaymentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaymentsComponent, RouterModule.forRoot([])],
      providers: [provideExperimentalZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(PaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
