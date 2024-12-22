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
    'Tobias Ullrich: Evolutionärer Astrologe & Cranio-Sacral-Therapeut',
    'Evolutionäre Astrologie: Kurse',
    'Biodynamische Cranio-Sacral-Therapie',
    'Evolutionäre Astrologie: Beratung'
   ];

   text: string[] =[
    '"Jeder Mensch kommt mit einem speziellen Schicksal auf diese Welt.' +
    'Er hat etwas zu vollbringen, eine Nachricht zu vermitteln, eine Arbeit fertigzustellen. Du bist nicht zufällig hier, dein Hiersein hat einen Sinn.' +
    'Das Ganze will durch dich etwas schaffen."' +
    '- Osho',
    '"Das Entscheidende am Wissen ist, dass man es beherzigt und anwendet." - Konfuzius',
    '"Wenn du den Mechanismus verstehst, ist die Behandlung einfach." - W. G. Sutherland',
    '"Astrologie ist eine Sprache. Wenn du diese Sprache verstehst spricht der Himmel zu dir." - Dane Rudhyar',
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

    }     