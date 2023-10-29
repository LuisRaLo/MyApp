import {useCallback, useEffect, useState} from 'react';
import {DependenceInjection} from '../../../../shared/infrastructure/factories/DependenceInjection';
import {
  IItinerary,
  TypeItenaryEnum,
} from '../../../../shared/domain/repository/ItineraryRepository';

export default function useItinerary(type: TypeItenaryEnum) {
  const itineraryRepository = DependenceInjection.itineraryRepository();

  useEffect(() => {
    getItinerary();
  }, []);

  const [itinerary, setItinerary] = useState<IItinerary[]>([]);

  const getItinerary = useCallback(async () => {
    const itineraryReq = await itineraryRepository.getItinerary(type);
    const itineraryData: IItinerary[] = [];
    for (const key in itineraryReq) {
      if (Object.prototype.hasOwnProperty.call(itineraryReq, key)) {
        itineraryData.push(itineraryReq[key]);
      }
    }

    setItinerary(itineraryData);
  }, [itineraryRepository, type]);

  const titleToSpanish = (type: string) => {
    switch (type) {
      case TypeItenaryEnum.places:
        return 'Ubicación';
      case TypeItenaryEnum.enterprises:
        return 'Empresas';
      case TypeItenaryEnum.events:
        return 'Eventos';
      case TypeItenaryEnum.restaurants:
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
