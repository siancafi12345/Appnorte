import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { AppConfigurations } from "../../app/app.configuration";
import { AgenciaDeViajesModel } from '../../model/agenciadeviajes/agenciadeviajes.model';
import { AppSaveForm } from '../../services/app.save.form.service';
import { AppValidations } from '../../app/app.validations';
import * as moment from 'moment';
import { StorageService } from "../../core/services/storage.service";

/**
 * Generated class for the AgenciasdeviajesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-agenciasdeviajes',
  templateUrl: 'agenciasdeviajes.html',
})

export class AgenciasdeviajesPage {
  public dateStart:string= "" ;
  public mainNameApp: string;
  public myDate: string;
  private dateTime(): string {
    const dateTime = new Date();
    return dateTime.toLocaleDateString() + ' ' + dateTime.toLocaleTimeString();
  }

  


  private appConfig:AppConfigurations;
  telefonovalida: boolean = false;
  telefonovalida1: boolean = false;

  @ViewChild("container") container: ElementRef;
  public agencia : AgenciaDeViajesModel;
  constructor(
    private storageService: StorageService,
    public navCtrl: NavController, 
    public navParams: NavParams,
    private saveForm:AppSaveForm,
    private alertCtrl: AlertController,
    private validations:AppValidations,
    private toastCtrl: ToastController) {
    this.appConfig=new AppConfigurations();
    this.mainNameApp=this.appConfig.mainNameApp;
    this.dateStart = this.dateTime();
    this.agencia =new AgenciaDeViajesModel();
    this.agencia.valor = false;
    
    var now = moment();
    this.agencia.A0=this.storageService.user.data.user.fullname;
    this.agencia.datesurvey_start = moment(now.format(), moment.ISO_8601).format();
    }
   


  ionViewDidLoad() {
    console.log('ionViewDidLoad AgenciasdeviajesPage');
  }

  suma(){
   
    this.agencia.suma = true;
    var a = parseInt(this.agencia.percent_nal_plan1.toString()) + parseInt(this.agencia.percent_rgnal_plan1.toString());
    
    if(a == 100){
      this.agencia.suma = false;
    }
    console.log(this.agencia.suma);
  }

  suma1(){
   
    this.agencia.suma1 = true;
    var a = parseInt(this.agencia.percent_rgnal_plan2.toString()) + parseInt(this.agencia.percent_nal_plan2.toString());
    
    if(a == 100){
      this.agencia.suma1 = false;
    }
  }
  suma2(){
   
    this.agencia.suma2 = true;
    var a = parseInt(this.agencia.percent_rgnal_plan3.toString()) + parseInt(this.agencia.percent_nal_plan3.toString()) + parseInt(this.agencia.percent_intl_plan3.toString());
    
    if(a == 100){
      this.agencia.suma2 = false;
    }
  }
  validar(){

    if(this.agencia.services_types_id.indexOf("40")>=0)
     {
      this.agencia.valor = true;
     }else{
      this.agencia.valor = false;

     }
    
  }

  public telefono(val){
    let telefono = this.agencia.phone_number;
    console.log(val);
    console.log(telefono);
    
    
    if(telefono.length > val){
      this.agencia.phone_number = "";
      this.telefonovalida = true;
      
      
    }else{
      this.telefonovalida = false;
      
  
    }
    
  }

  public celular(val){
    let telefono = this.agencia.cell_phone;
    console.log(val);
    console.log(telefono);
    
    
    if(telefono.length > val){
      this.agencia.cell_phone = "";
      this.telefonovalida1 = true;
      
      
    }else{
      this.telefonovalida1 = false;
      
  
    }
    
  }

  public save()
  {
    
    var now = moment();
    this.agencia.datesurvey_end = moment(now.format(), moment.ISO_8601).format();
    
    

    if(this.validations.validate(this.container))
    {
      var flag=this.saveForm.save(
        this.agencia,
        this.appConfig.form6.number,
        this.appConfig.form6.name);
      if(flag)
      {
        this.navCtrl.setRoot(AgenciasdeviajesPage);
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

