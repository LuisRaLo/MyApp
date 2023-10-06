import {IItinerary} from '../home/domain/repository/ItineraryRepository';

const itineraryLocation: IItinerary[] = [
  {
    id: 1,
    name: 'Basílica de la Inmaculada Concepción',
    description:
      'Se trata de un templo de estilo neogótico1 al cual le hace falta la bóveda2 y que ocupa un área de 1680m², construido en su totalidad en piedra labrada a mano extraída de una cantera en la vereda Serranías del municipio.3 La advocación de la basílica es la Inmaculada Concepción de María.',
    pathImage: 'https://source.unsplash.com/random/800x600',
  },
  {
    id: 2,
    name: 'Las trucheras',
    description:
      'Las trucheras han sido grandes jalonadoras del desarrollo turístico y agroindustrial del municipio de Jardín Antioquia. Además de que en ellas puedes pescar o comprar truchas frescas para llevar, puedes disfrutar de las diversas preparaciones culinarias de la Trucha.',
    pathImage: 'https://source.unsplash.com/random/800x600',
  },
  {
    id: 3,
    name: 'Charco corazon.',
    description:
      'Charco Corazón es un sector de Jardín, entre el Camino de la Herrera y el Plan de la María.Es un lugar muy visitado por su cercanía a Jardín (1 km), por sus aguas limpias y porque no son tan heladas como las que hay montaña arribaCualquier persona puede disfrutar del río, sin necesidad de pagar algo. Es gratis!',
    pathImage: 'https://source.unsplash.com/random/800x600',
  },
  {
    id: 4,
    name: 'La garrucha.',
    description:
      'La garrucha es un medio de transporte de pasajeros y de mercancías.  La de Jardín, comunica el pueblo con la vereda Serranías y se usa para el transporte de pasajeros, café, plátano e insumos para las fincas.',
    pathImage: 'https://source.unsplash.com/random/800x600',
  },
  {
    id: 5,
    name: 'Cueva del esplendor.',
    description:
      'La Cueva del Esplendor es una caverna que es atravesada por un río, formando un espectáculo natural visitado por miles de turistas cada año.',
    pathImage: 'https://source.unsplash.com/random/800x600',
  },
];
const itineraryEvent: IItinerary[] = [
  {
    id: 1,
    name: 'Festival de la rosa',
    pathImage: 'https://source.unsplash.com/random/800x600',
    description:
      'Históricamente, este festival se ha realizado, en la mayoría de las versiones, cada 2 años en el mes de Enero, en el puente de Reyes.',
    location:
      'En los años que no había Festival, se celebraba en el municipio vecino, Riosucio Caldas, el Carnaval de Riosucio (fiestas del Diablo), así que cada año había un motivo para que los dos municipios compartieran su cultura.',
  },
  {
    id: 2,
    name: 'Festival de cine',
    description:
      'busca ofrecer al público colombiano la posibilidad de un acercamiento académico al cine y conformar un fondo editorial de temáticas afines.',
    pathImage: 'https://source.unsplash.com/random/800x600',
  },
  {
    id: 3,
    name: 'Narrativas pueblerinas',
    description:
      'Ofrece una serie de actividades alrededor de diferentes expresiones culturales (literatura, música, pintura…), que giran en torno a tramas, personajes y escenarios locales de diversas regiones de nuestro país.',
    pathImage: 'https://source.unsplash.com/random/800x600',
  },
  {
    id: 4,
    name: 'Halloweeen.',
    description:
      'Descubre la creatividad y la gran fiesta que se genera en Jardín el 31 de Octubre de cada año, por motivo del Halloween o la Noche de los Brujos.',
    pathImage: 'https://source.unsplash.com/random/800x600',
  },
];
const itineraryEnterprise: IItinerary[] = [
  {
    id: 1,
    name: 'Natural Tour Jardin S.A.S',
    description:
      'La empresa Natural Tours Jardin S A S se encuentra situada en el departamento de ANTIOQUIA, en la localidad JARDIN y su dirección postal es CALLE 3 8 61, JARDIN, ANTIOQUIA.Natural Tours Jardin S A S está constituida como una SOCIEDAD POR ACCIONES SIMPLIFICADA.',
    location: 'CALLE 3 8 61, JARDIN, ANTIOQUIA.',
    pathImage: 'https://source.unsplash.com/random/800x600',
  },
  {
    id: 2,
    name: 'Destinos Jardin S.A.S',
    description:
      'La empresa Destinos Jardin S A S se encuentra situada en el departamento de ANTIOQUIA, en la localidad JARDIN y su dirección postal es CARRERA 4 7 66, JARDIN, ANTIOQUIA.',
    location: 'CARRERA 4 7 66, JARDIN, ANTIOQUIA.',
    pathImage: 'https://source.unsplash.com|/random/800x600',
  },
  {
    id: 3,
    name: "Jardin travel's S.A.S",
    description:
      'La empresa Jardin Travel S S A S se encuentra situada en el departamento de ANTIOQUIA, en la localidad JARDIN y su dirección postal es CARRERA 2 A 3 05, JARDIN, ANTIOQUIA.',
    location: 'CARRERA 2 A 3 05, JARDIN, ANTIOQUIA.',
    pathImage: 'https://source.unsplash.com/random/800x600',
  },
];
const itineraryRestaurant: IItinerary[] = [
  {
    id: 1,
    name: 'Mambru',
    description:
      'tipos de comida:Mexicana, Bar, Pizzería, Café, Parrilla, Pub. RANGO DE PRECIOS $ 21.186 - $ 105.932',
    pathImage: 'https://source.unsplash.com/random/800x600',
  },
  {
    id: 2,
    name: 'Bon apetit',
    description:
      'RANGO DE PRECIOS \n' +
      '$ 8.000 - $ 30.000 \n' +
      'TIPOS DE COMIDA \n' +
      'Italiana',
    pathImage: 'https://source.unsplash.com/random/800x600',
  },
  {
    id: 3,
    name: 'Cafe europa',
    description:
      'RANGO DE PRECIOS \n' +
      '$ 8.000 - $ 30.000 \n' +
      'TIPOS DE COMIDA \n' +
      'Italiana',
    pathImage: 'https://source.unsplash.com/random/800x600',
  },
  {
    id: 4,
    name: 'La argelia',
    description:
      'RANGO DE PRECIOS \n' +
      '$ 8.475 - $ 29.661 \n' +
      'TIPOS DE COMIDA \n' +
      'Colombiana',
    pathImage: 'https://source.unsplash.com/random/800x600',
  },
  {
    id: 5,
    name: 'Tacos del mundo.',
    description:
      'RANGO DE PRECIOS \n' +
      '$ 15.000 - $ 25.000 \n' +
      'TIPOS DE COMIDA \n' +
      'Fusión',
    pathImage: 'https://source.unsplash.com/random/800x600',
  },
  {
    id: 6,
    name: 'Parqueadero San Antonio.',
    description:
      'Cierra  a las 10:00 pm. \n' +
      'parqueadero el teatro: \n' +
      'Aparcamiento \n' +
      'Cra. 2 #9-21 \n' +
      'cierra a la 9p.m \n' +
      'parqueadero la sexta: \n' +
      'Aparcamiento \n' +
      'Cra. 6 #9-66 ·  \n' +
      'cierra a las 7:00 pm',
    location: 'Cl. 9 # 1-07 · 320 4553844.',
    pathImage: 'https://source.unsplash.com/random/800x600',
  },
];

export const getItineraryLocation = async (): Promise<IItinerary[]> => {
  return itineraryLocation;
};

export const getItineraryEvent = async (): Promise<IItinerary[]> => {
  return itineraryEvent;
};

export const getItineraryEnterprise = async (): Promise<IItinerary[]> => {
  return itineraryEnterprise;
};

export const getItineraryRestaurant = async (): Promise<IItinerary[]> => {
  return itineraryRestaurant;
};
