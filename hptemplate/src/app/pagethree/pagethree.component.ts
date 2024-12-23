import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-pagethree',
  templateUrl: './pagethree.component.html',
  styleUrl: './pagethree.component.scss'
})
export class PagethreeComponent {

  constructor(private router: Router, private titleService:Title) { this.titleService.setTitle("Evolutionäre Astrologie | Kurse"); } 

    /**
     * Labels for the customized Button
     */
    label = 'Kontaktiere mich';
    label2 = 'Kurs kaufen';
    label3 = 'Video zum Kurs';
    label4 = 'Einzelne Kapitel';



    courseName: string[] =[
      'Video-Kurs: Evolutionäre Astrologie',
      'Live-Kurs: Deute dein Leben',
    ]

    courseImgs: string[] =[
      'kurs1.jpg',
      'kurs2.jpg',
     ];

    linkToCourse: string[] =[
      'https://ullrichtobias.gurucan.com/app/plans/61f95636e2253d0013950a9d',
      'https://ullrichtobias.gurucan.com/app/plans/64047295ff1a890013ff42e3',
    ]

    courseText: string[] =[
      'Dieser Video-Kurs richtet sich an Menschen welche selbstständig die Evolutionäre Astrologie erlernen wollen.' +
      'Beim Kauf erhältst du eine systematische Einführung in die Astrologie und wirst zusätzlich mit den Besonderheiten der Evolutionären Astrologie vertraut gemacht.' +
      'Ich schildere dir auch ein genaues Vorgehen für die Horoskop-Deutung. Der gesamte Inhalt wurde von mir einsteigerfreundlich gestaltet!',
      'Dieser Live-Kurs ist für alle gedacht, welche bereits die theoretischen Grundlagen der Evolutionären Astrologie beherrschen und tiefer in den Prozess des Deutens einsteigen wollen.' +
      'Mit Abschluss des Kurses hast du dir eine vollständige Interpretation deines eigenen Horoskops erarbeitet und bist nun fähig diese Struktur auch auf andere Horoskope anzuwenden.',
    ]

    courseContent: string[] =[
      '8 Kapitel inklusive Übungsaufgaben',
      'Aufzeichnungen 4 Live-Calls + viel Praxis',
    ]

    courseTime: string[] =[
      '17:09h',
      '10:13h',
    ]

    coursePrice: string[] =[
      '511€',
      '250€',
    ]

    courseSpecial: string[] =[
      'Telegram-Gruppe begleitend zum Kurs.',
      'Basis-Kurs + Live-Kurs für 600€.',
    ]


    picturesForInfoboxes: string[] =[
      'kurspromo.png',
     ];
  
     captionForInfoboxes: string[] =[
      'Information',
     ];
  
     textForInfoboxes: string[] =[
      'Für den Video-Kurs einfach hier (https://ullrichtobias.gurucan.com/) mit E-Mail & Passwort registrieren und bequem per PayPal bezahlen.' +
      'Bei Fragen & Anregungen zu den Kursen meldet euch gerne bei mir.' +
      ' Herzliche Grüße' +
      ' Tobias Ullrich',
     ];
  
     routeForInfoboxes: string[] =[
      'https://ullrichtobias.gurucan.com/',
     ];



    /**
     * 
     * @param route Internal Route to another Page
     */
    routeTo(route: string){
      this.router.navigateByUrl(route);
    }

    /**
     * 
     * @param url External Route to another Page
     */
    goToUrl(url: string){
      console.log(url);
      window.open(url, "_blank");
     }

}
