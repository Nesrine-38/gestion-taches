import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { TachesPage } from './taches.page';

describe('TachesPage', () => {
  let component: TachesPage;
  let fixture: ComponentFixture<TachesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TachesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
