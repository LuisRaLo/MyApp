import {useEffect, useState} from 'react';
import {DependenceInjection} from '../../../../shared/infrastructure/factories/DependenceInjection';
import {
  IItinerary,
  TypeItenaryEnum,
} from '../../../domain/repository/ItineraryRepository';

export default function useItinerary(type: TypeItenaryEnum) {
  const itineraryRepository = DependenceInjection.itineraryRepository();

  useEffect(() => {
    getItinerary();
  }, []);

  const [itinerary, setItinerary] = useState<IItinerary[]>([]);

  async function getItinerary() {
    const itineraryReq = await itineraryRepository.getItinerary(type);
    setItinerary(itineraryReq);
  }

  const titleToSpanish = (type: string) => {
    switch (type) {
      case TypeItenaryEnum.location:
        return 'Ubicación';
      case TypeItenaryEnum.enterprise:
        return 'Empresas';
      case TypeItenaryEnum.event:
        return 'Eventos';
      case TypeItenaryEnum.restaurant:
        return 'Restaurantes';
      default:
        return '';
    }
  };

  return {
    itinerary,
    getItinerary,
    titleToSpanish,
  };
}
