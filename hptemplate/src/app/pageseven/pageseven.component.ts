import { Component } from '@angular/core';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-pageseven',
  templateUrl: './pageseven.component.html',
  styleUrl: './pageseven.component.scss'
})
export class PagesevenComponent {

  constructor(private titleService:Title) { this.titleService.setTitle("Evolutionäre Astrologie | Kursinhalte"); }

  courseImgs: string[] =[
    'kurs1.jpg',
    'kurs2.jpg',
    'Kapitel 11.jpg',
    'Kapitel 22.jpg',
    'Kapitel 33.jpg',
    'Kapitel 44.jpg',
    'Kapitel 55.jpg',
    'Kapitel 66.jpg',
    'Kapitel 77.jpg',
    'Kapitel 88.jpg',
    'LiveKurs2.png',
    'LiveKurs2.png',
    'LiveKurs2.png',
    'LiveKurs2.png',
    'LiveKurs2.png',
    'LiveKurs2.png',
   ];

   courseName: string[] =[
    '🌟 Evolutionäre Astrologie I',
    '🌟 Evolutionäre Astrologie II',
    '1. Evolutionäre Astrologie',
    '2. Planeten unseres Sonnensystems',
    '3. Astronomische Grundlagen',
    '4. Grundlagen des Tierkreises',
    '5. Die Tierkreiszeichen',
    '6. Häusersysteme',
    '7. Die Aspekte',
    '8. Evolutionäre Horoskopdeutung',
    '1. Call des Live-Kurses',
    '2. Call des Live-Kurses',
    '3. Call des Live-Kurses',
    '4. Call des Live-Kurses',
    '5. Call des Live-Kurses',
    '6. Call des Live-Kurses',
   ];




   linkToCourse: string[] =[
    'https://ullrichtobias.gurucan.com/app/plans/61f95636e2253d0013950a9d',
    'https://ullrichtobias.gurucan.com/app/plans/64047295ff1a890013ff42e3',
    'https://ullrichtobias.gurucan.com/app/plans/61166b6cf23f74001168d5a9',
    'https://ullrichtobias.gurucan.com/app/plans/6117659e11c69300178de655',
    'https://ullrichtobias.gurucan.com/app/plans/611a25787df2c400172ad4df',
    'https://ullrichtobias.gurucan.com/app/plans/6125555671a5c900118baf9e',
    'https://ullrichtobias.gurucan.com/app/plans/614673213ce05d001c14c1c7',
    'https://ullrichtobias.gurucan.com/app/plans/61cc66440f92c400136ccd49',
    'https://ullrichtobias.gurucan.com/app/plans/61cc694158a035001244dd1b',
    'https://ullrichtobias.gurucan.com/app/plans/61edd896bc1459001253a54b',
    'https://ullrichtobias.gurucan.com/app/plans/640474472542de0012460f43',
    'https://ullrichtobias.gurucan.com/app/plans/640474bb8128f1001287bf91',
    'https://ullrichtobias.gurucan.com/app/plans/640475352542de0012460f5a',
    'https://ullrichtobias.gurucan.com/app/plans/6404755981805d001371b7bb',
    'https://ullrichtobias.gurucan.com/app/plans/64047584ff4f830012a3b633',
    'https://ullrichtobias.gurucan.com/app/plans/6404759dff1a890013ff42f8',
   ];

   courseContent: string[] =[
    '8 Kapitel inklusive Übungsaufgaben',
    'Aufzeichnungen 6 Live-Calls mit viel Praxis',
    'Wie funktioniert Astrologie?, Warum sollte man sich mit Astrologie beschäftigen?, Was sind die Gefahren der Astrologie?, Was ist Evolutionäre Astrologie? + Übungsaufgaben',
    'Sonne, Merkur, Venus, Erde, Mond, Mondknoten, Mars, Jupiter, Saturn, Chiron, Uranus, Neptun, Pluto + Übungsaufgaben',
    'Entstehung des Tierkreises, Entstehung der AC-DC-Achse, Entstehung der MC-IC-Achse, Präzession, Bewegungen in der Radix + Übungsaufgaben',
    'Einheitskreis, Polaritäten, Qualitäten/Modalitäten, Elemente + Übungsaufgaben',
    'Widder, Stier, Zwilling, Krebs, Löwe, Jungfrau, Waage, Skorpion, Schütze, Steinbock, Wassermann, Fische, Stichwort-Methode + Übungsaufgaben',
    'Meridian, Morinus, Regiomontanus, Campanus, Porphyrius, Koch, Alcabitius, Placidus, Äquales-Aszendenten-Häusersystem, Ganze-Zeichen-Häusersystem, Bedeutung der Häuser + Übungsaufgaben',
    'Konjunktion, Sextil, Trigon, Quincunx, Opposition, Quintil & Bi-Quintil, Halb-Quadrat, Anderthalb-Quadrat, Halb-Sextil, Nonil, Septil, Stichwort-Methode mit 3 & 4 Energien, Aspektfiguren: Stellium, T-Quadrat, Großes Trigon, Großes Kreuz, Yod, Der Drache, Mystisches Rechteck + Übungsaufgaben',
    'Essentielle Würden & Dekanate, Die 6 Schritte des Deutens, Interpretations-Checkliste, Pluto-Methode, Mondknoten-Quadrate, Pluto Konjunktion Südknoten, Pluto Konjunktion Nordknoten, Mondknotenherrscher am jeweils anderen Knoten, Muster erkennen, Phasenlehre, Rückläufige Planeten',
    'Trinität der Vergangenheit',
    'Trinität der Zukunft',
    'Mondknoten-Quadrat I',
    'Mondknoten-Quadrat II',
    'Transite I',
    'Transite II',
   ];

   courseTime: string[] =[
    '17:09h',
    '10:13h',
    '00:32h',
    '1:52h',
    '1:03h',
    '1:40h',
    '3:31h',
    '2:42h',
    '2:19h',
    '3:30h',
    '1:38h', 
    '2:00h',
    '2:00h',
    '1:14h',
    '1:44h',
    '1:37h', 
   ];

   coursePrice: string[] =[
    '511€',
    '250€',
    '12€',
    '50€',
    '50€',
    '50€',
    '95€',
    '95€',
    '95€',
    '95€',
    '50€',
    '50€',
    '50€',
    '50€',
    '50€',
    '50€',
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
