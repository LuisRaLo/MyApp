import ItineraryRepository, {
  IItinerary,
  TypeItenaryEnum,
} from '../../../home/domain/repository/ItineraryRepository';
import {
  getItineraryEnterprise,
  getItineraryEvent,
  getItineraryLocation,
  getItineraryRestaurant,
} from '../../../mocks/Itinerary';

export default class ItineraryRepositoryImpl implements ItineraryRepository {
  public async getItinerary(type: TypeItenaryEnum): Promise<IItinerary[]> {
    switch (type) {
      case TypeItenaryEnum.location:
        return getItineraryLocation();
      case TypeItenaryEnum.event:
        return getItineraryEvent();
      case TypeItenaryEnum.enterprise:
        return getItineraryEnterprise();
      case TypeItenaryEnum.restaurant:
        return getItineraryRestaurant();
      default:
        return [];
    }
  }
}
