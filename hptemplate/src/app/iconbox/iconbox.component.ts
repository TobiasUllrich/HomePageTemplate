import { Component } from '@angular/core';

@Component({
  selector: 'app-iconbox',
  templateUrl: './iconbox.component.html',
  styleUrl: './iconbox.component.scss'
})
export class IconboxComponent {

  logos: string[] =[
    'youtube.png',
    'facebook.png',
    'telegram.png',
    // 'instagram',
    // 'twitter',
    // 'tik-tok'
   ]; 
  links: string[] =[
     'https://www.youtube.com/@EvolutionaereAstrologie',
     'https://www.facebook.com/UllrichTobias',
     'https://t.me/Evolutionary_Astrology',
    //  'https://www.instagram.com/tobiasulli/',
    //  'twitter',
    //  'tik-tok'
    ]; 

    goToUrl(id: number){
     window.open(this.links[id], "_blank");
    }
    
}
