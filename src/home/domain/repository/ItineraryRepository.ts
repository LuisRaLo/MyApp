export interface IItinerary{
    id: number;
    name: string;
    description?: string;
    location?: string;
    pathImage: string
}

export enum TypeItenaryEnum{
    location = 'location',
    event = 'event',
    enterprise = 'enterprise',
    restaurant = 'restaurant'
}

export default interface ItineraryRepository{
    getItinerary(type: TypeItenaryEnum): Promise<IItinerary[]>;
}