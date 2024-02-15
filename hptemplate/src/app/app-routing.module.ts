import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartpageComponent } from './startpage/startpage.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { ContactComponent } from './contact/contact.component';
import { PageoneComponent } from './pageone/pageone.component';
import { PagetwoComponent } from './pagetwo/pagetwo.component';
import { PagethreeComponent } from './pagethree/pagethree.component';
import { PagefourComponent } from './pagefour/pagefour.component';


const routes: Routes = [
{ path: '', component: StartpageComponent }, //https://ullrich-tobias.de/

{ path: 'Impressum', component: ImpressumComponent },  
{ path: 'Kontakt', component: ContactComponent }, 

{ path: 'UeberMich', component: PageoneComponent }, 
{ path: 'Astrologie', component: PagetwoComponent },
{ path: 'Cranio-Sacral', component: PagethreeComponent},
{ path: 'Kurse', component: PagefourComponent },
// https://ullrich-tobias.de/cranio-sacral/Diplomarbeit
// https://ullrich-tobias.de/Astrologie/horoskope
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }