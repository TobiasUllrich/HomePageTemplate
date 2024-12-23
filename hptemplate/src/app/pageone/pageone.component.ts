import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-pageone',
  templateUrl: './pageone.component.html',
  styleUrl: './pageone.component.scss'
})
export class PageoneComponent {

    constructor(private router: Router, private titleService:Title) { this.titleService.setTitle("Evolutionäre Astrologie"); }

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
