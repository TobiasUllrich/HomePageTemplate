import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {


 logos: string[] =[
 'youtube',
 'instagram',
 'facebook',
 'twitter',
 'tik-tok'
]; 
links: string[] =[
  'youtube',
  'instagram',
  'facebook',
  'twitter',
  'tik-tok'
 ]; 

 goToUrl(){
  document.location.href = 'https://stackoverflow.com';
 }


}
