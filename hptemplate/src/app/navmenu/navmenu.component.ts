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

    //Wenn ein Main-HTML-Element gehovert wird, dann mache das Untermenü (hat die id=4, wenn main4 gehovert wird) sichtbar
    if(elementId.substring(0,4) == 'main'){
     
      //Prüfe das Array mit den Menü-Punkten
      for(let i=0;i<this.routes.length;i++){
        //Entferne 'd-none'-Klasse beim zugehörigen Untermenü 
        if(elementId.substring(4,elementId.length)==i.toString()){
          (<HTMLInputElement>document.getElementById(elementId.substring(4,elementId.length))).classList.remove('d-none');
        }
        else{
          //Füge bei allen anderen Untermenüs die 'd-none'-Klasse hinzu, AUßER beim Menüpunkt mit dem Logo ('indexOfPositionOfLogo')
          if (i != this.indexOfPositionOfLogo){(<HTMLInputElement>document.getElementById(i.toString())).classList.add('d-none')};
        }
      };     
    };
   }


   //In Angular-Komponenten wird this.eleRef normalerweise durch die ElementRef-Klasse bereitgestellt, die eine Referenz auf das Host-Element der Komponente enthält. 
   //Das nativeElement-Attribut wird dann verwendet, um auf das tatsächliche DOM-Element zuzugreifen.
   MouseLeavingTheGlobalContainer(event: MouseEvent): boolean{
    let element: HTMLElement = event.target as HTMLElement;
    console.log('ID des verlassenen Elements ',element.id);
    console.log('HTML-Element dieser Komponente ',(this.eleRef.nativeElement as HTMLElement));
    console.log('Ist das verlassene Element Bestandteil dieser Komponente? ',(this.eleRef.nativeElement as HTMLElement).contains(element));
    if(element.id=='xxxx'){for(let i=0;i<this.routes.length;i++){if(i != this.indexOfPositionOfLogo){(<HTMLInputElement>document.getElementById(i.toString())).classList.add('d-none')}}};
   return (this.eleRef.nativeElement as HTMLElement).contains(element);
  }


}
