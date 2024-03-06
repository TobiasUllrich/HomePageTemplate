import { Component, ElementRef, HostListener } from '@angular/core';

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

   
constructor(private eleRef: ElementRef){}


   @HostListener('document:mouseover', ['$event'])
    onDocumentHover(event: MouseEvent) {
    let elementId: string = (event.target as Element).id;
    //console.log('id: ',elementId); //Id des Elements, z.B. 'main1'
    //console.log('id erste 4 Stellen:', elementId.substring(0,4)); //Befindet sich der Mauszeiger über einem main-menü-punkt?
    //console.log('id nach ab 5ter Stelle:', elementId.substring(4,elementId.length)); //Id die nach 'main' kommt, bei 'main1' ist es '1'

    //[1.] Wenn ein Main-HTML-Element gehovert wird, dann mache das Untermenü (hat die id=4, wenn main4 gehovert wird) sichtbar
    if(elementId.substring(0,4) == 'main'){
     
      //Gehe durch das Array mit den Menü-Punkten
      for(let i=0;i<this.routes.length;i++){
        //[1.1] Entferne 'd-none'-Klasse beim zugehörigen Untermenü, damit es sichtbar wird 
        if(elementId.substring(4,elementId.length)==i.toString()){
          (<HTMLInputElement>document.getElementById(elementId.substring(4,elementId.length))).classList.remove('d-none');
        }
        else{
        //[1.2] Füge bei allen anderen Untermenüs die 'd-none'-Klasse hinzu, damit sie unsichtbar bleiben, AUßER beim Menüpunkt mit dem Logo ('indexOfPositionOfLogo')
          if (i != this.indexOfPositionOfLogo){(<HTMLInputElement>document.getElementById(i.toString())).classList.add('d-none')};
        }
      };     
    };
    //[2.] Wenn ein transparentes Element 'invXX' oder 'topX' gehovert wird, dann füge bei allen Untermenüs die 'd-none'-Klasse hinzu, damit sie unsichtbar werden, AUßER beim Menüpunkt mit dem Logo ('indexOfPositionOfLogo')
    //'invXX' hängt immer als letzter Menüpunkt in allen Untermenüs unten dran; 'topX' steht für die Box in der sich ein Hauptmenüpunkt befindet
    if(elementId.substring(0,3) == 'inv' || elementId.substring(0,3) == 'top'){
      for(let i=0;i<this.routes.length;i++){if(i != this.indexOfPositionOfLogo){(<HTMLInputElement>document.getElementById(i.toString())).classList.add('d-none')}};
    }
   }

}
