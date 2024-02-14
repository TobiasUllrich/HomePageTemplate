import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartpageComponent } from './startpage/startpage.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
{ path: '', component: StartpageComponent },
{ path: '', component: HeaderComponent },
{ path: '', component: FooterComponent },
{ path: 'Impressum', component: ImpressumComponent },  
{ path: 'Kontakt', component: ContactComponent },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }





//x https://ullrich-tobias.de/

// https://ullrich-tobias.de/UeberMich
// https://ullrich-tobias.de/cranio-sacral/
// https://ullrich-tobias.de/cranio-sacral/Diplomarbeit
// https://ullrich-tobias.de/Astrologie/
// https://ullrich-tobias.de/Astrologie/horoskope
// https://ullrich-tobias.de/Kurse

//header
//footer
//Startpage
//x https://ullrich-tobias.de/Kontakt
//x https://ullrich-tobias.de/impressum