import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AppConfigurations } from "../../app/app.configuration";
import { AuthService } from '../../core/services/user.service'
import { StorageService } from '../../core/services/storage.service';

/**
 * Generated class for the SitiosdeinteresPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-sitiosdeinteres',
  templateUrl: 'sitiosdeinteres.html',
})
export class SitiosdeinteresPage {
  private sitios : FormGroup;
  public mainNameApp: string;
  private appConfig:AppConfigurations;
  telefonovalida:boolean= false;
  telefonovalida1:boolean= false;
  actividad:boolean= false;
  comercial1:boolean= false;
  porcentajes:boolean= false;



  constructor( private formBuilder: FormBuilder, private storageService: StorageService,  ) {
    this.appConfig=new AppConfigurations();
    this.mainNameApp=this.appConfig.mainNameApp;
    this.sitios = this.formBuilder.group({
      interviewer_id: [this.storageService.user.data.user.fullname],
      datesurvey_start:this.dateTime(),
      name:[''],
      municipality_id:[''],
      position_id:[''],
      other_position:[''],
      address:[''],
      contact:[''],
      phone_number:[''],
      phone_ext:[''],
      cell_phone:[''],
      email:[''],
      touristPlans:[''],
      sport_activities:[''],
      other_sport_activities:[''],
      various_activities:[''],
      comercial_activity:[''],
      count_comercial_activity:[''],
      count_people_services:[''],
      percentage_people_national:[''],
      percentage_people_foreign:[''],
      percentage_people_local:[''],




      prestador: [''],
      ano_fundacion: ['', Validators.required],
      tipo_establecimiento: ['', Validators.required],
      otro: ['', Validators.required],
      capacidad: [''],
      hora: [''],
      formato_hora: [''],
      tarifa: [''],
      actividad_comercial: [''],
      dias_mes: ['', Validators.required],
      ningun_servicio: ['', Validators.required],
      instructor: ['', Validators.required],
      transporte: ['', Validators.required],
      alimentacion: ['', Validators.required],
      guia: ['', Validators.required],
      recorridos: ['', Validators.required],
      otros: ['', Validators.required],
      otro_servicio: ['', Validators.required],
      convenios: ['', Validators.required],
      tipo_convenio: ['', Validators.required],

    });
  }
  private dateTime(): string {
    const dateTime = new Date();
    return dateTime.toLocaleDateString() + ' ' + dateTime.toLocaleTimeString();
  }
  
  public telefono(val){
    let telefono = this.sitios.value.phone_number;
    
    
    
     if(telefono.length > val){
       
       this.sitios.reset({phone_number:""});
       this.telefonovalida = true;
      }else{
      this.telefonovalida = false;
     }

     
    
  }

  public celular(val){
    let telefono = this.sitios.value.cell_phone;
     
    
    if(telefono.length > val){
      this.sitios.reset({cell_phone:""});
      this.telefonovalida1 = true;
      
      
    }else{
      this.telefonovalida1 = false;
      
  
    }



  }

  public actividades(){
   

    if(this.sitios.value.sport_activities.indexOf("40")>=0 || this.sitios.value.sport_activities=="40"){


      this.actividad = true;    
    }else{


      this.actividad = false;    
    }
  }

  public comercial(){
    console.log(this.sitios.value.comercial_activity);
    if(this.sitios.value.comercial_activity == "1"){
      this.comercial1= true;
    }else{
      this.sitios.reset({count_comercial_activity:""});
      this.sitios.reset({count_people_services:""});

      this.sitios.reset({percentage_people_national:""});
      this.sitios.reset({percentage_people_foreign:""});
      this.sitios.reset({percentage_people_local:""});

      
      
      this.comercial1= false;

    }
  }

  public porcentaje(){
    // porcentajes
    let total = parseInt(this.sitios.value.percentage_people_national)+parseInt(this.sitios.value.percentage_people_foreign)+parseInt(this.sitios.value.percentage_people_local);
    if(total != 100){
      console.log(1);
      this.porcentajes = true;
    }else{
      this.porcentajes = false;
      console.log(2);
      
    }


  }
}
