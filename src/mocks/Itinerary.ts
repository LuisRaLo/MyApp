import { IItinerary } from "../home/domain/repository/ItineraryRepository";

const itineraryLocation: IItinerary[] = []
const itineraryEvent: IItinerary[] = []
const itineraryEnterprise: IItinerary[] = []
const itineraryRestaurant: IItinerary[] = []


export const getItineraryLocation = async (): Promise<IItinerary[]> => {
    itineraryLocation.push({
        name: 'Cueva Explendor',
        pathImage: 'https://source.unsplash.com/random/800x600'
    },{
        name: 'Blanco y Negro',
        pathImage: 'https://source.unsplash.com/random/800x600'
        
    });

    return itineraryLocation;
}

export const getItineraryEvent = async (): Promise<IItinerary[]> => {
    return itineraryEvent;
}

export const getItineraryEnterprise = async (): Promise<IItinerary[]> => {
    return itineraryEnterprise;
}

export const getItineraryRestaurant = async (): Promise<IItinerary[]> => {
    return itineraryRestaurant;
}