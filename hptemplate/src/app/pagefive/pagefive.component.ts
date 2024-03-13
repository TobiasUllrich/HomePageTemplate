import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-pagefive',
  templateUrl: './pagefive.component.html',
  styleUrl: './pagefive.component.scss'
})
export class PagefiveComponent implements OnInit {

  nameOfImg: string[] =[
    'Radix1.jpg',
    'Radix2.jpg',
    'Radix3.jpg',
   ];

   birthdata: string[] =[
    'Person geboren am 19.02.1974 um 22:00 Uhr in Frankfurt am Main',
    'Person geboren am 16.11.1962 um 19:20 Uhr in Pinneberg',
    'Person geboren am 28.06.1964 um 15:10 Uhr in Dachau',
   ];

   dateofreading: string[] =[
    'Reading am 10.03.2021',
    'Reading am 20.03.2021',
    'Reading am 22.01.2021',
   ];

   nameOfPdf: string[] =[
    'Interpretation Radix1',
    'Interpretation Radix2',
    'Interpretation Radix3',
   ];

  pdfUrls: SafeResourceUrl[] = [];
  
  
  constructor(private sanitizer: DomSanitizer) { }
  
  
  ngOnInit(): void {
    this.nameOfPdf.forEach(pdfName => {
      const pdfUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`assets/pdf/${pdfName}.pdf#toolbar=0&zoom=FitH`);
      this.pdfUrls.push(pdfUrl);
    });
  }

}
