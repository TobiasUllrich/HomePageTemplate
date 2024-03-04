import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-custombutton',
  templateUrl: './custombutton.component.html',
  styleUrl: './custombutton.component.scss'
})
export class CustombuttonComponent {
  
  @Input() buttonText: string = ''; //MUSS DIREKT INSTANZIERT WERDEN, SONST MECKERT TYPESCRIPT!
  @Input() buttonLink: string = ''; //MUSS DIREKT INSTANZIERT WERDEN, SONST MECKERT TYPESCRIPT! 
  @Input() buttonWhere: string = ''; //MUSS DIREKT INSTANZIERT WERDEN, SONST MECKERT TYPESCRIPT! 
  // @Output() onClick = new EventEmitter<any>();
  

  constructor(private router: Router) {}

  clickFunction(){
//'/Kontakt'
      console.log('buttonText: ',this.buttonText);
      console.log('buttonLink: ',this.buttonLink);
      console.log('buttonWhere: ',this.buttonWhere);
      //window.open(this.links[id], "_blank");
      this.router.navigateByUrl('/Astrologie')
  }


  // onClickButton(event: MouseEvent) {
  //     console.log(event);
  //     this.onClick.emit(event);
  // }



}
