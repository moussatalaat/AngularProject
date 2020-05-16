import { Time } from '@angular/common';

export class TripsData {
  Id: number;
  TripNum: string;
  CitiesFromId: number;
  CitiesToId: number;
  DepTime: Time;
  ArrivalTime: Time;
  DepDate: Date;
  ArrivalDate: Date;
  Price: number;
  AvailableSeats: number;
  CompanyAssetId: number;
}
