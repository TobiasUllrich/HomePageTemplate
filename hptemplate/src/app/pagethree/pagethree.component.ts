import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagethree',
  templateUrl: './pagethree.component.html',
  styleUrl: './pagethree.component.scss'
})
export class PagethreeComponent {

  constructor(private router: Router) { } 

    /**
     * Labels for the customized Button
     */
    label = 'Kontaktiere mich';
    label2 = 'Kurs kaufen';

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
