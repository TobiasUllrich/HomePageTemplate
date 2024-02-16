import { Component } from '@angular/core';

@Component({
  selector: 'app-iconbox',
  templateUrl: './iconbox.component.html',
  styleUrl: './iconbox.component.scss'
})
export class IconboxComponent {

  logos: string[] =[
    'youtube',
    'instagram',
    'facebook',
    'twitter',
    'tik-tok'
   ]; 
  links: string[] =[
     'https://www.youtube.com/@EvolutionaereAstrologie',
     'https://www.instagram.com/tobiasulli/',
     'https://www.facebook.com/UllrichTobias',
     'twitter',
     'tik-tok'
    ]; 

    goToUrl(id: number){
     window.open(this.links[id], "_blank");
    }
    
}
