import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pageeight',
  templateUrl: './pageeight.component.html',
  styleUrl: './pageeight.component.scss'
})
export class PageeightComponent {

  constructor(private router: Router, private titleService:Title) { this.titleService.setTitle("Angebote"); } 

    /**
     * Labels for the customized Button
     */
    label = 'Kontaktiere mich';
    /**
     * 
     * @param route Internal Route to another Page
     */
    routeTo(route: string){
      this.router.navigateByUrl(route);
    }


}
