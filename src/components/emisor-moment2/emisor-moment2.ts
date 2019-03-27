import { Component, ViewChild, Input, ElementRef } from '@angular/core';
import { Moment2Model } from "../../model/moment2.model";

import { TripModel } from "../../model/trip.model";
import { DestinationModel } from "../../model/destination.model";
import { AppService } from '../../services/app.service';
import { NightModel } from "../../model/night.model";
import { EventEmiterService } from '../../services/app.event.emitter.service';
import { Moment1PersonModel } from '../../model/moment1Person.model';
import { AppValidations } from '../../app/app.validations';
import { AlertController } from 'ionic-angular';
import { AppConfigurations } from '../../app/app.configuration';
import { ToastController } from 'ionic-angular';
/**
 * 
 * Generated class for the EmisorMoment2Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'emisor-moment2',
  templateUrl: 'emisor-moment2.html'
})
export class EmisorMoment2Component {
  mainNameApp: string;
  appConfig: AppConfigurations;
  @ViewChild("container") container: ElementRef;
  valueTripExpenses7: boolean;
  valueTripExpenses6: boolean;
  valueTripExpenses5: boolean;
  valueTripExpenses4: boolean;
  valueTripExpenses3: boolean;
  valueTripExpenses2: boolean;
  valueTripExpenses: boolean;
  costTripAB: boolean;
  costTripAL: boolean;
  costTripCOM: boolean;
  costTripTTA: boolean;
  costTripTAN: boolean;
  costTripTTI: boolean;
  costTripTAI: boolean;
  costTripTEI: boolean;
  valueproductsPlan3: boolean;
  valueproductsPlan2: boolean;
  valueproductsPlan12: boolean;

  valueproductsPlan: boolean;
  showActivitiesAntioquiaSelect: boolean;
  flagWhichMainTransportUsed: boolean;
  flagwhichtransportUsed: boolean;
  flagDistanceTripOther: boolean;
  flagotherActivityInGeneral: boolean;
  flagSportOther: boolean;
  flagSport: boolean;
  flagMakePanelaOther: boolean;
  flagMakePanela: boolean;
  flagVisitZooOther: boolean;
  flagVisitZoo: boolean;
  flagAntioquiaActivitiesPark: boolean;
  public flagAntioquiaActivitiesOtherMuseum: Boolean;
  public flagAntioquiaActivities: Boolean;

  @ViewChild('compartiendoGastos') compartiendoGastos;
  public moment2: Moment2Model;
  public data;
  public depts=[];
  public cities=[];
  public flagNightDay:Boolean;
  private tempDept:number;
  private tempCity:number;
  public featuresDestiny:Boolean;
  public wantEmailAntioquia:Boolean;
  public wantSocialRed:Boolean;
  public afterTripShare:Boolean;
  public whichWay:Boolean;
  public beforeTravel:Boolean;
  public whoPaySpend:Boolean;
  tripTouristPack: boolean;
  howMuchPay: boolean;
  productsPlanCT: boolean;
  productsPlanCTu: boolean;

  productsPlanACO: boolean;
  productsPlanAC: boolean;
  costTripOthers: boolean;
  costTripSM: boolean;
  costTripCT: boolean;
  costTripACO: boolean;
  costTripBI: boolean;
  costTripOV: boolean;
  costTripAR: boolean;
  costTripAC: boolean;
  costTripVA: boolean;
  costTripTTN: boolean;
  costTrip2Others: boolean;
  costTrip2SM: boolean;
  costTrip2CT: boolean;
  costTrip2ACO: boolean;
  costTrip2BI: boolean;
  costTrip2OV: boolean;
  costTrip2AR: boolean;
  costTrip2AC: boolean;
  costTrip2VA: boolean;
  costTrip2TTN: boolean;
  dateNow: string;
  getTime: string;
  numNight:number=-1;
  mainNameDestination:DestinationModel=new DestinationModel();
  lPersons:Moment1PersonModel[]=[];
  namePersonMoment1:string='';
  insideAntioquia:boolean=false;
  outsideAntioquia:boolean=false;
  insideOusideAntioquia:boolean=false;
  tripUser:TripModel=new TripModel();
  @Input() datas;

 
  constructor(private  _service:AppService,private _eventEmiter:EventEmiterService,private alertCtrl: AlertController, private validations:AppValidations, private toastCtrl: ToastController) {
    this.dateNow = new Date().getHours()+":"+new Date().getMinutes();
    this.moment2=new Moment2Model();
    this._service.getService('cities.json').subscribe(
      (response) => {  
        this.data=response.data;
      });
    this.moment2.lNights=[];
    this._eventEmiter.eventPersonMoment.subscribe((lPersons:Moment1PersonModel[])=>{
      this.lPersons=lPersons;
    });
    this.appConfig=new AppConfigurations();
    this.mainNameApp=this.appConfig.mainNameApp;
  }

  public addDestination(list:DestinationModel[])
  {
    let destination=new DestinationModel();
    list.push(destination);
  }

  public removeDestination(list:DestinationModel[])
  {
    list.splice(-1,1);
   
  }
  

  public renderTrips()
  {
    this.moment2.lTrips=[];
    for(let i=0;i<this.moment2.trips;i++)
    {
      let ele=new TripModel();
      this.moment2.lTrips.push(ele);
    }
  }

  public onChangeCountry(num,event,destination)
  {
    this.depts[num]=this.data.countries.find(x => x.id == event).states;
    this.tempDept=num;
    let name=this.data.countries.find(x => x.id == event).name;
    destination.countryName=name;
  }

  public onChangeDept(num,event,destination)
  {
    
    if(event==="54")
    {
      this.insideAntioquia=true;
      this.showActivitiesAntioquiaSelect=true;
      
    }
    if(event!=="54")
    {
      this.outsideAntioquia=true;
      console.log('Fuera de Antioquia');
    }
    if(this.insideAntioquia && this.outsideAntioquia)
    {
      this.insideOusideAntioquia=true;
      console.log("Se puede mostrar bloques de Antioquia dentro y fuera");
    }
    this.cities[num]=this.depts[this.tempDept].find(x => parseInt(x.id) == parseInt(event)).cities;
    this.tempCity=num;
    let name=this.depts[this.tempDept].find(x => parseInt(x.id) == parseInt(event)).name;
    destination.stateName=name;
  }

  public getNameCity(num,event,destination)
  {
    let name=this.cities[num].find(x => parseInt(x.id) == parseInt(event)).name;
    destination.cityName=name;
  }
  si:boolean = false;
  public isMainDestination(event,destination,trip,a,i)
  {
    var b = a+1;
    var element = document.getElementById("viaje_"+b);
    var total_hijos = element.children[0].childElementCount;

   
 
    for(let j = 4;j+8 <= total_hijos; j++){
      let c = j-4; 
        this.moment2.lTrips[a]['lDestination'][c]['mainDestination'] = "no";
     }
     if(event=="si"){
        this.moment2.lTrips[a]['lDestination'][i]['mainDestination'] = "si";
     }
     console.log(this.moment2.lTrips[0]['lDestination']);
    
    if(event=="si")
    {
      this.mainNameDestination=destination;
      //destination.mainDestiny="si";
      if(trip.totalnights>0)
      {
        this.flagNightDay=true;
      }
      else
      {
        this.flagNightDay=false;
      }
    }
  }

  public showWhoAreThem(trip:TripModel)
  {
    if(trip.people_id.indexOf("110")>=0)
    {
      trip.flagHowManyShare=true;
    }
    else
    {
      trip.flagHowManyShare=false;
    }
    if(trip.people_id.indexOf("111")>=0)
    {
      trip.flagHowManyShareNo=true;
    }
    else
    {
      trip.flagHowManyShareNo=false;
    }
    if(trip.people_id.indexOf("112")>=0)
    {
      trip.flagHowManyShareNoHome=true;
    }
    else
    {
      trip.flagHowManyShareNoHome=false;
    }
    if(trip.people_id.indexOf("113")>=0)
    {
      trip.flagHowManyShareNoHomeNo=true;
    }
    else
    {
      trip.flagHowManyShareNoHomeNo=false;
    }
    if(trip.people_id.indexOf("114")>=0)
    {
      trip.flagTouristHome=true;
    }
    else
    {
      trip.flagTouristHome=false;
    }
  }

  public calculateNight(trip:TripModel)
  {
    var oneDay = 24*60*60*1000; 
    var firstDate = new Date(trip.trip_start);
    var secondDate = new Date(trip.trip_finish);
    trip.totalnights = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay)));

  }

  public showActivitiesAntioquia()
  {
    if(this.moment2.activitiesnortesantander_id.indexOf("137")>=0)
    {
      this.flagAntioquiaActivities=true;
    }
    else
    {
      this.flagAntioquiaActivities=false;
    }
    if(this.moment2.activitiesnortesantander_id.indexOf("148")>=0)
    {
      this.flagVisitZoo=true;
    }
    else
    {
      this.flagVisitZoo=false;
    }
    if(this.moment2.activitiesnortesantander_id.indexOf("152")>=0)
    {
      this.flagSport=true;
    }
    else
    {
      this.flagSport=false;
    }
     if(this.moment2.activitiesnortesantander_id.indexOf("40")>=0)
    {
      this.flagotherActivityInGeneral=true;
    }
    else
    {
      this.flagotherActivityInGeneral=false;
    }    
    
  }

  public showDistanceTripOther()
  {
    if(this.moment2.transport_id.indexOf("40")>=0)
    {
      this.flagDistanceTripOther=true
    }
    else
    {
      this.flagDistanceTripOther=false
    }
  }

  public showMainTransportUsed()
  {
    if(this.moment2.mainTransportUsed.indexOf("40")>=0)
    {
      this.flagWhichMainTransportUsed=true
    }
    else
    {
      this.flagWhichMainTransportUsed=false
    }
  }

  public showWhichtransportUsed()
  {
    if(this.moment2.transportUsed.indexOf("40")>=0)
    {
      this.flagwhichtransportUsed=true
    }
    else
    {
      this.flagwhichtransportUsed=false
    }
  }
  

  public showSportOther()
  {
    if(this.moment2.sports_id.indexOf("40")>=0)
    {
      this.flagSportOther=true
    }
    else
    {
      this.flagSportOther=false
    }
  }

  public showMakePanela()
  {
    if(this.moment2.makePanela=="40")
    {
      this.flagMakePanelaOther=true
    }
    else
    {
      this.flagMakePanelaOther=false
    }
  }

  public showVisitZooOther()
  {
    if(this.moment2.naturalparks_id.indexOf("40")>=0)
    {
      this.flagVisitZooOther=true
    }
    else
    {
      this.flagVisitZooOther=false
    }
    
  }

  public showOtherTypeNight(night:NightModel)
  {
    if(night.accommodationtype_id.indexOf("40")>=0)
    {
      night.flagNight=true;
    }
    else
    {
      night.flagNight=false;
    }    
  }

  public showNightDays()
  {
    if(this.moment2.totalnights>0)
    {
      this.flagNightDay=true;
    }
    else
    {
      this.flagNightDay=false;
    }
  }

  public showActivitiesAntioquiaMuseumOther()
  {
    if(this.moment2.activitiesmuseum_id.indexOf("40")>=0)
    {
      this.flagAntioquiaActivitiesOtherMuseum=true;
    }
    else
    {
      this.flagAntioquiaActivitiesOtherMuseum=false;
    }

  }

  public tripSelectedByUser(event)
  {
    this.tripUser=this.moment2.lTrips[event];
    this.moment2.lNights=[];
    for(let i in this.tripUser.lDestination)
    {
      let destination = this.tripUser.lDestination[i];
      let night=new NightModel();
      night.countryName=destination.countryName;
      night.stateName=destination.stateName;
      night.cityName=destination.cityName;
      this.moment2.lNights.push(night);
      if(destination.mainDestiny=="si")
      {
        this.mainNameDestination=destination;
        if(this.tripUser.totalnights>0)
        {
          this.flagNightDay=true;
        }
        else
        {
          this.flagNightDay=false;
        }
      }
    }
  }

  public showMainMotivation(trip:TripModel)
  {
    if(trip.trip_motives_id=="84")
    {
      trip.flagLongStop=true;
    }
    else
    {
      trip.flagLongStop=false;
    }

    if(trip.trip_motives_id=="86")
    {
      trip.flagHealth=true;
    }
    else
    {
      trip.flagHealth=false;
    }
    if(trip.trip_motives_id=="40")
    {
      trip.flagOtherMotivation=true;
    }
    else{
      trip.flagOtherMotivation=false;
    }
  }

  public showTourist(trip:TripModel)
  {
    if(trip.peopletravel>1)
    {
      trip.flagTourist=true;
    }
    else
    {
      trip.flagTourist=false;
    }
  }

  public showTouristShare(trip:TripModel)
  {
    if(trip.unknown=="si")
    {
      trip.flagTouristShare=true;
    }
    else
    {
      trip.flagTouristShare=false;
    }
  }

  public featuresDestinyChange()
   {
    if(this.moment2.featuresDestiny.indexOf(40)>=0)
     {
       this.featuresDestiny=true;
     }
    else
     {
       this.featuresDestiny=false;
     }
   }

   public wantEmailAntioquiaChange()
   {
    if(this.moment2.E4_newslettersub=="si")
     {
       this.wantEmailAntioquia=true;
     }
    else
     {
       this.wantEmailAntioquia=false;
     }
   }

   public wantSocialRedChange()
   {
    if(this.moment2.E5_newslettersub=="si")
     {
       this.wantSocialRed=true;
     }
    else
     {
       this.wantSocialRed=false;
     }
   }

   public afterTripShareChange()
   {
    if(this.moment2.aftertravel_id.indexOf("40")>=0)
     {
       this.afterTripShare=true;
     }
    else
     {
       this.afterTripShare=false;
     }
   }

   public whichWayChange()
   {
    if(this.moment2.duringtravel_id.indexOf("40")>=0)
     {
       this.whichWay=true;
     }
    else
     {
       this.whichWay=false;
     }
   }

  public beforeTravelChange()
   {
    if(this.moment2.beforetravel_id.indexOf("40")>=0)
     {
       this.beforeTravel=true;
     }
    else
     {
       this.beforeTravel=false;
     }
   }
  public whoPaySpendChange()
   {
    if(this.moment2.expensesgroup_id.indexOf("40")>=0)
     {
       this.whoPaySpend=true;
     }
    else
     {
       this.whoPaySpend=false;
     }
   }

  public costTripPackage2Change()
   {
     this.valueTripExpenses = false;
     this.valueTripExpenses2 = false;
     this.valueTripExpenses3 = false;
     this.valueTripExpenses4 = false;
     this.valueTripExpenses5 = false;
     this.valueTripExpenses6 = false;
     this.valueTripExpenses7 = false;
    //  momentanea
    //  this.insideOusideAntioquia = true;
     
    if(this.moment2.notpayexpenses_id.indexOf("322")>=0)
     {
       this.costTrip2TTN=true;
     }
    else
     {
       this.costTrip2TTN=false;
     }
     if(this.moment2.notpayexpenses_id.indexOf("324")>=0 && this.insideOusideAntioquia)
     {
       this.costTrip2VA=true;
     }
    else
     {
       this.costTrip2VA=false;
     }
     
     if(this.moment2.notpayexpenses_id.indexOf("328")>=0 && this.insideOusideAntioquia)
     {
       this.costTrip2AC=true;
     }
    else
     {
       this.costTrip2AC=false;
     }

     if(this.moment2.notpayexpenses_id.indexOf("329")>=0 && this.insideOusideAntioquia)
     {
       this.costTrip2AR=true;
     }
    else
     {
       this.costTrip2AR=false;
     }

     if(this.moment2.notpayexpenses_id.indexOf("330")>=0 && this.insideOusideAntioquia)
     {
       this.costTrip2OV=true;
     }
    else
     {
       this.costTrip2OV=false;
     }
     
     if(this.moment2.notpayexpenses_id.indexOf("331")>=0 && this.insideOusideAntioquia)
     {
       this.costTrip2BI=true;
     }
    else
     {
       this.costTrip2BI=false;
     }

     if(this.moment2.notpayexpenses_id.indexOf("332")>=0 && this.insideOusideAntioquia)
     {
       this.costTrip2ACO=true;
     }
    else
     {
       this.costTrip2ACO=false;
     }

     if(this.moment2.notpayexpenses_id.indexOf("334")>=0 && this.insideOusideAntioquia)
     {
       this.costTrip2CT=true;
     }
    else
     {
       this.costTrip2CT=false;
     }

     if(this.moment2.notpayexpenses_id.indexOf("335")>=0 && this.insideOusideAntioquia)
     {
       this.costTrip2SM=true;
     }
    else
     {
       this.costTrip2SM=false;
     }

     if(this.moment2.notpayexpenses_id.indexOf("40")>=0)
     {
       this.costTrip2Others=true;
     }
    else
     {
       this.costTrip2Others=false;
     }
   }

   public costTripPackageChange()
   {
    if(this.moment2.outsidepackage_id.indexOf("318")>=0)
    {
      this.costTripTEI=true;
    }
   else
    {
      this.costTripTEI=false;
    }
    if(this.moment2.outsidepackage_id.indexOf("319")>=0)
    {
      this.costTripTAI=true;
    }
   else
    {
      this.costTripTAI=false;
    }
    if(this.moment2.outsidepackage_id.indexOf("320")>=0)
    {
      this.costTripTTI=true;
    }
   else
    {
      this.costTripTTI=false;
    }
    if(this.moment2.outsidepackage_id.indexOf("321")>=0)
    {
      this.costTripTAN=true;
    }
   else
    {
      this.costTripTAN=false;
    }
    if(this.moment2.outsidepackage_id.indexOf("323")>=0)
    {
      this.costTripTTA=true;
    }
   else
    {
      this.costTripTTA=false;
    }
    if(this.moment2.outsidepackage_id.indexOf("325")>=0)
    {
      this.costTripCOM=true;
    }
   else
    {
      this.costTripCOM=false;
    }
    if(this.moment2.outsidepackage_id.indexOf("326")>=0)
    {
      this.costTripAL=true;
    }
   else
    {
      this.costTripAL=false;
    }
    if(this.moment2.outsidepackage_id.indexOf("327")>=0)
    {
      this.costTripAB=true;
    }
   else
    {
      this.costTripAB=false;
    }

    

    if(this.moment2.outsidepackage_id.indexOf("322")>=0)
     {
       this.costTripTTN=true;
     }
    else
     {
       this.costTripTTN=false;
     }
     if(this.moment2.outsidepackage_id.indexOf("324")>=0)
     {
       this.costTripVA=true;
     }
    else
     {
       this.costTripVA=false;
     }
     
     if(this.moment2.outsidepackage_id.indexOf("328")>=0)
     {
       this.costTripAC=true;
     }
    else
     {
       this.costTripAC=false;
     }

     if(this.moment2.outsidepackage_id.indexOf("329")>=0)
     {
       this.costTripAR=true;
     }
    else
     {
       this.costTripAR=false;
     }

     if(this.moment2.outsidepackage_id.indexOf("330")>=0)
     {
       this.costTripOV=true;
     }
    else
     {
       this.costTripOV=false;
     }
     
     if(this.moment2.outsidepackage_id.indexOf("331")>=0)
     {
       this.costTripBI=true;
     }
    else
     {
       this.costTripBI=false;
     }

     if(this.moment2.outsidepackage_id.indexOf("332")>=0)
     {
       this.costTripACO=true;
     }
    else
     {
       this.costTripACO=false;
     }

     if(this.moment2.outsidepackage_id.indexOf("334")>=0)
     {
       this.costTripCT=true;
     }
    else
     {
       this.costTripCT=false;
     }

     if(this.moment2.outsidepackage_id.indexOf("335")>=0)
     {
       this.costTripSM=true;
     }
    else
     {
       this.costTripSM=false;
     }

     if(this.moment2.outsidepackage_id.indexOf("40")>=0)
     {
       this.costTripOthers=true;
     }
    else
     {
       this.costTripOthers=false;
     }
   }

   public validateValuesproductsPlan1(){
    let valor1 = parseInt(this.moment2.sport_in)
    let valor2 = parseInt(this.moment2.sport_out);
    let total = valor1+valor2;
    
    if(total > 100){
      this.valueproductsPlan = true;
    } else {
      this.valueproductsPlan = false;
    }
   }
   public validateValuesproductsPlan12(){
    let valor1 = parseInt(this.moment2.rcd_in)
    let valor2 = parseInt(this.moment2.rcd_out);
    let total = valor1+valor2;
    
    if(total > 100){
      this.valueproductsPlan12 = true;
    } else {
      this.valueproductsPlan12 = false;
    }
   }


   public validateValuesproductsPlan2(){
    let valor1 = parseInt(this.moment2.conferences_in)
    let valor2 = parseInt(this.moment2.conferences_out);
    let total = valor1+valor2;
    
    if(total > 100){
      this.valueproductsPlan2 = true;
    } else {
      this.valueproductsPlan2 = false;
    }
   }

   public validateValuesproductsPlan3(){
    let valor1 = parseInt(this.moment2.courses_in)
    let valor2 = parseInt(this.moment2.courses_out);
    let total = valor1+valor2;
    
    if(total > 100){
      this.valueproductsPlan3 = true;
    } else {
      this.valueproductsPlan3 = false;
    }
   }

   public validateExpensesValues(){
    let valor1 = parseInt(this.moment2.costTrip2ACD)
    let valor2 = parseInt(this.moment2.costTrip2ACF);
    let total = valor1+valor2;
    if(total > 100){
      this.valueTripExpenses = true;
    } else {
      this.valueTripExpenses = false;
    }
   }

   public validateExpensesValue2(){
    let valor1 = parseInt(this.moment2.arr_in)
    let valor2 = parseInt(this.moment2.arr_out);
    let total = valor1+valor2;
    if(total > 100){
      
      this.valueTripExpenses2 = true;
    } else {
      this.valueTripExpenses2 = false;
    }
   }

   public validateExpensesValue3(){
    let valor1 = parseInt(this.moment2.ovj_in)
    let valor2 = parseInt(this.moment2.ovj_out);
    let total = valor1+valor2;
    if(total > 100){
      this.valueTripExpenses3 = true;
    } else {
      this.valueTripExpenses3 = false;
    }
   }

   public validateExpensesValue4(){
    let valor1 = parseInt(this.moment2.bdc_in)
    let valor2 = parseInt(this.moment2.bdc_out);
    let total = valor1+valor2;
    if(total > 100){
      this.valueTripExpenses4 = true;
    } else {
      this.valueTripExpenses4 = false;
    }
   }

   public validateExpensesValue5(){
    let valor1 = parseInt(this.moment2.csf_in)
    let valor2 = parseInt(this.moment2.csf_out);
    let total = valor1+valor2;
    if(total > 100){
      this.valueTripExpenses5 = true;
      
    } else {
      this.valueTripExpenses5 = false;
    }
   }

   public validateExpensesValue6(){
    let valor1 = parseInt(this.moment2.bdc_out)
    let valor2 = parseInt(this.moment2.cte_out);
    let total = valor1+valor2;
    if(total > 100){
      this.valueTripExpenses6 = true;
    } else {
      this.valueTripExpenses6 = false;
    }
   }

   public validateExpensesValue7(){
    let valor1 = parseInt(this.moment2.sm_in)
    let valor2 = parseInt(this.moment2.sm_out);
    let total = valor1+valor2;
    if(total > 100){
      this.valueTripExpenses7 = true;
    } else {
      this.valueTripExpenses7 = false;
    }
   }

   public productsPlanChange()
   {
    this.valueproductsPlan = false;
    this.valueproductsPlan2 = false;
    this.valueproductsPlan3 = false;
    // momentaneo
    //this.insideOusideAntioquia = true;
    if(this.moment2.packservices_id.indexOf("238")>=0 && this.insideOusideAntioquia)
     {
       this.productsPlanAC=true;
     }
    else
     {
       this.productsPlanAC=false;
     }
     if(this.moment2.packservices_id.indexOf("239")>=0 && this.insideOusideAntioquia)
     {
       this.productsPlanACO=true;
     }
    else
     {
       this.productsPlanACO=false;
     }
     if(this.moment2.packservices_id.indexOf("240")>=0 && this.insideOusideAntioquia)
     {
      

       this.productsPlanCTu=true;

     }
    else
     {
       this.productsPlanCTu=false;
     }
     if(this.moment2.packservices_id.indexOf("40")>=0)
     {
       this.productsPlanCT=true;
     }
    else
     {
       this.productsPlanCT=false;
     }
   }

   public howMuchPayChange()
   {
    if(this.moment2.pay>0)
    {
      this.howMuchPay=true;
    }
   else
    {
      this.howMuchPay=false;
    }
   }

   public tripTouristPackChange(){
    if(this.moment2.package=="si")
    {
      this.tripTouristPack=true;
    }
   else
    {
      this.tripTouristPack=false;
    }
   }

  public acordeon($event,id) {
    
    let a = document.getElementsByClassName("acordeonMomento")[id];
    a.classList.toggle("showContent");
  }

  public save()
  {
    if(this.validations.validate(this.container))
    {
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
