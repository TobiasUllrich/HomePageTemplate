import { Component } from '@angular/core';

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


}
