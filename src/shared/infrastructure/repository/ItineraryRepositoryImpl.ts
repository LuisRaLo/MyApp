import ItineraryRepository, {
  IItinerary,
  TypeItenaryEnum,
} from '../../domain/repository/ItineraryRepository';

import firestore from '@react-native-firebase/firestore';

export default class ItineraryRepositoryImpl implements ItineraryRepository {
  public async getItinerary(type: TypeItenaryEnum): Promise<IItinerary[]> {
    const data = await firestore().collection('myApp').doc('itinerary').get();

    if (data.exists) {
      const arrs = data.data();
      if (arrs) {
        const arr = arrs[type];
        if (arr) {
          return arr;
        }
      }
    }

    return [];
  }
}
