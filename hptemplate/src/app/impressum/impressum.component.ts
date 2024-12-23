import { Component } from '@angular/core';
import { Title } from "@angular/platform-browser";
@Component({
  selector: 'app-impressum',
  templateUrl: './impressum.component.html',
  styleUrl: './impressum.component.scss'
})
export class ImpressumComponent {

constructor(private titleService:Title) { this.titleService.setTitle("Tobias Ullrich | Impressum"); }

}
