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
    '/Astrologie/Horoskope',
    '/Kontakt',
   ];

  display: string[] =[
    'Astrologie',
    'Cranio-Sacral',
    'Kurse',
    '',
    'Über Mich',
    'Meine Arbeit',
    'Kontakt',
   ];

  indexOfPositionOfLogo: number = 3; //Ändern wenn das Logo anders positioniert werden soll  

  subMenuRoutes: string[] =[
    '/Kurse/Kursinhalte',
    '/Astrologie/Horoskope',
    '/Cranio-Sacral/Diplomarbeit',
   ];

  subMenuDisplay: string[] =[
    'Kursinhalte',
    'Horoskope',
    'Diplomarbeit',
   ];

   correspondingMainRoute: string[] =[
    '/Astrologie',
    '/Cranio-Sacral',
    '/Kurse',
   ];



}
