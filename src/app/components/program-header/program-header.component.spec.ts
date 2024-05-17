import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramHeaderComponent } from './program-header.component';
import { provideExperimentalZonelessChangeDetection } from '@angular/core';
import { RouterModule } from '@angular/router';

describe('ProgramHeaderComponent', () => {
  let component: ProgramHeaderComponent;
  let fixture: ComponentFixture<ProgramHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgramHeaderComponent, RouterModule.forRoot([])],
      providers: [provideExperimentalZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(ProgramHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
