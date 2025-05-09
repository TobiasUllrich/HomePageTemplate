import { Component } from '@angular/core';

@Component({
  selector: 'app-videobackground',
  templateUrl: './videobackground.component.html',
  styleUrl: './videobackground.component.scss'
})
export class VideobackgroundComponent {


//    @HostListener("window:scroll", ["$event"])
//    onWindowScroll() {
//    [document] Dies ist das globale Objekt in JavaScript, das das gesamte *HTML-Dokument* repräsentiert.
//    [documentElement] Dies ist eine Eigenschaft des document-Objekts, die das <html>-Element im *HTML-Dokument* repräsentiert.
//    [body] Statt documentElement, weil manche Browser nur so funktionieren


//    Diese Zeile verwendet document.documentElement.scrollTop, fällt aber automatisch auf document.body.scrollTop zurück, wenn document.documentElement.scrollTop nicht definiert ist (z. B. in älteren Versionen von Internet Explorer). 
//    Auf diese Weise erhältst du den vertikalen Scroll-Offset unabhängig vom verwendeten Browser.
//    let distanceToUpperBorder = (document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.offsetHeight;
//    let heightOfWholeDocument = document.documentElement.scrollHeight;
//    let visibleHeightOfBrowserWindow = window.innerHeight; 

//    let imageRect = (<HTMLElement>document.getElementById('myimage1')).getBoundingClientRect(); //#myImage
//    console.log(imageRect);
//    https://stackoverflow.com/questions/11805955/how-to-get-the-distance-from-the-top-for-an-element


//    [document.documentElement.scrollTop]
//    Der scrollTop Value eines Elementes misst den Abstand in Pixeln zwischen dem obersten Rand des Dokuments und dem obersten Rand des sichtbaren Bereichs 
//    Wenn ein Element keine vertikale Scrollbar generiert, dann ist sein scrollTop Value 0
//    console.log(document.documentElement.scrollTop);

//    [offsetHeight] 
//    Höhe eines Elements inklusive vertikales Padding & Borders -> muss draufgerechnet werden um den richtigen Abstand zu messen
//    console.log(document.documentElement.offsetHeight);

//    [scrollHeight]
//    Dies ist eine Eigenschaft des documentElement, die die gesamte Höhe des gesamten HTML-Dokuments in Pixeln zurückgibt, einschließlich des sichtbaren und nicht sichtbaren Inhalts
//    console.log(document.documentElement.scrollHeight);

//    [window.innerHeight]
//    Höhe des sichtbaren Bereichs des Browserfensters 

//    Position des unteren sichtbaren Rands im Browserfenster relativ zum oberen Rand des Dokuments.
//    console.log(((document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.offsetHeight) + window.innerHeight);


//    (distanceToUpperBorder/heightOfWholeDocument) will give you the distance between scroll bottom and and bottom of screen in percentage.
//    if(distanceToUpperBorder == heightOfWholeDocument )   {
//     Do your action here
//     console.log(distanceToUpperBorder/heightOfWholeDocument);
//     }
//    }

// }




// //ELEREF FÜR DOKU
// // constructor(private eleRef: ElementRef){}

// // <div id="x" (mouseout)="MouseLeavingTheGlobalContainer($event)">

// //    //In Angular-Komponenten wird this.eleRef normalerweise durch die ElementRef-Klasse bereitgestellt, die eine Referenz auf das Host-Element der Komponente enthält. 
// //    //Das nativeElement-Attribut wird dann verwendet, um auf das tatsächliche DOM-Element zuzugreifen.
// //    MouseLeavingTheGlobalContainer(event: MouseEvent): boolean{
// //     let element: HTMLElement = event.target as HTMLElement;
// //     console.log('ID des verlassenen Elements ',element.id);
// //     console.log('HTML-Element dieser Komponente ',(this.eleRef.nativeElement as HTMLElement));
// //     console.log('Ist das verlassene Element Bestandteil dieser Komponente? ',(this.eleRef.nativeElement as HTMLElement).contains(element));
// //   }



//OBSERVABLES
//import { Observable, auditTime, debounceTime, from, interval, map, of, timeout } from 'rxjs';

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
