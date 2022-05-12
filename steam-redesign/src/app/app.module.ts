import { Services } from './services/index';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { BannerComponent } from './homepage/banner/banner.component';
import { BannerTilesComponent } from './homepage/banner-tiles/banner-tiles.component';
import { BannerTileComponent } from './homepage/banner-tiles/banner-tile/banner-tile.component';
import { ShopListComponent } from './shop-list/shop-list.component';
import { HttpClientModule } from '@angular/common/http';
import { BannerButtonComponent } from './homepage/banner/banner-button/banner-button.component';
import { ShopTilesComponent } from './shop-list/shop-tiles/shop-tiles.component';
import { ShopTileComponent } from './shop-list/shop-tiles/shop-tile/shop-tile.component';

import {FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { DetailPageComponent } from './detail-page/detail-page.component';
import { DetailBannerComponent } from './detail-page/detail-banner/detail-banner.component';


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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [Services],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(library:FaIconLibrary){
    library.addIcons()
  }
}
