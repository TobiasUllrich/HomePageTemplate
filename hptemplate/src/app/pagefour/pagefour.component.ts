import { Component } from '@angular/core';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-pagefour',
  templateUrl: './pagefour.component.html',
  styleUrl: './pagefour.component.scss'
})
export class PagefourComponent {

  constructor(private titleService:Title) { this.titleService.setTitle("Tobias Ullrich | Über mich"); }

  links: string[] =[
    'https://www.symbolwelten.de/',
    'http://www.blueliners.de/',
    'https://www.symbolwelten.de/',
    'https://physiotherapie-marchadier.de/',
    'https://www.dhamma.org/',
    'https://www.ulrichbold.com/'
   ]; 

  goToUrl(id: number){
    window.open(this.links[id], "_blank");
   }


}
