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

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    BannerComponent,
    BannerTilesComponent,
    BannerTileComponent,
    ShopListComponent,
    BannerButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [Services],
  bootstrap: [AppComponent]
})
export class AppModule { }
