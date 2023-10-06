import {useState} from 'react';
import {DependenceInjection} from '../../../../shared/infrastructure/factories/DependenceInjection';
import {
  IItinerary,
  TypeItenaryEnum,
} from '../../../domain/repository/ItineraryRepository';

export default function useItinerary() {
  const itineraryRepository = DependenceInjection.itineraryRepository();

  const [itinerary, setItinerary] = useState<IItinerary[]>([]);

  async function getItinerary() {
    console.log('getItinerary');
    const locations = await itineraryRepository.getItinerary(
      TypeItenaryEnum.location,
    );

    setItinerary(locations);
  }
  return {
    itinerary,
    getItinerary,
  };
}
