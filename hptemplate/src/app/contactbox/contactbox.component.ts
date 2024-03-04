import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { environment } from '../../environments/environment.development';


@Component({
  selector: 'app-contactbox',
  templateUrl: './contactbox.component.html',
  styleUrl: './contactbox.component.scss'
})
export class ContactboxComponent implements OnInit{
    @ViewChild('myForm') myForm!: ElementRef; //To contact #myForm of the HTML-Code
    @ViewChild('nameField') nameField!: ElementRef; //To contact #nameField of the HTML-Code
    @ViewChild('emailField') emailField!: ElementRef; //To contact #nameField of the HTML-Code
    @ViewChild('messageField') messageField!: ElementRef; //To contact #messageField of the HTML-Code
    @ViewChild('sendbutton') sendbutton!: ElementRef; //To contact #sendbutton of the HTML-Code
    constructor() { }
  

    /**
     * For the cusomized Button
     */
    label = 'brrrrrrrZZZ';
    link = '';
    where = '';
    


    ngOnInit(): void {
    }
  
    /**
     * We are making a POST-Request, means we are sending data to the FTP-Server and using the PHP-Script of the FTP-Server
     */
    async sendMail(){
      
      //console.log('sending mail', this.myForm);   //Form-Element as output in Console
      let nameField = this.nameField.nativeElement;      //Equivalent to document.getElemenById()
      let emailField =this.emailField.nativeElement;     //Equivalent to document.getElemenById()
      let messageField =this.messageField.nativeElement; //Equivalent to document.getElemenById()
      let sendbutton =this.sendbutton.nativeElement;     //Equivalent to document.getElemenById()
  
      //Deactivates the HTML-Elements
      nameField.disabled = true; 
      emailField.disabled = true;
      messageField.disabled = true;
      sendbutton.disabled = true;
      //Sende-Animation anzeigen
  
      //Which data will be send?
      let fd = new FormData(); //fd = FormData
      fd.append('name',nameField.value); //(Variable,Value) Value of variable name is send with the fromdata
      fd.append('email',emailField.value); //(Variable,Value) Value of variable email is send with the fromdata
      fd.append('message',messageField.value); //(Variable,Value) Value of variable message is send with the fromdata
      
      // Path to the PHP-Data on the FTP-Server -> PHP gets executed when "submit" gets pressed
      await fetch(`${environment.baseUrl}/send_mail/send_mail.php`,
      {
       method: 'POST', //We want to post something = Post-Request
       body: fd //We fetch our data from the Body (fd = fetch data)
      }
      );
  
      //Show "Message Send"-Animation
      (<HTMLInputElement>document.getElementById('divForSendAnimation')).classList.add('displaySendAnimation');
      
      
      setTimeout(()=>{
      //Enables the HTML-Elements again
      nameField.disabled = false;
      emailField.disabled = false;
      messageField.disabled = false;
      sendbutton.disabled = false;
      //Clears the input-fields
      nameField.value = '';
      emailField.value = '';
      messageField.value = '';
      sendbutton.value = '';
      //Hides OK-Picture
      (<HTMLInputElement>document.getElementById(`nameok`)).classList.add('d-none');
      (<HTMLInputElement>document.getElementById(`emailok`)).classList.add('d-none');
      (<HTMLInputElement>document.getElementById(`messageok`)).classList.add('d-none');
  
      (<HTMLInputElement>document.getElementById('divForSendAnimation')).classList.remove('displaySendAnimation');
      },1500);
      
      //FEHLER: Cross Origin Ressource Sharing (Verschiedene Quellen teilen sich die gleichen Ressourcen!)
      //Wir senden Daten als localhost (Testmodus) an den FTP-Server, ABER FTP-Server blockiert die Antwort
    }
  
  
    /**
     * Returns you a certain Inputfield
     * @param name name of the inputfield ('name','email' or 'message')
     * @returns Inputfield as Object/Element
     */
  getElementByName(name: string){
    let element;
    if(name == 'name'){
      element=this.nameField.nativeElement;
    }
    else if(name == 'email'){
      element=this.emailField.nativeElement;
    }
    else{
      element=this.messageField.nativeElement;
    }
    return element;
  }  
    
  /**
   * Shifts the label of an Inputfield to the top of the Inputfield
   * @param name name of the inputfield ('name','email' or 'message')
   */
  shiftLabelUpwards(name: string){ 
    (<HTMLInputElement>document.getElementById(`${name}-label`)).classList.add('label-shift-upwards');
    (<HTMLInputElement>document.getElementById(`${name}-label`)).classList.remove('label-shift-downwards');
  }
  
  /**
   * Shifts the label of an Inputfield backwards if the Inputfield ist empty
   * @param name name of the inputfield ('name','email' or 'message')
   */
  shiftLabelDownwardsIfInputFieldEmpty(name: string){
    let element = this.getElementByName(name);
    if (element.value == ''){
    (<HTMLInputElement>document.getElementById(`${name}-label`)).classList.add('label-shift-downwards');
    (<HTMLInputElement>document.getElementById(`${name}-label`)).classList.remove('label-shift-upwards');
    }
  }
  
  /**
   * Observes if an Inputfield is changed to display messages
   * @param name name of the inputfield ('name','email' or 'message')
   */
  onChange(name: string) {  
    let element = this.getElementByName(name);
    if(this.fokusOn(element)){ // Element is focused    
      if(element.value.length == 0)
      {this.displayFieldHasToBeFilledMessage(name);}
      else
      {this.displayEverthingOKMessage(name);}
    }
    else
    {/*Nothing to do, because element is not focused*/};
  }
  
  /**
   * Gives Information if Object/Element is focused
   * @param element 
   * @returns true if this element is focused
   */
  fokusOn(element: HTMLElement){
   return document.activeElement === element;
  }
  
  /**
   * Shows "You have to fill this field"-Message for Inputfield
   * @param name name of the inputfield ('name','email' or 'message')
   */
  displayFieldHasToBeFilledMessage(name: string){
    (<HTMLInputElement>document.getElementById(`${name}req`)).textContent=`Your ${name} is required`;
    if(name == 'message'){(<HTMLInputElement>document.getElementById(`messagereq`)).textContent=`Your message is empty`}; //Overwrite textContent if message-Element
    (<HTMLInputElement>document.getElementById(`${name}req`)).style.color='red';
    //(<HTMLInputElement>document.getElementById(`${name}ok`)).classList.add('d-none'); //Grüne Haken ausgeblendet
    (<HTMLInputElement>document.getElementById(`${name}alert`)).classList.remove('d-none');
  }
  
  /**
   * Shows OK-Message for Inputfield
   * @param name name of the inputfield ('name','email' or 'message')
   */
  displayEverthingOKMessage(name: string){
      (<HTMLInputElement>document.getElementById(`${name}req`)).textContent=`.`;
      (<HTMLInputElement>document.getElementById(`${name}req`)).style.color='white';
      //(<HTMLInputElement>document.getElementById(`${name}ok`)).classList.remove('d-none'); //Grüne Haken ausgeblendet
      (<HTMLInputElement>document.getElementById(`${name}alert`)).classList.add('d-none');
  }
  
}
