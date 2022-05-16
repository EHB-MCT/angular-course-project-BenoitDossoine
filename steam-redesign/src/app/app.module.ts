import { Services } from './services/index';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { BannerComponent } from './homepage/banner/banner.component';
import { BannerTilesComponent } from './homepage/banner-tiles/banner-tiles.component';
import { BannerTileComponent } from './homepage/banner-tiles/banner-tile/banner-tile.component';
import { ShopListComponent } from './homepage/shop-list/shop-list.component';
import { HttpClientModule } from '@angular/common/http';
import { BannerButtonComponent } from './homepage/banner/banner-button/banner-button.component';
import { ShopTilesComponent } from './homepage/shop-list/shop-tiles/shop-tiles.component';
import { ShopTileComponent } from './homepage/shop-list/shop-tiles/shop-tile/shop-tile.component';

import {FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { DetailPageComponent } from './detail-page/detail-page.component';
import { DetailBannerComponent } from './detail-page/detail-banner/detail-banner.component';
import { ScreenshotsComponent } from './detail-page/screenshots/screenshots.component';
import { DetailSpecsComponent } from './detail-page/detail-specs/detail-specs.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    BannerComponent,
    BannerTilesComponent,
    BannerTileComponent,
    ShopListComponent,
    BannerButtonComponent,
    ShopTilesComponent,
    ShopTileComponent,
    DetailPageComponent,
    DetailBannerComponent,
    ScreenshotsComponent,
    DetailSpecsComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FontAwesomeModule,
    AppRoutingModule,
  ],
  providers: [Services],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(library:FaIconLibrary){
    library.addIcons()
  }
}
