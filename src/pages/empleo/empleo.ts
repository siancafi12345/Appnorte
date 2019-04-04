import { AppConfigurations } from "../../app/app.configuration";
import { AppValidations } from '../../app/app.validations';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { AppSaveForm } from '../../services/app.save.form.service';
import { EmpleoModel } from '../../model/empleo/empleo.model';
import { EmpleadosModel } from '../../model/empleo/empleados.model';
import {VacantesModel } from '../../model/empleo/vacantes.model'
import { NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { StorageService } from "../../core/services/storage.service";
import { from } from "rxjs/observable/from";



/**
 * Generated class for the EmpleoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-empleo',
  templateUrl: 'empleo.html',
})
export class EmpleoPage {
  public mainNameApp: string;
  private appConfig:AppConfigurations;
  public empleo : EmpleoModel=new EmpleoModel();
  public templeados : EmpleadosModel=new EmpleadosModel();
  public vacantes: VacantesModel=new VacantesModel();

  @ViewChild("container") container: ElementRef;
 

  

  constructor(
    
    public navCtrl: NavController,
    private validations:AppValidations,
    private saveForm:AppSaveForm,
    private toastCtrl: ToastController,
    private alertCtrl: AlertController,
    private storageService: StorageService,
    public navParams: NavParams
    
    ) {
    this.empleo.dateStart = this.dateTime();
    this.empleo.otro_empleo=[];
    this.empleo.otravacantes=[];
    this.empleo.A0 = this.storageService.user.data.user.fullname;
    this.appConfig=new AppConfigurations();
    this.mainNameApp=this.appConfig.mainNameApp;
  }

 
  ionViewDidLoad() {
    
    console.log('ionViewDidLoad EmpleoPage');
  }

  public empleados(){
    this.empleo.employees=[];
    for(let i=0;i<this.empleo.amount_employees;i++)
    {
      let ele=new EmpleadosModel();
      this.empleo.employees.push(ele);
    }

  }

  public otroempleados(){
      
      let ele=new EmpleadosModel();
      this.empleo.otro_empleo.push(ele);

  }
  public anterior(num){
    switch (num) {
      case 1:
        this.empleo.sigiente_1 = true;
      break;
      case 2:
        this.empleo.sigiente_2 = true;
      break;
      case 3:
          this.empleo.sigiente_3 = true;
        break;
    }
  }

  public sigiente1(num){
     if(this.validations.validate(this.container))
     {
      switch (num) {
        case 1:
          this.empleo.sigiente_1 = false;
          break;
        case 2:
          this.empleo.sigiente_2 = false;
          break;
        case 3:
          this.empleo.sigiente_3 = false;
          break;
        case 4:
          this.empleo.sigiente_4 = false;
          break;
        
      }
      
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

  public vacante(){
    this.empleo.vacantes=[];
      if(this.empleo.generatevacancies == "si"){
        let ele=new VacantesModel();
        this.empleo.vacantes.push(ele);
      }
  }
  public otrovacante(){
    let ele=new VacantesModel();
    this.empleo.otravacantes.push(ele);

}
  private dateTime(): string {
    const dateTime = new Date();
    return dateTime.toLocaleDateString() + ' ' + dateTime.toLocaleTimeString();
  }

 
  public save()
  {
    if(this.validations.validate(this.container))
    {
      var flag=this.saveForm.save(
        this.empleo,
        this.appConfig.form7.number,
        this.appConfig.form7.name);
      if(flag)
      {
        this.navCtrl.setRoot(EmpleoPage);
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
