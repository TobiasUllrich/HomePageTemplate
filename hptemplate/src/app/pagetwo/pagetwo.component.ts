import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagetwo',
  templateUrl: './pagetwo.component.html',
  styleUrl: './pagetwo.component.scss'
})
export class PagetwoComponent {

  constructor(private router: Router) { } 

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
