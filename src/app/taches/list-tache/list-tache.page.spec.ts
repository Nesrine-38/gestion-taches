import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { AddTachePage } from './list-tache.page';

describe('AddTachePage', () => {
  let component: AddTachePage;
  let fixture: ComponentFixture<AddTachePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddTachePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
