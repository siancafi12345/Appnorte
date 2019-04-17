//import { Component } from '@angular/core';
//import { NavController, NavParams } from 'ionic-angular';
import { AppConfigurations } from "../../app/app.configuration";
import { AlojamientoModel } from "../../model/alojamiento/alojamiento.model"
import { Alojamientopcion1Model } from "../../model/alojamiento/opcion1.model"

import { AppValidations } from '../../app/app.validations';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { AppSaveForm } from '../../services/app.save.form.service';
import { NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { StorageService } from "../../core/services/storage.service";

/*import {Alojamientopcion1Model} from "../../model/alojamiento/opcion1.model"*/

/**
 * Generated class for the AlojamientoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-alojamiento',
  templateUrl: 'alojamiento.html',
})
export class AlojamientoPage {
  public mainNameApp: string;
  private appConfig:AppConfigurations;
  public alojamiento: AlojamientoModel;
  

  public A0: string;
  public dateStart:string= "" ;
  private dateTime():string  {
    const dateTime = new Date();
    var a = dateTime.toString();
    var res = a.slice(15, 25);
    console.log(res);
    return res
    
  }
  @ViewChild("container") container: ElementRef;
  /*public opcion_1: Alojamientopcion1Model;*/

  constructor(
    public navCtrl: NavController,
    private validations:AppValidations,
    private alertCtrl: AlertController,
    private saveForm:AppSaveForm,
    public navParams: NavParams,
    private storageService: StorageService,
    private toastCtrl: ToastController) {
    this.A0 = this.storageService.user.data.user.fullname;
    this.appConfig=new AppConfigurations();
    this.mainNameApp=this.appConfig.mainNameApp;
    this.alojamiento =new AlojamientoModel();
    

    

    this.dateStart = this.dateTime();

    
    /*this.opcion_1 =new Alojamientopcion1Model();*/

    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlojamientoPage');
  }

  validacion(){
    let arreglo= this.alojamiento.accommodation_type;
    console.log(arreglo);
    
    if(arreglo.indexOf("401") != -1 && this.alojamiento.comercial_activity == "si"){
      this.alojamiento.habitacion = true;
      
    
            
    }else{
      this.alojamiento.habitacion = false;
    }
    if(arreglo.indexOf("402") != -1 && this.alojamiento.comercial_activity == "si"){
      this.alojamiento.apartamento = true;
      
    
    }else{
      this.alojamiento.apartamento = false;
    }

    if(arreglo.indexOf("403") != -1 && this.alojamiento.comercial_activity == "si"){
      this.alojamiento.casas = true;
      
    
    }else{
      this.alojamiento.casas = false;
    }
    if(arreglo.indexOf("404") != -1 && this.alojamiento.comercial_activity == "si"){
      this.alojamiento.cabanas = true;
      
    }else{
      this.alojamiento.cabanas = false;
    }
    if(arreglo.indexOf("405") != -1 && this.alojamiento.comercial_activity == "si"){
      this.alojamiento.camping = true;
      

    }else{
      this.alojamiento.camping = false;
    }
   }

   public save()
  {
    this.alojamiento.A0 = this.A0;
    
     if(this.validations.validate(this.container))
     {
       var flag=this.saveForm.save(
         this.alojamiento,
         this.appConfig.form8.number,
         this.appConfig.form8.name);
       if(flag)
       {
         this.navCtrl.setRoot(AlojamientoPage);
       }
       let toast = this.toastCtrl.create(
         {
           message: 'Toda la informacion se lleno correctamente',
           duration: 3000,
           position: 'bottom'
         });
         toast.present();
     }
     else
     {
       let alert = this.alertCtrl.create({
         title: 'Alerta!!!',
         message: 'Por favor llenar campos en rojo',
         buttons: [          
           {
             text: 'OK',
             handler: () => {
               console.log('Buy clicked');
             }
           }
         ]
       });
       alert.present();
     }
  }

}
