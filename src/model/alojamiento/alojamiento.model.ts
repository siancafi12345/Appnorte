
import { EmailValidator } from "@angular/forms";
import { Alojamientopcion1Model } from "../alojamiento/opcion1.model"




export class AlojamientoModel {
    public name:string='';
    public date_year:number;
    public municipality_id:number;
    public position_id:string='';
    public other_position:string='';
    public phone_number:number;
    public phone_ext:number;
    public cell_phone:number;
    public email:EmailValidator;
    public accommodation_type:string='';
    public accommodation_category:string='';
    public comercial_activity:string='';
    public  count_comercial_activity:number;
    public A0:string= "" ;
    public habitacion:boolean=false;
    public apartamento:boolean=false;
    public casas:boolean=false;
    public cabanas:boolean=false;
    public camping:boolean=false;
   
    

    public peopleinternationalplans:number=0;
    public percent_rgnal_plan1:number=0;
    public percent_nal_plan1:number=0;

    public peoplenationalplans:number=0;
    public percent_nal_plan2:number=0;
    public percent_rgnal_plan2:number=0;
    public touristPlans:string;


    public peopleantioaquiaplans:number=0;
    public percent_rgnal_plan3:number=0;
    public percent_nal_plan3:number=0;
    public percent_intl_plan3:number=0;
    
    public htotal_rooms:number;
    public hcapacity_people_max:number;
    public hroom_rate:number;
    public hpeople_check:number;
    public htravelers_entered:number;
    public hrooms_occupied:number;
    public htotal_guests:number;
    public atotal_rooms:number;
    public acapacity_people_max:number;
    public aroom_rate:number;
    public apeople_check:number;
    public atravelers_entered:number;
    public arooms_occupied:number;
    public atotal_guests:number;
    public castotal_rooms:number;
    public cascapacity_people_max:number;
    public casaverage_people:number;
    public casroom_rate:number;
    public caspeople_check:number;
    public castravelers_entered:number;
    public casrooms_occupied:number;
    public castotal_guests:number;
    public cabtotal_rooms:number;
    public cabcapacity_people_max:number;
    public cabaverage_people:number;
    public cabroom_rate:number;
    public cabpeople_check:number;
    public cabtravelers_entered:number;
    public cabrooms_occupied:number;
    public cabtotal_guests:number;
    public camground_area:number;
    public camtotal_plots:number;
    public camcapacity_people_max:number;
    public camroom_rate:number;
    public campeople_check:number;
    public camtravelers_entered:number;
    public camrooms_occupied:number;
    public camtotal_guests:number;


   


    public suma:boolean;
    public suma1:boolean;
    public suma2:boolean;

    
  }
  