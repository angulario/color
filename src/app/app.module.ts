import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RGBSliderComponent } from './color/rgbslider/rgbslider.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PreFooterComponent } from './pre-footer/pre-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    RGBSliderComponent,
    HeaderComponent,
    FooterComponent,
    PreFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
