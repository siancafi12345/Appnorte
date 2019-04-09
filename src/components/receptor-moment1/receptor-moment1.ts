import { Component, ViewChild, ElementRef } from '@angular/core';
import { ReceptorMomento1Model } from "../../model/receptor/receptor.momento1.model";
import { StorageService } from "../../core/services/storage.service";
import { AppService } from "../../services/app.service";
import { AlertController } from 'ionic-angular';
import { AppValidations } from "../../app/app.validations";
import { AppConfigurations } from "../../app/app.configuration";
//import { NavController } from 'ionic-angular';


import { EventEmiterService } from "../../services/app.event.emitter.service";
/**
 * Generated class for the ReceptorMoment1Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'receptor-moment1',
  templateUrl: 'receptor-moment1.html'
})

export class ReceptorMoment1Component {
  
  public flagWhoIsGoingToBirth: boolean=false;
  public flagShowMomento1: boolean=false;
  public flagMomento2:boolean=false;
  mainNameApp:string;
  private appConfig:AppConfigurations
  flagA15_1: boolean = false;
  flagothermotives: boolean = false;
  flaghealth_id: boolean = false;
  flagtimestop: boolean = false;
  continuar: boolean = false;
  continuar1: boolean = true;
  guardar: boolean = false;
  ciudad: boolean = false;
  ciudadn: boolean = true;
  edadb: boolean = false;
  personal: boolean = false;
  profecional: boolean = false;
   
  

  @ViewChild("container") container: ElementRef;
  momento1:ReceptorMomento1Model=new ReceptorMomento1Model();
  public data=[];
  public depts=[];
  public cities=[];
  constructor(private validations:AppValidations,
   
    private alertCtrl: AlertController,
    private storageService: StorageService,
    private  _service:AppService,
    private _eventEmitter:EventEmiterService) {
    this.appConfig=new AppConfigurations();
    this.mainNameApp=this.appConfig.mainNameApp;
    this.momento1.A0=this.storageService.user.data.user.fullname;
    
    this.momento1.dateStart=this.dateTime();
    this._service.getService('cities.json').subscribe(
      (response) => {  
        this.data=response.data;
    });
  }

linpiar(){
  localStorage.diferencia = "";
    localStorage.total = "";
}

  private dateTime(): string {
    this.linpiar();
    const dateTime = new Date();
    
    return dateTime.toLocaleDateString() + ' ' + dateTime.toLocaleTimeString();

    //return dateTime.toLocaleTimeString();
  }

  public paso2()
  {
    if(this.validations.validate(this.container))
    {
      var total = parseInt(this.momento1.ps2)+parseInt(this.momento1.ps1)+parseInt(this.momento1.ps3)+parseInt(this.momento1.ps4)+parseInt(this.momento1.ps5);
      
     
      if(total != 0){
        var cantidad = parseInt(this.momento1.ps3);
        
        if( cantidad > 0){
          
          this.continuar = false;
          this.continuar1 = false;
          this.flagShowMomento1=true;
          this.guardar = true;

        }else{
          this.flagShowMomento1=false;
          this.guardar = true;
          this.continuar = true;
          this.continuar1 = false;
        }
      }else{
        this.flagShowMomento1=false;
        this.continuar = true;
        this.continuar1 = false;
        this.guardar = true;


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
  public save()
  {
    localStorage.diferencia = "";
    localStorage.total = "";
    if(this.validations.validate(this.container))
    {
      this._eventEmitter.sendReceptorSave(true);
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

  public sumTotal(){
    
  

    this.momento1.sumTotal=parseInt(this.momento1.ps2)+parseInt(this.momento1.ps1)+parseInt(this.momento1.ps3)+parseInt(this.momento1.ps4)+parseInt(this.momento1.ps5);

    localStorage.total = this.momento1.sumTotal;
    localStorage.setItem('total2', JSON.stringify(this.momento1.sumTotal));
    if(parseInt(this.momento1.ps3)>0)
    {
      this.flagWhoIsGoingToBirth=true;
    }
    else{
      this.flagWhoIsGoingToBirth=false;
    }
  }
  public onChangeCountry(event){
    this.depts=this.data['countries'].find(x => x.id == event).states;
    
  }
  public validateMomento2()
  {
   if(this.momento1.realdepartment_id!='05'&& 
      this.is365Less() && 
    (this.momento1.trip_motives.indexOf("16")==-1 && this.momento1.trip_motives.indexOf("17")==-1) &&
    parseInt(this.momento1.age)>=15 &&
    (this.momento1.trip_motives.indexOf("3")==-1 || (this.momento1.trip_motives.indexOf("3")>=0 && parseInt(this.momento1.timestop)>=5)))
    {
      this.flagMomento2=true;
    }
    else
    {
      this.flagMomento2=false;
    }
    
    
  }
  public onChangeDept(event){
    this.cities=this.depts.find(x => parseInt(x.id) == parseInt(event)).cities;
    
    if(this.cities.length > 0){
      this.ciudad  = false;
      this.ciudadn = true;
      this.momento1.city_other = "";
    }else{
      this.ciudad  = true;
      this.ciudadn = false;
    }
    this.validateMomento2();
  }

  public edad(){
    let edad =parseInt(this.momento1.age);
    if( edad<= 15 || edad > 99){
        this.edadb = true;
    }else{
      this.edadb = false;
        
    }
  }

  correo(){
    var element = document.getElementById("correo");
    var className = " " + element + " ";
    if ( (" " + element.className + " ").replace(/[\n\t]/g, " ").indexOf("ng-invalid") > -1 ){
      
      document.getElementById("correo").style.backgroundColor="red";


      var element = document.getElementById("celular");
      element.classList.add("requiredInput");
      document.getElementById("celular").style.backgroundColor="red";
      
      var element = document.getElementById("telefono");
      element.classList.add("requiredInput"); 
      document.getElementById("telefono").style.backgroundColor="red";

    }else{
      document.getElementById("correo").style.backgroundColor="white";
      document.getElementById("correo").style.color="black";


      var element = document.getElementById("celular");
      element.classList.remove("requiredInput");
      document.getElementById("celular").style.backgroundColor="white";
      
      var element = document.getElementById("telefono");
      element.classList.remove("requiredInput");
      document.getElementById("telefono").style.backgroundColor="white";

    }
  }
public telefono(val){
  let telefono = this.momento1.phone_number.length;
  var element = document.getElementById("correo");
   element.classList.remove("requiredInput");
   document.getElementById("correo").style.backgroundColor="white";


   var element = document.getElementById("celular");
   element.classList.remove("requiredInput");
   document.getElementById("celular").style.backgroundColor="white";



  if(val = 7 && telefono > val){
    this.momento1.phone_number = "";
    this.momento1.tel = true;
    
  }else{
    this.momento1.tel = false;


  }
  
}
public motivos(val){

  if(this.momento1.motivo == "0"){
    this.personal = true;
    this.profecional = false;
  }else if(this.momento1.motivo == "1"){
    this.personal = false;
    this.profecional = true;
  }else{
    this.personal = false;
    this.profecional = false;
  }

}
public celular(val){
 

  var element = document.getElementById("correo");
   element.classList.remove("requiredInput");

   document.getElementById("correo").style.backgroundColor="white";


   var element = document.getElementById("telefono");
   element.classList.remove("requiredInput");

   document.getElementById("telefono").style.backgroundColor="white";

  
   
   



  let celular = this.momento1.cell_phone.length;
    
  if(val = 10 && celular > val){
    this.momento1.cel = true;
    this.momento1.cell_phone = "";
  }else{
    this.momento1.cel = false;
  }
  
}

  public showtrip_motives(event){
    this.validateMomento2();
  
    if(this.momento1.trip_motives.indexOf("84")>=0)
    {
      this.flagtimestop=true;
    }
    else
    {
      this.flagtimestop=false;
    }

    if(this.momento1.trip_motives.indexOf("86")>=0)
    {
      this.flaghealth_id=true;
    }
    else
    {
      this.flaghealth_id=false;
    }

    if(this.momento1.trip_motives.indexOf("40")>=0)
    {
      this.flagothermotives=true;
    }
    else
    {
      this.flagothermotives=false;
    }
  }


  public is365Less()
  {
    var flag=false;
    var oneDay = 24*60*60*1000; 
    var firstDate = new Date(this.momento1.arrivaldate);
    var secondDate = new Date(this.momento1.departuredate);
    var days = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay)));
    localStorage.diferencia = days;
    
    if(days<=365)
    {
      flag= true;
    }
    return flag;

  }

  public next()
  {
    
    this.momento1.diferencia = localStorage.diferencia;
    
    this.validations.validate(this.container);
    this._eventEmitter.sendReceptorMomento1(false);
    this._eventEmitter.sendReceptorMomento2(true);
  }

  public validatefrequency_id()
  {
    if(this.momento1.frequency_id=='107'){
      localStorage.cuantos_viajes = "1";
      
    }else{
      localStorage.cuantos_viajes = "2";

    }
    if(this.momento1.frequency_id=='107' || this.momento1.frequency_id=='106')
    {
      this.flagMomento2=true;
    }
    else
    {
      this.flagMomento2=false;
    }
  }
}
