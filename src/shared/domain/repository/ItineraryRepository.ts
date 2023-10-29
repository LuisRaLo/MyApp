export interface IItinerary {
  id: number;
  name: string;
  description?: string;
  location?: {
    lat: number;
    lng: number;
  };
  pathImage: string;
}

export enum TypeItenaryEnum {
  places = 'places',
  events = 'events',
  enterprises = 'enterprises',
  restaurants = 'restaurants',
}

export default interface ItineraryRepository {
  getItinerary(type: TypeItenaryEnum): Promise<IItinerary[]>;
}
