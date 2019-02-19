
import { EmailValidator } from "@angular/forms";



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
    public accommodationrooms=[];
    public total_rooms:number;


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


    public suma:boolean;
    public suma1:boolean;
    public suma2:boolean;

    
  }
  