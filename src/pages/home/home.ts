import { HistorialProvider } from './../../providers/historial/historial';
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
              private histProvider: HistorialProvider,
              private barcodeScanner:BarcodeScanner) {
      

  }
  escanear(){
    console.log("realizando escaneo");
    if(!this.plataforma.is("cordova")){
          //probar url
          console.log("prueba url");
      this.histProvider.agregar_elemento_historial("http://www.google.com")    

    } else{
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
     }).catch(err => {
         console.log('Error', err);
     });
    }
  }

}
