import { TripModel } from "./trip.model";
import { NightModel } from "./night.model";
import { HowMuchCostTripPackageModel } from "./howMuchCostTripPackage.model";


export class Moment2Model {
  public trips:number;
  public lTrips:TripModel[];
  public activitiesnortesantander_id:string[];
  public activitiesmuseum_id:string[];
  public visitParks:number;
  public naturalparks_id:string;
  public visitChurch:number;
  public makePanela:string;
  public sports_id:string;
  public transport_id:string;
  public othertransport:string;
  public transportUsed:string[];
  public whichtransportUsed:string;
  public mainTransportUsed:string[];
  public whichMainTransportUsed:string;
  public medioReserved:number[];
  public medioReservedPay:number[];
  public tripTourist:string;
  public package:string;
  public pay:number;
  public currency_id:number;
  public peoplecovered:number;
  public packbuy_id:number;
  public located:number;
  public packservices_id:string[];
  public otherservices:string;
  public sport_in:string;
  public sport_out:string;
  public conferences_in:string;
  public conferences_out:string;
  public courses_in:string;
  public courses_out:string;
  public outsidepackage_id:string[];
  public notpayexpenses_id:string[];
  public companyttp:string;
  public car_rental:string;
  public costTrip2ACD:string;
  public costTrip2ACF:string;
  public arr_in:string;
  public arr_out:string;
  public ovj_in:string;
  public ovj_out:string;
  public bdc_in:string;
  public bdc_out:string;
  public csf_in:string;
  public csf_out:string;
  //public bdc_out:string;
  public cte_out:string;
  public sm_in:string;
  public sm_out:string;
  public costTrip2Others:string;
  public smexpenses:number;
  public smcurrency:string;
  public smcovered:number;
  public ttpexpenses:number;
  public typeCurrencyTTN:string;
  public ttpcovered:number;
  public avexpenses:number;
  public avcurrency_id:string;
  public avcovered:number;
  public rcdexpenses:number;
  public rcdcurrency_id:string;
  public countPersonsAC:number;
  public arrexpenses:number;
  public arrcurrency_id:string;
  public arrcovered:number;
  public ovjexpenses:number;
  public ovjcurrency_id:string;
  public ovjcovered:number;
  public bcdexpenses:number;
  public bcdcurrency_id:string;
  public bcdcovered:number;
  public csfexpenses:number;
  public csfcurrency_id:string;
  public rcd_in:string;
  public rcd_out:string;


  public csfcovered:number;
  public cteexpenses:number;
  public ctecurrency_id:string;
  public ctecovered:number;
  public expensesAB:number;
  public dfcurrency_id:string;
  public dfcovered:number;
  public gasexpenses:number;
  public gascovered:string;
  //public gascovered:number;
  public accexpenses:number;
  public accurrency_id:string;
  public acccovered:number;
  public ttinaexpenses:number;
  public typeCurrencyTTA:string;
  public countPersonsTTA:number;
  public tanexpenses:number;
  public typeCurrencyTAN:string;
  public tancovered:number;
  public ttiexpenses:number;
  public tticurrency_id:string;
  public tticovered:number;
  public tiacexpenses:number;
  public tiaccurrency_id:string;
  public tiaccovered:number;
  public tiaexpenses:number;
  public tiacurrency_id:string;
  public tiacovered:number;
  public othexpenses:number;
  public wothexpenses:number;
  public typeCurrencyOther:string;
  public countPersonsOther:number;
  public whichSpend:string;
  public howManySpend:string;
  public expensesgroup_id:string[];
  public otherexpensesgroup:string;
  public beforetravel_id:string[];
  public otherbeforetravel:string;
  public duringtravel_id:string[];
  public otherduringtravel:string;
  public aftertravel_id:string[];
  public otheraftertravel:string;
  public E4_newslettersub:string;
  public E4_newslettersub2:string;
  public E5_newslettersub:string;
  public E5_newslettersub2:string;
  public E5_newslettersub3:string;
  public packageTourist:number;
  public transportArrived:number;
  public displacement:number;
  public accommodation:number;
  public drinks:number;
  public tours:number;
  public recreation:number;
  public present:number;
  public transportOut:number;
  public other:string;
  public other2:string;
  public other3:string;
  public otherService:string;
  public otherService2:string;
  public otherService3:string;
  public featuresDestiny:number[];
  public otherFeatures:string;
  public imageBeforeVisit:number;
  public thenImageBeforeVisit:number;
  public moreImportantStay:string;
  public lessImportantStay:string;
  public wouldVisitAgain:string;
  public authFenalco:string;
  public lNights:NightModel[];
  public totalnights:number;
  public othermuseum:string;
  public othernaturalparks:string;
  public makePanelaOther:string;
  public othersports:string;
  public otheractivity:string;
  public lHowMuchCostTripPackage:HowMuchCostTripPackageModel[];
  public whyBefore:string;
  public whyAfter:string;
  public tripSelected:string;
}
