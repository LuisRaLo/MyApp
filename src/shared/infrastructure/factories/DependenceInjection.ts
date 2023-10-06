import ItineraryRepository from '../../../home/domain/repository/ItineraryRepository';
import ItineraryRepositoryImpl from '../repository/ItineraryRepositoryImpl';

function itineraryRepository(): ItineraryRepository {
  console.log('itineraryRepository');
  return new ItineraryRepositoryImpl();
}

export const DependenceInjection = {
  itineraryRepository,
};
