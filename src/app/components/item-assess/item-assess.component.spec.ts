import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemAssessComponent } from './item-assess.component';

describe('ItemAssessComponent', () => {
  let component: ItemAssessComponent;
  let fixture: ComponentFixture<ItemAssessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemAssessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemAssessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
