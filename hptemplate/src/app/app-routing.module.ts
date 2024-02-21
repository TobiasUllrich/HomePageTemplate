import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartpageComponent } from './startpage/startpage.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { ContactComponent } from './contact/contact.component';
import { PageoneComponent } from './pageone/pageone.component';
import { PagetwoComponent } from './pagetwo/pagetwo.component';
import { PagethreeComponent } from './pagethree/pagethree.component';
import { PagefourComponent } from './pagefour/pagefour.component';
import { PagefiveComponent } from './pagefive/pagefive.component';
import { PagesixComponent } from './pagesix/pagesix.component';
import { PagesevenComponent } from './pageseven/pageseven.component';


const routes: Routes = [
{ path: '', component: StartpageComponent }, //https://ullrich-tobias.de/

{ path: 'Impressum', component: ImpressumComponent },  
{ path: 'Kontakt', component: ContactComponent }, 
{ path: 'UeberMich', component: PagefourComponent }, 

{ path: 'Astrologie', component: PageoneComponent },
{ path: 'Cranio-Sacral', component: PagetwoComponent},
{ path: 'Kurse', component: PagethreeComponent },

{ path: 'Astrologie/Horoskope', component: PagefiveComponent },
{ path: 'Cranio-Sacral/Diplomarbeit', component: PagesixComponent },
{ path: 'Kurse/Kursinhalte', component: PagesevenComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }