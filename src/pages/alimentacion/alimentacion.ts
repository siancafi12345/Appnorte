import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AppConfigurations } from "../../app/app.configuration";
import { StorageService } from '../../core/services/storage.service';
import { FunctionsGlobalsService } from '../../core/services/functions-globals.service';
import * as moment from 'moment';
import { AppSaveForm } from '../../services/app.save.form.service';
import { NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { AppValidations } from '../../app/app.validations';
import { ViewChild, ElementRef } from '@angular/core';


/**
 * Generated class for the AlimentacionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-alimentacion',
  templateUrl: 'alimentacion.html',
})

export class AlimentacionPage {

  private alimentacion : FormGroup;
  public mainNameApp: string;
  private appConfig:AppConfigurations;

  telefonovalida: boolean = false;
  telefonovalida1: boolean = false;
  diasvalida: boolean = false;
  diasvalida1: boolean = false;

  @ViewChild("container") container: ElementRef;
  constructor(
    public navCtrl: NavController,
    private saveForm:AppSaveForm,
    private validations:AppValidations,
    private formBuilder: FormBuilder,
    private storageService: StorageService,
    private alertCtrl: AlertController,
    private functions: FunctionsGlobalsService,
    private toastCtrl: ToastController
  ) {
    this.appConfig=new AppConfigurations();
    

    this.mainNameApp=this.appConfig.mainNameApp;
    var now=  moment();
    
    this.alimentacion = this.formBuilder.group({
      nombre: [this.storageService.user.data.user.fullname],
      dateStart:  moment(now.format(), moment.ISO_8601).format(),
      name:[''],
      date_year:[''],
      foot_category:[''],
      foot_category_other:[''],
      municipality_id:[''],
      address:[''],
      contact:[''],
      position_id:[''],
      other_position:[''],
      phone_number:[''],
      phone_ext:[''],
      cell_phone:[''],
      email:[''],
      comercial_activity: [''],
      count_comercial_activity: [''],
      food_service: [''],
      seating_number: [''],
      food_units_prom:[''],
      food_dishes_all: [''],
      dish_cost: [''],
      percentage_customers: [''],
      mesas_disponibles: [''],


    });
  }


  ionViewDidLoad() {
    this.storageService.loadStorageForm('alimentacion')
      .then(data => {
        if(!this.functions.isnullOrUndefined(data))
          this.alimentacion.setValue(data);
      })
  }

  logForm(){
    console.log(this.alimentacion.value);
    this.alimentacion.reset({
        nombre: this.storageService.user.data.user.fullname
    });
    this.storageService.removeStorageForm('alimentacion');
  }

  offlineForm(): void {
    this.storageService.saveStorageForm('alimentacion', this.alimentacion.value);
  }

  validar(){
    console.log(this.alimentacion.value.foot_category);
  }

  public telefono(val){
    let telefono = this.alimentacion.value.phone_number;
    console.log(val);
    console.log(telefono);
    
    
    if(telefono.length > val){
      
      //this.alimentacion.reset({phone_number:""});
      this.telefonovalida = true;
      
      
    }else{
      this.telefonovalida = false;
      
  
    }
    
  }

  public celular(val){
    let telefono = this.alimentacion.value.cell_phone;
    console.log(val);
    console.log(telefono);
    
    
    if(telefono.length > val){
      //this.alimentacion.reset({cell_phone:""});
      
      this.telefonovalida1 = true;
      
      
    }else{
      this.telefonovalida1 = false;
      
  
    }
    
  }

  public dias(val){
    let telefono = this.alimentacion.value.count_comercial_activity;
    console.log(val);
    console.log(telefono);
    
    
    if(telefono > val){
      //this.alimentacion.reset({count_comercial_activity:""});
      
      this.diasvalida = true;
      
      
    }else{
      this.diasvalida = false;
      
  
    }

    
    
  }

  public dias1(val){
    let telefono = this.alimentacion.value.percentage_customers;
    console.log(val);
    console.log(telefono);
    
    
    if(telefono > val){
      //this.alimentacion.reset({percentage_customers:""});
      
      this.diasvalida = true;
      
      
    }else{
      this.diasvalida = false;
      
  
    }

    
    
  }

  public save(e)
  {
    //let nombre = this.alimentacion.value.nombre;
    //console.log( nombre );
    //this.alojamiento.A0 = this.A0;
     if(this.validations.validate(this.container))
     {
       var flag=this.saveForm.save(
         this.alimentacion,
         this.appConfig.form5.number,
         this.appConfig.form5.name);
       if(flag)
       {
         this.navCtrl.setRoot(AlimentacionPage);
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
