import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pageeight',
  templateUrl: './pageeight.component.html',
  styleUrl: './pageeight.component.scss'
})
export class PageeightComponent {

  constructor(private router: Router, private titleService:Title) { this.titleService.setTitle("Tobias Ullrich | Angebote"); } 

    /**
     * Labels for the customized Button
     */
    label = 'Termin buchen';
    label2 = 'EA I kaufen';
    label3 = 'EA II kaufen';

    linkToCourse: string[] =[
      'https://ullrichtobias.gurucan.com/app/plans/61f95636e2253d0013950a9d',
      'https://ullrichtobias.gurucan.com/app/plans/64047295ff1a890013ff42e3',
    ]


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
