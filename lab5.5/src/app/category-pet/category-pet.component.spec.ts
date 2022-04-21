import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryPetComponent } from './category-pet.component';

describe('CategoryPetComponent', () => {
  let component: CategoryPetComponent;
  let fixture: ComponentFixture<CategoryPetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryPetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryPetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
