import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-custombutton',
  templateUrl: './custombutton.component.html',
  styleUrl: './custombutton.component.scss'
})
export class CustombuttonComponent {
  
  @Input() buttonText: string = ''; //MUSS DIREKT INSTANZIERT WERDEN, SONST MECKERT TYPESCRIPT!

}
