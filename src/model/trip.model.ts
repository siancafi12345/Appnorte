import { DestinationModel } from "./destination.model";

export class TripModel {
  public trip_start:string;
  public trip_finish:string;
  public trip_motives_id:string;
  public timestop:string;
  public flagLongStop:Boolean;
  public health_id:string;
  public othermotives:string;
  public flagOtherMotivation:Boolean;
  public frequency_id:number;
  public peopletravel:number;
  public people_id:string[];
  public sharing_expenses:number;
  public flagHowManyShare:Boolean;
  public flagHowManyShareNo:Boolean;
  public nosharing_expenses:number;
  public outsharing_expenses:number;
  public flagHowManyShareNoHome:Boolean;
  public outnosharing_expenses:number;
  public flagHowManyShareNoHomeNo;Boolean;
  public unknown_tourists:number;
  public unknown:string;
  public flagTouristHome:Boolean;
  public name:string;
  public totalnights:number;
  public lDestination:DestinationModel[]=[new DestinationModel()];
  public flagTourist: Boolean;
  public flagTouristShare: Boolean;
  public flagHealth:Boolean;
  
}
