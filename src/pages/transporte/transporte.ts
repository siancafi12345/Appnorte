import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../../core/services/user.service'
import { StorageService } from '../../core/services/storage.service';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { AppConfigurations } from "../../app/app.configuration";
import { TranporteModel } from '../../model/transporte/transporte.model';
import { AppSaveForm } from '../../services/app.save.form.service';
import { AppValidations } from '../../app/app.validations';
import * as moment from 'moment';
/**
 * Generated class for the TransportePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-transporte',
  templateUrl: 'transporte.html',
})
export class TransportePage {
  public dateStart:string= "" ;
  private transporte1 : FormGroup;
  public mainNameApp: string;
  private appConfig:AppConfigurations;

  private dateTime():string  {
    const dateTime = new Date();
    var a = dateTime.toString();
    var res = a.slice(15, 25);
    console.log(res);
    return res
    
  }
  @ViewChild("container") container: ElementRef;
  public transporte : TranporteModel;

  constructor( 
    
    private formBuilder: FormBuilder,
    private storageService: StorageService,
    private nav: NavController,
    public navCtrl: NavController, 
    public navParams: NavParams,
    private saveForm:AppSaveForm,
    private alertCtrl: AlertController,
    private validations:AppValidations,
    private toastCtrl: ToastController
    
    
    ) {
    this.dateStart = this.dateTime();
    this.appConfig=new AppConfigurations();
    this.mainNameApp=this.appConfig.mainNameApp;
    this.transporte =new TranporteModel();
    var now = moment();
    this.transporte.A0=this.storageService.user.data.user.fullname;
    this.transporte.datesurvey_start = moment(now.format(), moment.ISO_8601).format();
    this.transporte1 = this.formBuilder.group({
      nombre: [this.storageService.user.data.user.fullname],
      fechaencuesta: [this.dateTime()],
      name: this.transporte.name,

      
    });

    
  }
  
  // private dateTime(): string {
  //   const dateTime = new Date();
  //   return dateTime.toLocaleDateString() + ' ' + dateTime.toLocaleTimeString();
  // }
  logForm(){
    console.log(this.transporte1.value)
  }


  public save()
  {
    if(this.validations.validate(this.container))
    {
      var flag=this.saveForm.save(
        this.transporte,
        this.appConfig.form3.number,
        this.appConfig.form3.name);
      if(flag)
      {
        this.navCtrl.setRoot(TransportePage);
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
