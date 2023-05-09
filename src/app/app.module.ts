import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './Component/about/about.component';
import { CalculateComponent } from './Component/calculate/calculate.component';
import { FooterComponent } from './Component/footer/footer.component';
import { HeaderComponent } from './Component/header/header.component';
import { NewsComponent } from './Component/news/news.component';
import { OfferComponent } from './Component/offer/offer.component';
import { ReviewComponent } from './Component/review/review.component';
import { ServicesComponent } from './Component/services/services.component';
import { SliderComponent } from './Component/slider/slider.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    CalculateComponent,
    FooterComponent,
    HeaderComponent,
    NewsComponent,
    OfferComponent,
    ReviewComponent,
    ServicesComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
