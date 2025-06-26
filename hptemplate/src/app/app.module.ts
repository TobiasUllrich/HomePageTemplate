import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { StartpageComponent } from './startpage/startpage.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { ContactComponent } from './contact/contact.component';
import { PageoneComponent } from './pageone/pageone.component';
import { PagetwoComponent } from './pagetwo/pagetwo.component';
import { PagethreeComponent } from './pagethree/pagethree.component';
import { PagefourComponent } from './pagefour/pagefour.component';
import { IconboxComponent } from './iconbox/iconbox.component';
import { NavmenuComponent } from './navmenu/navmenu.component';
import { PagefiveComponent } from './pagefive/pagefive.component';
import { PagesixComponent } from './pagesix/pagesix.component';
import { PagesevenComponent } from './pageseven/pageseven.component';
import { ContactboxComponent } from './contactbox/contactbox.component';
import { CustombuttonComponent } from './custombutton/custombutton.component';
import { VideobackgroundComponent } from './videobackground/videobackground.component';
import { MapboxComponent } from './mapbox/mapbox.component';
import { PageeightComponent } from './pageeight/pageeight.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    StartpageComponent,
    ImpressumComponent,
    ContactComponent,
    PageoneComponent,
    PagetwoComponent,
    PagethreeComponent,
    PagefourComponent,
    IconboxComponent,
    NavmenuComponent,
    PagefiveComponent,
    PagesixComponent,
    PagesevenComponent,
    ContactboxComponent,
    CustombuttonComponent,
    VideobackgroundComponent,
    MapboxComponent,
    PageeightComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
