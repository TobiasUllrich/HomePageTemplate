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
    PagesixComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
