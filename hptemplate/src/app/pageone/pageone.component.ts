import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pageone',
  templateUrl: './pageone.component.html',
  styleUrl: './pageone.component.scss'
})
export class PageoneComponent {

  constructor(private router: Router) { } 

    /**
     * For the cusomized Button
     */
    label = 'Kontaktiere mich';

    routeTo(route: string){
      this.router.navigateByUrl(route);
    }
    

}
