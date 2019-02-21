import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AppConfigurations } from "../../app/app.configuration";
import { StorageService } from '../../core/services/storage.service';
import { FunctionsGlobalsService } from '../../core/services/functions-globals.service';
import * as moment from 'moment';

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
  constructor(
    private formBuilder: FormBuilder,
    private storageService: StorageService,
    private functions: FunctionsGlobalsService
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







      

      prestador: ['', Validators.required],
      tipo_establecimiento: [''],
      especialidad_establecimiento: [''],
      ano_fundacion: [''],
      unidades_max: [''],
      unidades_diciembre: [''],
      valor_diciembre: [''],
      vinos_vendidos: [''],
      mesas_disponibles: [''],
      cientes_porcentaje: [''],
      lunes_apertura: [''],
      lunes_cierre: [''],
      martes_apertura: [''],
      martes_cierre: [''],
      miercoles_apertura: [''],
      miercoles_cierre: [''],
      jueves_apertura: [''],
      jueves_cierre: [''],
      viernes_apertura: [''],
      viernes_cierre: [''],
      sabado_apertura: [''],
      sabado_cierre: [''],
      domingo_apertura: [''],
      domingo_cierre: [''],
      otro_servicio: [''],
      area_recepcion: [''],
      banos_independientes: [''],
      auditorio_eventos: [''],
      servicio_eventos: [''],
      otro_complemento: [''],
      otro: [''],
      menu_dia: [''],
      cafeteria: [''],
      licores: [''],
      vinos: [''],
      postres: [''],
      parqueadero_propio: [''],
      servicio_domicilio: [''],
      zona_juegos: [''],
      convenios_si: [''],
      tipo_establecimiento_convenio: ['']
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
      
      this.alimentacion.reset({phone_number:""});
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
      this.alimentacion.reset({cell_phone:""});
      
      this.telefonovalida1 = true;
      
      
    }else{
      this.telefonovalida1 = false;
      
  
    }
    
  }

}
