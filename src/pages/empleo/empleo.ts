import { AppConfigurations } from "../../app/app.configuration";
import { AppValidations } from '../../app/app.validations';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { AppSaveForm } from '../../services/app.save.form.service';
import { EmpleoModel } from '../../model/empleo/empleo.model';
import { NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { StorageService } from "../../core/services/storage.service";


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
    this.empleo.A0 = this.storageService.user.data.user.fullname;
    this.appConfig=new AppConfigurations();
    this.mainNameApp=this.appConfig.mainNameApp;
  }

 
  ionViewDidLoad() {
    
    console.log('ionViewDidLoad EmpleoPage');
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
