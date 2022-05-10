import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerTilesComponent } from './banner-tiles.component';

describe('BannerTilesComponent', () => {
  let component: BannerTilesComponent;
  let fixture: ComponentFixture<BannerTilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerTilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerTilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
