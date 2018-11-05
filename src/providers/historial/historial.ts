import { ScanData } from './../../models/scan data.model';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Injectable } from '@angular/core';


@Injectable()
export class HistorialProvider {
  private historial:ScanData[]=[];
  constructor(private iab:InAppBrowser) {
    
  }

  agregar_elemento_historial(texto:string){
    let dato=new ScanData(texto);
    //metemos un elemento al principio del array
    this.historial.unshift(dato);

    //despues de crear el elemento, lo abrimos
  }
  abrir_elemento_historial(index:number=0){
    let elemento=this.historial[index];
    console.log(elemento);
    switch(elemento.tipo){
      case "web":
      this.iab.create(elemento.info,"_system");//parte fija
      break;
      default:
      console.error("Tipo no soportado")
    }
  }
}
