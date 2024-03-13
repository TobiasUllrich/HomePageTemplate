import { Component } from '@angular/core';

@Component({
  selector: 'app-pageseven',
  templateUrl: './pageseven.component.html',
  styleUrl: './pageseven.component.scss'
})
export class PagesevenComponent {

  courseImgs: string[] =[
    'kurs1',
    'kurs2',
    'Kapitel 1',
   ];

   courseName: string[] =[
    'Video-Kurs: Evolutionäre Astrologie',
    'Live-Kurs: Deute dein Leben',
    '1. Evolutionäre Astrologie',
   ];

   linkToCourse: string[] =[
    'https://ullrichtobias.gurucan.com/app/plans/61f95636e2253d0013950a9d',
    'https://ullrichtobias.gurucan.com/app/plans/64047295ff1a890013ff42e3',
    'https://ullrichtobias.gurucan.com/app/plans/61166b6cf23f74001168d5a9',
   ];

   courseContent: string[] =[
    '8 Kapitel inklusive Übungsaufgaben',
    'Aufzeichnungen 4 Live-Calls + viel Praxis',
    'Wie funktioniert Astrologie?, Warum sollte man sich mit Astrologie beschäftigen?, Was sind die Gefahren der Astrologie?, Was ist Evolutionäre Astrologie? + Übungsaufgaben',
   ];
   courseTime: string[] =[
    '17:09h',
    '10:13h',
    '00:32h',
   ];
   coursePrice: string[] =[
    '390€',
    '200€',
    '12€',
   ];

    /**
     * Labels for the customized Button
     */
    label = 'Kurs kaufen';
    label2 = 'Kapitel kaufen';

    /**
     * 
     * @param url External Route to another Page
     */
    goToUrl(url: string){
      console.log(url);
      window.open(url, "_blank");
     }

}
