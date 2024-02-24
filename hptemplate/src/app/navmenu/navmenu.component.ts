import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

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

  subMenuRoutes1: string[] =[
    '/Astrologie/Horoskope',
    '/Cranio-Sacral/Diplomarbeit',
    '/Kurse/Kursinhalte',
    '',
    '',
    '/Astrologie/Horoskope',
    '',
   ];

  subMenuDisplay1: string[] =[
    'Horoskope',
    'Diplomarbeit',
    'Kursinhalte',
    '',
    '',
    'Horoskope',
    '',
   ];

   subMenuRoutes2: string[] =[
    '',
    '',
    '',
    '',
    '',
    '/Cranio-Sacral/Diplomarbeit',
    '',
   ];

  subMenuDisplay2: string[] =[
    '',
    '',
    '',
    '',
    '',
    'Diplomarbeit',
    '',
   ];

   subMenuRoutes3: string[] =[
    '',
    '',
    '',
    '',
    '',
    '/Kurse/Kursinhalte',
    '',
   ];

  subMenuDisplay3: string[] =[
    '',
    '',
    '',
    '',
    '',
    'Kursinhalte',
    '',
   ];

   ausklappen(id: string){
    console.log('ausklappen ' + id);
    // (<HTMLInputElement>document.getElementById(id.toString())).classList.add('klappaus');
    (<HTMLInputElement>document.getElementById(id.toString())).classList.remove('d-none');
   }

    einklappen(id: string){
      console.log('einklappen ' + id);
    // (<HTMLInputElement>document.getElementById(id.toString())).classList.remove('klappaus');
    (<HTMLInputElement>document.getElementById(id.toString())).classList.add('d-none');
   }


   @HostListener('document:mouseenter', ['$event'])
    onDocumentClick(event: MouseEvent) {
    let elementId: string = (event.target as Element).id;
    console.log('id: ',elementId);
    console.log('id erste 4:', elementId.substring(1,4));
    console.log('id nach 5:', elementId.substring(5,elementId.length));

    if(elementId.substring(1,4) == 'main'){
      console.log(event.target);
      (<HTMLInputElement>document.getElementById('sub'+elementId.substring(5,elementId.length))).classList.remove('d-none');

      //this.closeVideo();
      // (<HTMLInputElement>document.getElementById('s1')).classList.remove('d-none');
      
      }
   }
   



}
