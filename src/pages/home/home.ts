import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, 
              private plataforma: Platform,
              private barcodeScanner:BarcodeScanner) {
        //probar url
        
  }
  escanear(){
    console.log("realizando escaneo");
    if(!this.plataforma.is("cordova")){

    } else{
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
     }).catch(err => {
         console.log('Error', err);
     });
    }
  }

}
