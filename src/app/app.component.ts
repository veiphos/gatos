import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  party = 'Party';
  urlImage = 'https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg';

  urlImage2='http://periodiconmx.com/wp-content/uploads/2015/02/img_0539.jpg'
  
  constructor() {
    if(this.party === 'Party'){
      this.urlImage = 'https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/partyTime.jpg';
    }

  }
   Cambiar(){
     this.urlImage = 'https://www.petdarling.com/articulos/wp-content/uploads/2014/05/razas-de-gatos.jpg';

    }
}


