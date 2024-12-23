import { Component } from '@angular/core';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-pagesix',
  templateUrl: './pagesix.component.html',
  styleUrl: './pagesix.component.scss'
})
export class PagesixComponent {

constructor(private titleService:Title) { this.titleService.setTitle("Cranio-Sacral-Therapie | Diplomarbeit"); }

}
