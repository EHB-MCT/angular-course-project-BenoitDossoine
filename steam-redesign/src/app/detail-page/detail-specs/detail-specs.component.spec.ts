import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailSpecsComponent } from './detail-specs.component';

describe('DetailSpecsComponent', () => {
  let component: DetailSpecsComponent;
  let fixture: ComponentFixture<DetailSpecsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailSpecsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailSpecsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
