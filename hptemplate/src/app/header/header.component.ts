import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {



  getNotificationClosed(evt: any) {
      // Do something with the notification (evt) sent by the child!
      console.log('CLOSSSSSSSEEEEEDDDDDDDDD');
      (<HTMLInputElement>document.getElementById('hdr')).classList.remove('hdr100vh');
      (<HTMLInputElement>document.getElementById('hdr')).classList.remove('posfxd');
  }

  getNotificationOpened(evt: any) {
    // Do something with the notification (evt) sent by the child!
    console.log('OPPPPEEEEENNNNNNEEEEEDDDDD');
    (<HTMLInputElement>document.getElementById('hdr')).classList.add('hdr100vh');
    (<HTMLInputElement>document.getElementById('hdr')).classList.add('posfxd');
}

}
