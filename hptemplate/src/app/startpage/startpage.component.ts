import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-startpage',
  templateUrl: './startpage.component.html',
  styleUrl: './startpage.component.scss'
})
export class StartpageComponent {

  pictures: string[] =[
    'Tobias-Ullrich.jpg',
    'kurse-main.jpg',
    'cranio-main.jpg',
    'astro-main.jpg'
   ];

  caption: string[] =[
    'Evolutionärer Astrologe & Cranio-Sacral-Therapeut',
    'Evolutionäre Astrologie: Kurse',
    'Biodynamische Cranio-Sacral-Therapie',
    'Evolutionäre Astrologie: Beratung'
   ];

   text: string[] =[
    'Tobias Ullrich' +
    'Jeder Mensch kommt mit einem speziellen Schicksal auf diese Welt.' +
    'Er hat etwas zu vollbringen, eine Nachricht zu vermitteln, eine Arbeit fertigzustellen. Du bist nicht zufällig hier, dein Hiersein hat einen Sinn.' +
    'Das Ganze will durch dich etwas schaffen.' +
    '- Osho',
    '"Das Entscheidende am Wissen ist, dass man es beherzigt und anwendet." - Konfuzius',
    '"Wenn du den Mechanismus verstehst, ist die Behandlung einfach." - W. G. Sutherland',
    'Astrologie ist eine Sprache. Wenn du diese Sprache verstehst spricht der Himmel zu dir." - Dane Rudhyar',
   ];

   routes: string[] =[ 
    '/UeberMich',
    '/Kurse',
    '/Cranio-Sacral',
    '/Astrologie',
   ];



   picturesForInfoboxes: string[] =[
    'youtube.png',
    '',
   ];

   captionForInfoboxes: string[] =[
    'Folge mir auf YouTube',
    'Information',
   ];

   textForInfoboxes: string[] =[
    'Der einzige & größte YouTube-Kanal zum Thema Evolutionäre Astrologie. Dort findest du eine systematische Einführung in die Evolutionäre Astrologie!',
    'Mit der Biodynamischen Cranio-Sacral-Therapie stärke ich Menschen in ihrer Vitalität & Widerstandsfähigkeit und ersetze keinen Arzt oder Heilpraktiker!',
   ];

   routeForInfoboxes: string[] =[
    'https://www.youtube.com/@EvolutionaereAstrologie',
    '',
   ];
    

    /**
     * Labels for the customized Button
     */
    label = 'Mehr';

    /**
     * 
     * @param url External Route to another Page
     */
    goToUrl(url: string){
      //console.log(url);
      window.open(url, "_blank");
     }



   @HostListener("window:scroll", ["$event"])
   onWindowScroll() {
   //[document] Dies ist das globale Objekt in JavaScript, das das gesamte *HTML-Dokument* repräsentiert.
   //[documentElement] Dies ist eine Eigenschaft des document-Objekts, die das <html>-Element im *HTML-Dokument* repräsentiert.
   //[body] Statt documentElement, weil manche Browser nur so funktionieren


   //Diese Zeile verwendet document.documentElement.scrollTop, fällt aber automatisch auf document.body.scrollTop zurück, wenn document.documentElement.scrollTop nicht definiert ist (z. B. in älteren Versionen von Internet Explorer). 
   //Auf diese Weise erhältst du den vertikalen Scroll-Offset unabhängig vom verwendeten Browser.
   let distanceToUpperBorder = (document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.offsetHeight;
   let heightOfWholeDocument = document.documentElement.scrollHeight;
   let visibleHeightOfBrowserWindow = window.innerHeight; 

   let imageRect = (<HTMLElement>document.getElementById('myimage1')).getBoundingClientRect(); //#myImage
   console.log(imageRect);
   //https://stackoverflow.com/questions/11805955/how-to-get-the-distance-from-the-top-for-an-element


   //[document.documentElement.scrollTop]
   //Der scrollTop Value eines Elementes misst den Abstand in Pixeln zwischen dem obersten Rand des Dokuments und dem obersten Rand des sichtbaren Bereichs 
   //Wenn ein Element keine vertikale Scrollbar generiert, dann ist sein scrollTop Value 0
   //console.log(document.documentElement.scrollTop);

   //[offsetHeight] 
   //Höhe eines Elements inklusive vertikales Padding & Borders -> muss draufgerechnet werden um den richtigen Abstand zu messen
   //console.log(document.documentElement.offsetHeight);

   //[scrollHeight]
   //Dies ist eine Eigenschaft des documentElement, die die gesamte Höhe des gesamten HTML-Dokuments in Pixeln zurückgibt, einschließlich des sichtbaren und nicht sichtbaren Inhalts
   //console.log(document.documentElement.scrollHeight);

   //[window.innerHeight]
   //Höhe des sichtbaren Bereichs des Browserfensters 

   //Position des unteren sichtbaren Rands im Browserfenster relativ zum oberen Rand des Dokuments.
   //console.log(((document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.offsetHeight) + window.innerHeight);


   // (distanceToUpperBorder/heightOfWholeDocument) will give you the distance between scroll bottom and and bottom of screen in percentage.
   if(distanceToUpperBorder == heightOfWholeDocument )   {
    //Do your action here
    //console.log(distanceToUpperBorder/heightOfWholeDocument);
    }
   }

}




//ELEREF FÜR DOKU
// constructor(private eleRef: ElementRef){}

// <div id="x" (mouseout)="MouseLeavingTheGlobalContainer($event)">

//    //In Angular-Komponenten wird this.eleRef normalerweise durch die ElementRef-Klasse bereitgestellt, die eine Referenz auf das Host-Element der Komponente enthält. 
//    //Das nativeElement-Attribut wird dann verwendet, um auf das tatsächliche DOM-Element zuzugreifen.
//    MouseLeavingTheGlobalContainer(event: MouseEvent): boolean{
//     let element: HTMLElement = event.target as HTMLElement;
//     console.log('ID des verlassenen Elements ',element.id);
//     console.log('HTML-Element dieser Komponente ',(this.eleRef.nativeElement as HTMLElement));
//     console.log('Ist das verlassene Element Bestandteil dieser Komponente? ',(this.eleRef.nativeElement as HTMLElement).contains(element));
//   }