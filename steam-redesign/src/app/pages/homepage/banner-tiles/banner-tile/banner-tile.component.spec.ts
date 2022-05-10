import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerTileComponent } from './banner-tile.component';

describe('BannerTileComponent', () => {
  let component: BannerTileComponent;
  let fixture: ComponentFixture<BannerTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerTileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
