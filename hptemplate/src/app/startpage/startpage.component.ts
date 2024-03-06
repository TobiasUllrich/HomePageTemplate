import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-startpage',
  templateUrl: './startpage.component.html',
  styleUrl: './startpage.component.scss'
})
export class StartpageComponent {

  pictures: string[] =[
    'Tobias-Ullrich',
    'kurse-main',
    'cranio-main',
    'astro-main'
   ];

  caption: string[] =[
    'Evolutionärer Astrologe & Cranio-Sacral-Therapeut',
    'Evolutionäre Astrologie: Kurse',
    'Biodynamische Cranio-Sacral-Therapie',
    'Evolutionäre Astrologie: Beratung'
   ];

   text: string[] =[
    'Tobias Ullrich',
    '"Das Entscheidende am Wissen ist, dass man es beherzigt und anwendet." - Konfuzius',
    '"Wenn du den Mechanismus verstehst, ist die Behandlung einfach." - W. G. Sutherland',
    'Astrologie ist eine Sprache. Wenn du diese Sprache verstehst spricht der Himmel zu dir." - Dane Rudhyar'
   ];


   @HostListener("window:scroll", ["$event"])
   onWindowScroll() {
   //In chrome and some browser scroll is given to body tag
   let pos = (document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.offsetHeight;
   let max = document.documentElement.scrollHeight;


   //An element's scrollTop value is a measurement of the distance from the element's top to its topmost visible content. 
   //When an element's content does not generate a vertical scrollbar, then its scrollTop value is 0.
   //console.log(document.documentElement.scrollTop);

   //Höhe eines Elements inklusive vertikales Padding & Borders
   //console.log(document.documentElement.offsetHeight);

   //The Element.scrollHeight read-only property is a measurement of the height of an element's content, including content not visible on the screen due to overflow.
   //console.log(document.documentElement.scrollHeight);

   // pos/max will give you the distance between scroll bottom and and bottom of screen in percentage.
   if(pos == max )   {
    //Do your action here
    }
   }

}
