import { Component, EventEmitter, HostListener, Output } from '@angular/core';
import { Observable, auditTime, debounceTime, from, interval, map, of, timeout } from 'rxjs';

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

   
constructor(){}


@Output() notifyParentClosed: EventEmitter<any> = new EventEmitter();
sendMenuClosedNotification() {
    this.notifyParentClosed.emit('Some value to send to the parent');
}

@Output() notifyParentOpened: EventEmitter<any> = new EventEmitter();
sendMenuOpenedNotification() {
    this.notifyParentOpened.emit('Some value to send to the parent');
}

   @HostListener('document:mouseover', ['$event'])
    onDocumentHover(event: MouseEvent) {
    
      let elementId: string = (event.target as Element).id;
    //console.log('id: ',elementId); //Id des Elements, z.B. 'main1'
    //console.log('id erste 4 Stellen:', elementId.substring(0,4)); //Befindet sich der Mauszeiger über einem main-menü-punkt?
    //console.log('id nach ab 5ter Stelle:', elementId.substring(4,elementId.length)); //Id die nach 'main' kommt, bei 'main1' ist es '1'

    //[1.] Wenn ein Main-HTML-Element gehovert wird, dann mache das Untermenü (hat die id=4, wenn main4 gehovert wird) sichtbar
    if(elementId.substring(0,4) == 'main' || elementId.substring(0,4) == 'arro'){
     
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



  /**
   * Opens the Mobile Menu from the right and plays the Cross-Symbol-Animation
   */
  openMobileMenu(){
    console.log('OPEN');
    // (<HTMLInputElement>document.getElementById('mobile-menu')).classList.remove('height10vh');
    (<HTMLInputElement>document.getElementById('mobile-menu')).classList.add('openMobileMenu');
    (<HTMLInputElement>document.getElementById('mobile-menu')).classList.remove('closeMobileMenu');

    // console.log('hallo klappmenü');
    // console.log(window.innerWidth);
    //   //Gehe durch das Array mit den Menü-Punkten
    //   for(let i=0;i<3;i++){
    //     console.log(`${i} ${(<HTMLInputElement>document.getElementById(`${i}`))}`);
    //     //[1.1] Entferne 'd-none'-Klasse beim zugehörigen Untermenü, damit es sichtbar wird 
    //       (<HTMLInputElement>document.getElementById(`${i}`)).classList.remove('d-none');
    //       (<HTMLInputElement>document.getElementById(`${i}`)).classList.add('d-flex');
    //     }

    // (<HTMLInputElement>document.getElementById('mobile-menu')).classList.add('header-links-main-nav-mobile');
    // (<HTMLInputElement>document.getElementById('mobile-menu')).classList.remove('header-links-main-nav');

    // (<HTMLInputElement>document.getElementById('mobile-menu')).classList.add('header-links-mobile');
    // (<HTMLInputElement>document.getElementById('mobile-menu')).classList.remove('header-links');
    // (<HTMLInputElement>document.getElementById('upperLine')).classList.remove('openMobileMenuDisolveCrossUpperLine');
    // (<HTMLInputElement>document.getElementById('lowerLine')).classList.remove('openMobileMenuDisolveCrossLowerLine');
    // (<HTMLInputElement>document.getElementById('upperLine')).classList.add('openMobileMenuBuildCrossUpperLine');
    // (<HTMLInputElement>document.getElementById('lowerLine')).classList.add('openMobileMenuBuildCrossLowerLine');
  }

/**
 * Closes the Mobile Menu from the right and plays the Cross-Symbol-Animation backwards
 */
  closeMobileMenu(){
    console.log('CLOSE');
    (<HTMLInputElement>document.getElementById('mobile-menu')).classList.add('closeMobileMenu');
    (<HTMLInputElement>document.getElementById('mobile-menu')).classList.remove('openMobileMenu');
    // (<HTMLInputElement>document.getElementById('mobile-menu')).classList.add('height10vh');

    window.scroll({
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
    
    // (<HTMLInputElement>document.getElementById('mobile-menu')).classList.add('header-links-main-nav');
    // (<HTMLInputElement>document.getElementById('mobile-menu')).classList.remove('header-links-main-nav-mobile');
    
    // (<HTMLInputElement>document.getElementById('mobile-menu')).classList.add('header-links');
    // (<HTMLInputElement>document.getElementById('mobile-menu')).classList.remove('header-links-mobile');

    // (<HTMLInputElement>document.getElementById('upperLine')).classList.remove('openMobileMenuBuildCrossUpperLine');
    // (<HTMLInputElement>document.getElementById('lowerLine')).classList.remove('openMobileMenuBuildCrossLowerLine');
    // (<HTMLInputElement>document.getElementById('upperLine')).classList.add('openMobileMenuDisolveCrossUpperLine');
    // (<HTMLInputElement>document.getElementById('lowerLine')).classList.add('openMobileMenuDisolveCrossLowerLine');
  }




  // test?: Observable<Number>;

  // ngOnInit(){
  //   this.probieren();
  // }

  // probieren(){
  //   let test = of(1,2,3,4).subscribe((r) => console.log('Of-Observable: ' + r));
  //   let test2 = interval(1).pipe(auditTime(3000)).subscribe((r) => console.log('Interval-Observable: ' + r));

  //   test3: Observable;
  //   const test3 = interval(1000).pipe(map(x => x*10));

  //   //test.unsubscribe();
  //   //test2.unsubscribe();
  // }



}
