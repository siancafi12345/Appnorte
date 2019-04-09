import { Component, ViewChild, ElementRef, ɵConsole } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { AppConfigurations } from "../../app/app.configuration";
import { AppService } from "../../services/app.service";
import { AppValidations } from "../../app/app.validations";
import { EventEmiterService } from "../../services/app.event.emitter.service";
import { ReceptorMomento2Model } from "../../model/receptor/receptor.momento2.model";
import { ReceptorMomento1Model } from "../../model/receptor/receptor.momento1.model";
import { ReceptorB3Model } from "../../model/receptor/receptor.b3.model";
import { ReceptorE5Model } from "../../model/receptor/receptor.e5.model";


/**
 * Generated class for the ReceptorMoment2Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'receptor-moment2',
  templateUrl: 'receptor-moment2.html'
})
export class ReceptorMoment2Component {
  public flagH6_otro: boolean=false;
  public flagH7_otro: boolean=false;
  public flagH4_otro: boolean = false;
  public flagH5_otro: boolean = false;
  public flagG5_otro: boolean = false;
  public flagG4_email: boolean=false;
  public flagG1_otro: boolean = false;
  public flagG2_otro: boolean=false;
  public flagG3_otro: boolean=false;
  public flagF2_8: boolean = false;
  public flagF1_1: boolean = false;
  public flagE10_otro: boolean = false;
  public flagE9: boolean = false;
  public flagE8: boolean=false;
  public flagE7: boolean = false;
  public flagE6_otro: boolean = false;
  public flagNinguna: boolean = false;
  public flagE4_otro: boolean = false;
  public flagE3_1: boolean = false;
  public flagE2_1: boolean = false;
  public flagE1_1_otro: boolean = false;
  public flagE1_E4: boolean = false;
  public flagD2: boolean = false;
  public flagD2_otro: boolean = false;
  public flagD2_8_1: boolean = false;
  public flagC2_otro: boolean = false;
  public flagC1_otro: boolean = false;
  public flagB5_otro: boolean = false;
  public flagB5_10_1_otro: boolean = false;
  public flagB5_10_1: boolean = false;
  public flagB5_8_1_otro: boolean = false;
  public flagB5_8_1: boolean = false;
  public flagB5_6_1_otro: boolean = false;
  public flagB5_6_1: boolean = false;
  public flagB5_5_1: boolean = false;
  public flagB5_4_1_otro: boolean = false;
  public flagB5_4_1: boolean = false;
  public transporte_terrestre: boolean = false;  
  public mainNameApp: string;
  private appConfig:AppConfigurations;
  public momento2:ReceptorMomento2Model=new ReceptorMomento2Model();
  public momento1:ReceptorMomento1Model=new ReceptorMomento1Model();
  public total:string = localStorage.total; 
  public data;
  public depts=[];
  public cities=[];
  private tempDept:number;
  private alojamiento:boolean=false;
  private ciudadad_oter:boolean=false;
  private numerop:boolean=false;
  local = "";
  tviaje="";
  private tempCity:number;
  private diferncia:string = this.momento1.diferencia;
  public lB3:ReceptorB3Model[]=[];
 
  
  public E5Json=
  {
     "data":[
       {"id":"649","name":"Actividades recreativas, culturales y deportivas"},
       {"id":"648","name":"Alimentos y bebidas"},
       {"id":"647","name":"Alojamiento"},
       {"id":"645","name":"Alquiler de vehículo"},
       {"id":"650","name":"Artesanías (incluye ropa y/o calzado artesanal), recuerdos"},
       {"id":"653","name":"Asistencia a conferencias, seminarios, congresos, ferias comerciales y exposiciones"},
       {"id":"652","name":"Bienes de consumo duradero (Ropa, calzado, implementos deportivos, etc)"},
       {"id":"646","name":"Combustible"},
       {"id":"654","name":"Cursos/talleres de enseñanza"},
       {"id":"640","name":"No realicé ningún tipo de gasto"},
       {"id":"651","name":"Objetos valiosos (Joyas, obras de arte)"},
       {"id":"655","name":"Servicios médicos (Incluye la cirugía estética)"},
       {"id":"642","name":"Transporte aéreo desde una ciudad de Colombia a Norte de Santander(Incluye ida-vuelta)"},
       {"id":"641","name":"Transporte aéreo internacional (Incluye ida-vuelta)"},
       {"id":"643","name":"Transporte terrestre de pasajeros desde una ciudad de Colombia a Norte de Santander (Incluye ida- vuelta)"},
       {"id":"644","name":"Transporte terrestre de pasajeros para movilizarse dentro de "+this.mainNameApp },
       {"id":"40","name":"Otros gastos"}
     ]
  };
  
  public B3_1Json={};
  @ViewChild("container") container: ElementRef;
  constructor(private alertCtrl: AlertController, private  _service:AppService, private validations:AppValidations, private _eventEmitter:EventEmiterService) {
    this.appConfig=new AppConfigurations();
    this.mainNameApp=this.appConfig.mainNameApp;
    
    this.momento2.dateEnd=this.dateTime();
    this._service.getService('cities.json').subscribe(
      (response) => {  
        this.data=response.data;
      });
      
    this.B3_1Json=
    {
      "cities": [
        {
            "id": 780,
            "name": "CÚCUTA",
            "realdepartment_id": "54"
        },
        {
            "id": 781,
            "name": "ÁBREGO",
            "realdepartment_id": "54"
        },
        {
            "id": 782,
            "name": "ARBOLEDAS",
            "realdepartment_id": "54"
        },
        {
            "id": 783,
            "name": "BOCHALEMA",
            "realdepartment_id": "54"
        },
        {
            "id": 784,
            "name": "BUCARASICA",
            "realdepartment_id": "54"
        },
        {
            "id": 785,
            "name": "CÁCOTA",
            "realdepartment_id": "54"
        },
        {
            "id": 786,
            "name": "CÁCHIRA",
            "realdepartment_id": "54"
        },
        {
            "id": 787,
            "name": "CHINÁCOTA",
            "realdepartment_id": "54"
        },
        {
            "id": 788,
            "name": "CHITAGÁ",
            "realdepartment_id": "54"
        },
        {
            "id": 789,
            "name": "CONVENCIÓN",
            "realdepartment_id": "54"
        },
        {
            "id": 790,
            "name": "CUCUTILLA",
            "realdepartment_id": "54"
        },
        {
            "id": 791,
            "name": "DURANIA",
            "realdepartment_id": "54"
        },
        {
            "id": 792,
            "name": "EL CARMEN",
            "realdepartment_id": "54"
        },
        {
            "id": 793,
            "name": "EL TARRA",
            "realdepartment_id": "54"
        },
        {
            "id": 794,
            "name": "EL ZULIA",
            "realdepartment_id": "54"
        },
        {
            "id": 795,
            "name": "GRAMALOTE",
            "realdepartment_id": "54"
        },
        {
            "id": 796,
            "name": "HACARÍ",
            "realdepartment_id": "54"
        },
        {
            "id": 797,
            "name": "HERRÁN",
            "realdepartment_id": "54"
        },
        {
            "id": 798,
            "name": "LABATECA",
            "realdepartment_id": "54"
        },
        {
            "id": 799,
            "name": "LA ESPERANZA",
            "realdepartment_id": "54"
        },
        {
            "id": 800,
            "name": "LA PLAYA",
            "realdepartment_id": "54"
        },
        {
            "id": 801,
            "name": "LOS PATIOS",
            "realdepartment_id": "54"
        },
        {
            "id": 802,
            "name": "LOURDES",
            "realdepartment_id": "54"
        },
        {
            "id": 803,
            "name": "MUTISCUA",
            "realdepartment_id": "54"
        },
        {
            "id": 804,
            "name": "OCAÑA",
            "realdepartment_id": "54"
        },
        {
            "id": 805,
            "name": "PAMPLONA",
            "realdepartment_id": "54"
        },
        {
            "id": 806,
            "name": "PAMPLONITA",
            "realdepartment_id": "54"
        },
        {
            "id": 807,
            "name": "PUERTO SANTANDER",
            "realdepartment_id": "54"
        },
        {
            "id": 808,
            "name": "RAGONVALIA",
            "realdepartment_id": "54"
        },
        {
            "id": 809,
            "name": "SALAZAR",
            "realdepartment_id": "54"
        },
        {
            "id": 810,
            "name": "SAN CALIXTO",
            "realdepartment_id": "54"
        },
        {
            "id": 811,
            "name": "SAN CAYETANO",
            "realdepartment_id": "54"
        },
        {
            "id": 812,
            "name": "SANTIAGO",
            "realdepartment_id": "54"
        },
        {
            "id": 813,
            "name": "SARDINATA",
            "realdepartment_id": "54"
        },
        {
            "id": 814,
            "name": "SILOS",
            "realdepartment_id": "54"
        },
        {
            "id": 815,
            "name": "TEORAMA",
            "realdepartment_id": "54"
        },
        {
            "id": 816,
            "name": "TIBÚ",
            "realdepartment_id": "54"
        },
        {
            "id": 817,
            "name": "TOLEDO",
            "realdepartment_id": "54"
        },
        {
            "id": 818,
            "name": "VILLA CARO",
            "realdepartment_id": "54"
        },
        {
            "id": 819,
            "name": "VILLA DEL ROSARIO",
            "realdepartment_id": "54"
        }
    ]
                    };
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
public ciudad_r(){
  // console.log(this.momento2.greaterexpense_id);

  if(this.momento2.greaterexpense_id.indexOf("678")>=0 || this.momento2.greaterexpense_id == "678")
  {
    this.ciudadad_oter = true;
  }else{
    this.ciudadad_oter = false;
  }
  
}
  private dateTime(): string {
    
    const dateTime = new Date();
    return dateTime.toLocaleTimeString();
  }

  numeropersonas(){
    

    let numero1 = parseInt(localStorage.total);
    let numero2 = parseInt(this.momento2.howmanypeople_travel);

    if(numero2 > numero1){
      
      this.numerop = true;
      this.momento2.howmanypeople_travel = "";
    }else{
      this.numerop = false;
     

    }

  }


  public createTrips()
  {
    
    this.local = localStorage.total;
    this.tviaje = localStorage.cuantos_viajes;

    this.momento2.how_many_nights = localStorage.diferencia;
    
    this.momento2.lB3=[];
    let num = parseInt(this.momento2.how_many_cities);
    for(let i=0;i<num;i++)
    {
      let ele=new ReceptorB3Model();
      this.momento2.lB3.push(ele);
    }
  }
public tipo_alojamiento(a, B3:ReceptorB3Model){
  
  for(let i = a; i >= 0; i--){
    var actual = this.momento2.lB3[i]['accommodation_id'];
    if(actual == "115" || actual == "127" || actual == "131" || actual == "125" || actual == "123" || actual == "122" || actual == "129" || actual == "130" || actual == "121"|| actual == "119" || actual == "120"){
      this.alojamiento = true;
    }else{
      this.alojamiento = false;

    }
    // console.log(this.momento2.lB3[i]['accommodation_id']);
  }
}
  public showB3_1_2_otro(B3:ReceptorB3Model){
    // console.log(B3);
    if(B3.accommodation_id=='96')
    {
      B3.flagB3_1_2_otro=true;
    }
    else
    {
      B3.flagB3_1_2_otro=false;
    }
  }
  public sumadias(a){
    this.momento2.total = 0;
    var ultimo = parseInt(this.momento2.how_many_cities);
    for(let i = a; i >= 0; i--){
      this.momento2.total =this.momento2.total +parseInt(this.momento2.lB3[i]['how_many_city']);
    }
    
    if(localStorage.diferencia < this.momento2.total){
      alert("La suma de las noches que pasó en los municipios de Norte de Santander no puede ser MAYOR a las noches que pasó en Norte de Santander");
      this.momento2.lB3[a]['how_many_city'] = "";
      this.momento2.total = 0;
    }else if(ultimo == a+1){
      if(localStorage.diferencia > this.momento2.total){
        alert("La suma de las noches que pasó en los municipios de Norte de Santander no puede ser MENOR a las noches que pasó en Norte de Santander" );
        this.momento2.lB3[a]['how_many_city'] = "";
        this.momento2.total = 0;
      }
    }

    
  }

  
  public setMain(B3:ReceptorB3Model)
  {
    if(B3.B4Temp=='1')
    {
      this.momento2.B4=B3;
      this.momento2.B4.name=this.B3_1Json['cities'].find(x => x.id == B3.city_id).name;
      
    }
  }

  public validatenorteSantanderquest()
  {
    if(this.momento2.norteSantanderquest.indexOf("137")>=0)
    {
      this.flagB5_4_1=true;
    }
    else
    {
      this.flagB5_4_1=false;
    }

    if(this.momento2.norteSantanderquest.indexOf("147")>=0)
    {
      this.flagB5_5_1=true;
    }
    else
    {
      this.flagB5_5_1=false;
    }    

    if(this.momento2.norteSantanderquest.indexOf("148")>=0)
    {
      this.flagB5_6_1=true;
    }
    else
    {
      this.flagB5_6_1=false;
    }   
    if(this.momento2.norteSantanderquest.indexOf("150")>=0)
    {
      this.flagB5_8_1=true;
    }
    else
    {
      this.flagB5_8_1=false;
    }

    if(this.momento2.norteSantanderquest.indexOf("152")>=0)
    {
      this.flagB5_10_1=true;
    }
    else
    {
      this.flagB5_10_1=false;
    } 
    
    if(this.momento2.norteSantanderquest.indexOf("40")>=0)
    {
      this.flagB5_otro=true;
    }
    else
    {
      this.flagB5_otro=false;
    }
  }

  public showB5_4_1_otro()
  {
    
    
    if(this.momento2.activitiesnortesantander_id=='40')
    {
      this.flagB5_4_1_otro=true;
    }
    else
    {
      this.flagB5_4_1_otro=false;
    }
  }

  public showB5_6_1_otro()
  {
    if( this.momento2.naturalparks_id=='40')
    {
      this.flagB5_6_1_otro=true;
    }
    else
    {
      this.flagB5_6_1_otro=false;
    }
  }

  public showB5_8_1_otro()
  {
    if( this.momento2.B5_8_1=='40')
    {
      this.flagB5_8_1_otro=true;
    }
    else
    {
      this.flagB5_8_1_otro=false;
    }
  }

  public showB5_10_1_otro()
  {
    if( this.momento2.sports_id=='40')
    {
      this.flagB5_10_1_otro=true;
    }
    else
    {
      this.flagB5_10_1_otro=false;
    }
  }

  public showC1_otro()
  {
    if(this.momento2.typetransportationused_id=='40')
    {
      this.flagC1_otro=true;
    }
    else
    {
      this.flagC1_otro=false;
    }
  }

  public showC2_otro()
  {
    if(this.momento2.transportationusedmost_id=='40'){
      this.flagC2_otro=true;
      this.transporte_terrestre=false;
    }else if(this.momento2.transportationusedmost_id=='486'){
      this.transporte_terrestre=true;
      this.flagC2_otro=false;
    }else{
      this.transporte_terrestre=false;
      this.flagC2_otro=false;
    }
  }

  public showD2()
  {
    if(parseInt(this.momento2.howmanypeople_travel)>1)
    {
      this.flagD2=true;
    }
    else
    {
      this.flagD2=false;
    }
  }

  public validateD2()
  {
   
    
    if(this.momento2.travelpeople_id.indexOf("514")>=0 || this.momento2.travelpeople_id=="514")
    {
      this.flagD2_8_1=true;
    }
    else
    {
      this.flagD2_8_1=false;
    } 

    if(this.momento2.travelpeople_id=="40" || this.momento2.travelpeople_id.indexOf("40")>=0)
    {
      this.flagD2_otro=true;
    }
    else
    {
      this.flagD2_otro=false;
    } 
  }

  public showE1_E4()
  {
    if(this.momento2.tourist_package=="Si")
    {
      this.flagE1_E4=true;
    }
    else
    {
      this.flagE1_E4=false;
    }  
  }

  public showE1_1_otro()
  {
    
    if(this.momento2.othercities_id=="40" || this.momento2.othercities_id.indexOf("40")>=0)
    {
      this.flagE1_1_otro=true;
    }
    else
    {
      this.flagE1_1_otro=false;
    } 
  }

  public showE2_1()
  { 
    // console.log(this.momento2.paycop);
  
    if(parseInt(this.momento2.paycop)>0)
    {
      this.flagE2_1=true;
    }
    else
    {
      this.flagE2_1=false;
    } 
  }

  public showE3_1()
  {
    if(this.momento2.packagebuy_id=="222")
    {
      this.flagE3_1=true;
    }
    else
    {
      this.flagE3_1=false;
    } 
  }

  public showE4_otro()
  {
    if(this.momento2.productsandservices_id=="524" || this.momento2.productsandservices_id.indexOf("524")>=0)
    {
      this.flagE4_otro=true;
    }
    else
    {
      this.flagE4_otro=false;
    } 
  }

  public createE5()
  {
    console.log(this.momento2.outsidepackage_id);

    if(this.momento2.outsidepackage_id.indexOf("640")>=0){
      this.momento2.outsidepackage_id = ["640"];
    }
    if(this.momento2.outsidepackage_id.indexOf("99")>=0)
    {
      this.momento2.lE5=[];
      this.flagNinguna=false;
      return;
    }
    else
    {
      this.flagNinguna=true;
    }
    if(this.momento2.outsidepackage_id.indexOf("3")>=0)
    {
      this.flagE7=false;
    }
    else
    {
      this.flagE8=true;
    }
    if(this.momento2.outsidepackage_id.indexOf("5")>=0)
    {
      this.flagE8=false;
    }
    else
    {
      this.flagE8=true;
    }
     if(this.momento2.outsidepackage_id.indexOf("12")>=0)
    {
      this.flagE9=false;
    }
    else
    {
      this.flagE9=true;
    }
    this.momento2.lE5=[];
    let num = this.momento2.outsidepackage_id.length;
    if(this.momento2.outsidepackage_id.indexOf("640")>=0){
      
    }else{
      for(let i=0;i<num;i++){
        let ele=new ReceptorE5Model();
        ele.E5_name=this.E5Json['data'].find(x => x.id == this.momento2.outsidepackage_id[i]).name;
        this.momento2.lE5.push(ele);
      }
    } 
  }

  public showE6_otro()
  {
    if(this.momento2.organitationexpenses_id.indexOf("40")>=0)
    {
      this.flagE6_otro=true;
    }
    else
    {
      this.flagE6_otro=false;
    } 
    if(this.momento2.organitationexpenses_id.indexOf("660")>=0)
    {
      this.flagE7=true;
    }
    else
    {
      this.flagE7=false;
    } 
    if(this.momento2.organitationexpenses_id.indexOf("662")>=0)
    {
      this.flagE8=true;
    }
    else
    {
      this.flagE8=false;
    } 
    if(this.momento2.organitationexpenses_id.indexOf("669")>=0)
    {
      this.flagE9=true;
    }
    else
    {
      this.flagE9=false;
    } 
  }

  public showE10_otro()
  {
    if(this.momento2.paidby_id=="40" || this.momento2.paidby_id.indexOf("40")>=0)
    {
      this.flagE10_otro=true;
    }
    else
    {
      this.flagE10_otro=false;
    }
  }

  public showF1_1()
  {
    if(this.momento2.F1=="Si")
    {
      this.flagF1_1=true;
    }
    else
    {
      this.flagF1_1=false;
    }
  }

  public showF2_8()
  {
    if(this.momento2.restaurantservices=="Si")
    {
      this.flagF2_8=true;
    }
    else
    {
      this.flagF2_8=false;
    }
  }

  public showG1_otro()
  {
    if(this.momento2.beforetravel_id=="40"  || this.momento2.beforetravel_id.indexOf("40")>=0)
    {
      this.flagG1_otro=true;
    }
    else
    {
      this.flagG1_otro=false;
    }
  }

  public showG2_otro()
  {
    if(this.momento2.duringtravel_id=="40" || this.momento2.duringtravel_id.indexOf("40")>=0)
    {
      this.flagG2_otro=true;
    }
    else
    {
      this.flagG2_otro=false;
    }
  }

  public showG3_otro()
  {
    if(this.momento2.aftertravel_id=="40" || this.momento2.aftertravel_id.indexOf("40")>=0)
    {
      this.flagG3_otro=true;
    }
    else
    {
      this.flagG3_otro=false;
    }
  }

   public showG4_email()
   {
     if(this.momento2.aceptinfo=="Si")
     {
       this.flagG4_email=true;
     }
     else
     {
       this.flagG4_email=false;
     }
   }

  public showG5_otro()
  {
    if(this.momento2.aceptinfo2=="Si")
    {
      this.flagG5_otro=true;
    }
    else
    {
      this.flagG5_otro=false;
    }
  }

  public showH4_otro()
  {
    if(this.momento2.H4.indexOf("96")>=0)
    {
      this.flagH4_otro=true;
    }
    else
    {
      this.flagH4_otro=false;
    }
  }

  public showH5_otro()
  {
    if(this.momento2.H5.indexOf("96")>=0)
    {
      this.flagH5_otro=true;
    }
    else
    {
      this.flagH5_otro=false;
    }
  }public showH6_otro()
  {
    if(this.momento2.H6.indexOf("96")>=0)
    {
      this.flagH6_otro=true;
    }
    else
    {
      this.flagH6_otro=false;
    }
  }
  public showH7_otro()
  {
    if(this.momento2.H7.indexOf("96")>=0)
    {
      this.flagH7_otro=true;
    }
    else
    {
      this.flagH7_otro=false;
    }
  }

  

  


  

  

  

  
  
}
