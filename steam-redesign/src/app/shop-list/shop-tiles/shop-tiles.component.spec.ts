import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopTilesComponent } from './shop-tiles.component';

describe('ShopTilesComponent', () => {
  let component: ShopTilesComponent;
  let fixture: ComponentFixture<ShopTilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopTilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopTilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
