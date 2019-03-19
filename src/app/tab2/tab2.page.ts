import { Component } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  constructor(private geolocation: Geolocation) {}
  
  locate(){
    this.geolocation.getCurrentPosition().then((resp) => {
      console.log("lat" + resp.coords.latitude + "- long" + resp.coords.longitude)
      return resp.coords.latitude + "and" + resp.coords.longitude;
     }).catch((error) => {
       console.log('Error getting location', error);
     });
  }
}
