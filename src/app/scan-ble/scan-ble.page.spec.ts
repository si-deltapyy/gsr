import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ScanBlePage } from './scan-ble.page';

describe('ScanBlePage', () => {
  let component: ScanBlePage;
  let fixture: ComponentFixture<ScanBlePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ScanBlePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
