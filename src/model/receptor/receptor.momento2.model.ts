import { ReceptorE5Model } from "./receptor.e5.model";
import { ReceptorB3Model } from "./receptor.b3.model";

export class ReceptorMomento2Model {
    public how_many_nights:string='';
    public how_many_cities:string='';
    public buildingcondition:string='';
    public conditionfurniture:string='';
    public statetowels:string='';
    public hygiene:string='';
    public stafftreatment:string='';
    public foodservice:string='';
    public accommodationprices:string='';
    public total:number=0;
    public totalalojamiento:string[]=[];
    public lB3:ReceptorB3Model[]=[];
    public norteSantanderquest:string='';
    public activitiesnortesantander_id:string='';
    public othermuseum:string='';
    public sports_id:string='';
    public naturalparks_id:string='';
    public othernaturalparksstring='';
    public otheractivitiesnorte:string='';
    public cleaningmun:string='';
    public hospitality:string='';
    public roadstate:string='';
    public security:string='';
    public tourist_package:string='';
    public typetransportationused_id:string='';
    public typetransportationused_other:string='';
    public transportationusedmost_id:string='';
    public transportationusedmost_other:string='';
    public localtrans:string='';
    public howmanypeople_travel:string='';
    public travelpeople_id:string='';
    public other_tourists:string='';
    public other_people:string='';
    public othercities_id:string='';
    public othercities_other:string='';
    public paycop:string='';
    public people_covered:string='';
    public packagebuy_id:string='';
    public ubicationpackagebuy_id:string='';
    public productsandservices_id:string='';
    public productsandservices_other:string='';
    public outsidepackage_id:string[]=[];
    public nametranscompany:string='';
    public organitationexpenses_id:string[]=[];
    public organitationexpenses_other:string='';
    public nametranscompanyorg:string='';
    public carrental_id:string='';
    public greaterexpense_id:string='';
    public greaterexpense_other:string='';
    public paidby_id:string='';
    public paidby_other:string='';
    public transportExteOutCovered:string='';
    public transportExteOut:string='';
    public transportExteInCovered:string='';
    public transportExteIn:string='';
    public purchaseGoodsCovered:string='';
    public purchaseGoods:string='';
    public extraExpense:string='';
    public restaurantservices:string='';
    public flavordishes:string='';
    public gastronomicoffer:string='';
    public stafftreatment_rest:string='';
    public hygiene_rest:string='';
    public pricesdishes:string='';
    public recommendations:string='';
    public experience:string='';
    public visitagain:string='';
    public recommend:string='';
    public experience2:string='';
    public beforetravel_id:string='';
    public beforetravel_other:string='';
    public duringtravel_id:string='';
    public duringtravel_other:string='';
    public aftertravel_id:string='';
    public aftertravel_other:string='';
    public aceptinfo:string='';
    public aceptinfo2:string='';
    public facebook:string='';
    public twitter:string='';

    


    
    

    

    




    
    
    
    public G4_email:string='';//Opción multiple y validar el otro cual con ventana emergente
    public H1:string='';//Rpta múltiple
    public H2:string='';//Rpta múltiple
    public H3_1:string='';
    public H3_2:string='';
    public H3_3:string='';
    public H3_4:string='';
    public H3_5:string='';
    public H4:string[]=[];//Cargar el destino principal.(PB4).Varias respuestas, validamos el otro cual con la ventana emergente
    public H4_otro:string='';
    public H5:string[]=[];
    public H5_otro:string='';
    public H6:string[]=[];
    public H6_otro:string='';
    public H7:string[]=[];
    public H7_otro:string='';        
    public H8:string='';
    public H8_otro:string='';        
    public H9:string='';
    public H9_otro:string='';        
    public H10:string='';
    public H11:string='';
    public dateEnd:string='';
    public A8_1:string='';//Solo texto, sin números, ni caracteres especiales.
    public A8_2:string='';//Solo texto, sin números, ni caracteres especiales.
    public A9:string='';//Validaciones propias de correo electrónico
    public A10:string='';//Celular Buscar la forma de partir el número para que el indicativo quede aparte.
    public A11:string='';//Validaciones propias de teléfono.
    public B4:ReceptorB3Model=new ReceptorB3Model();//Lista con municipios. Que el municipio esté dentro de los pasados.
    public B5_5_1:string='';//Rpta multiple con pregunta dependiente
    public B5_8_1:string='';
    public B5_8_1_otro:string='';
    public B5_10_1_otro:string='';
    public lE5:ReceptorE5Model[]=[];
    public E5_otro:ReceptorE5Model=new ReceptorE5Model();
    public F1:string='';//Unica respuesta, con pregunta dependiente.
    public F2_14:string='';
    public F2_17:string='';
    public F2_18:string='';
    public F2_19:string='';
    public F2_21:string='';
    public F4:string='';
}
