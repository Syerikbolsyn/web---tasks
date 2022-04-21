import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryDressComponent } from './category-dress.component';

describe('CategoryDressComponent', () => {
  let component: CategoryDressComponent;
  let fixture: ComponentFixture<CategoryDressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryDressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryDressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
