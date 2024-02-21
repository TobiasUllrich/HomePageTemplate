import { Component } from '@angular/core';

@Component({
  selector: 'app-navmenu',
  templateUrl: './navmenu.component.html',
  styleUrl: './navmenu.component.scss'
})
export class NavmenuComponent {

  routes: string[] =[
    '/Astrologie',
    '/Cranio-Sacral',
    '/Kurse',
    '/',
    '/UeberMich',
    '/Kontakt',
    '/Impressum',
    '/Astrologie/Horoskope',
    '/Cranio-Sacral/Diplomarbeit',
   ];

  display: string[] =[
    'Astrologie',
    'Cranio-Sacral',
    'Kurse',
    '',
    'Über Mich',
    'Kontakt',
    'Impressum',
    'Horoskope',
    'Diplomarbeit',
   ];

  indexOfPositionOfLogo: number = 3; //Ändern wenn das Logo anders positioniert werden soll  

}
