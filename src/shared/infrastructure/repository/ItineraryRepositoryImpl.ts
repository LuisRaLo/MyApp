import ItineraryRepository, {
  IItinerary,
  TypeItenaryEnum,
} from '../../domain/repository/ItineraryRepository';

import firestore from '@react-native-firebase/firestore';

export default class ItineraryRepositoryImpl implements ItineraryRepository {
  public async getItinerary(type: TypeItenaryEnum): Promise<IItinerary[]> {
    const data = await firestore().collection('itinerary').doc(type).get();

    if (data.exists) {
      return data.data() as IItinerary[];
    }

    return [];
  }
}
