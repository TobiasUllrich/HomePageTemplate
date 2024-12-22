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

      //Sorgt dafür, dass das Menü nicht schon beim Einklappen seine ganze Höhe verliert
      setTimeout(function(){
        (<HTMLInputElement>document.getElementById('hdr')).classList.remove('hdr100vh');
       }, 500);


      (<HTMLInputElement>document.getElementById('hdr')).classList.remove('posfxd');
  }

  getNotificationOpened(evt: any) {
    // Do something with the notification (evt) sent by the child!
    console.log('OPPPPEEEEENNNNNNEEEEEDDDDD');
    (<HTMLInputElement>document.getElementById('hdr')).classList.add('hdr100vh');
    (<HTMLInputElement>document.getElementById('hdr')).classList.add('posfxd');
}

}
