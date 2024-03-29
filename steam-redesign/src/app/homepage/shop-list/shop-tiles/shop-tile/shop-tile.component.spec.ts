import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopTileComponent } from './shop-tile.component';

describe('ShopTileComponent', () => {
  let component: ShopTileComponent;
  let fixture: ComponentFixture<ShopTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopTileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
