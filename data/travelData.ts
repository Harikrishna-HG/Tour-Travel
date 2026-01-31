import images from "../assets/images/travel-images";

export interface Destination {
  id: string;
  name: string;
  continent: string;
  rating: number;
  reviews: number;
  image: any;
  description: string;
}

export interface Tour {
  id: string;
  destinationId: string;
  title: string;
  duration: string;
  price: string;
  rating: number;
  reviews: number;
  image: any;
  description: string;
}

export interface ItineraryDay {
  day: number;
  title: string;
  activities: {
    time: string;
    description: string;
  }[];
}

export interface TourItinerary {
  tourId: string;
  title: string;
  dateRange: string;
  days: ItineraryDay[];
}

// Mock data
export const destinations: Destination[] = [
  {
    id: "1",
    name: "Rio de Janeiro",
    continent: "South America",
    rating: 5.0,
    reviews: 143,
    image: images.rio,
    description:
      "Known for its breathtaking beaches, vibrant culture, and iconic landmarks like Christ the Redeemer and Sugarloaf Mountain. Experience the energy of Carnival and samba in this beautiful coastal city.",
  },
  {
    id: "2",
    name: "Tokyo",
    continent: "Asia",
    rating: 4.9,
    reviews: 287,
    image: images.tokyo,
    description:
      "A mesmerizing blend of ancient traditions and cutting-edge modernity. Explore serene temples, bustling markets, and experience world-class cuisine in this vibrant metropolis.",
  },
  {
    id: "3",
    name: "Paris",
    continent: "Europe",
    rating: 4.8,
    reviews: 421,
    image: images.paris,
    description:
      "The City of Light offers romance, art, and culture at every corner. From the Eiffel Tower to charming cafés, Paris captivates with its timeless elegance.",
  },
];

export const tours: Tour[] = [
  {
    id: "1",
    destinationId: "1",
    title: "Iconic Brazil",
    duration: "8 days",
    price: "from $659/person",
    rating: 4.6,
    reviews: 56,
    image: images.iconicBrazil,
    description:
      "Experience the best of Brazil with visits to Rio de Janeiro, São Paulo, and Iguazu Falls. This tour combines city exploration, natural wonders, and cultural immersion.",
  },
  {
    id: "2",
    destinationId: "1",
    title: "Beach Paradise",
    duration: "5 days",
    price: "from $450/person",
    rating: 4.8,
    reviews: 92,
    image: images.beach,
    description:
      "Relax on the stunning beaches of Copacabana and Ipanema. Enjoy water sports, beachside cocktails, and unforgettable sunsets.",
  },
  {
    id: "3",
    destinationId: "2",
    title: "Tokyo Discovery",
    duration: "7 days",
    price: "from $899/person",
    rating: 4.9,
    reviews: 134,
    image: images.tokyoTour,
    description:
      "Discover Tokyo's fascinating blend of tradition and innovation. Visit ancient temples, bustling markets, and modern districts.",
  },
];

export const itineraries: TourItinerary[] = [
  {
    tourId: "1",
    title: "Iconic Brazil Tour",
    dateRange: "Wednesday, Oct 21 – Sunday, Nov 1",
    days: [
      {
        day: 1,
        title: "Arrival to Rio de Janeiro",
        activities: [
          {
            time: "Morning",
            description:
              "Arrive at Rio de Janeiro International Airport and transfer to your hotel in Copacabana",
          },
          {
            time: "Afternoon",
            description:
              "Free time to relax and explore the neighborhood around your hotel",
          },
          {
            time: "Evening",
            description:
              "Welcome dinner at a traditional Brazilian churrascaria with your tour group",
          },
        ],
      },
      {
        day: 2,
        title: "Rio de Janeiro Highlights",
        activities: [
          {
            time: "Morning",
            description:
              "Visit Christ the Redeemer statue at sunrise for breathtaking views of the city",
          },
          {
            time: "Afternoon",
            description:
              "Take the cable car to Sugarloaf Mountain and enjoy panoramic views of Rio",
          },
          {
            time: "Evening",
            description:
              "Explore the historic Santa Teresa neighborhood and enjoy dinner at a local restaurant",
          },
        ],
      },
      {
        day: 3,
        title: "Beaches and Culture",
        activities: [
          {
            time: "Morning",
            description: "Walking tour of Ipanema and Copacabana beaches",
          },
          {
            time: "Afternoon",
            description:
              "Visit the Selarón Steps and explore the Lapa neighborhood",
          },
          {
            time: "Evening",
            description: "Experience authentic samba at a local club",
          },
        ],
      },
      {
        day: 4,
        title: "Day Trip to Petropolis",
        activities: [
          {
            time: "Morning",
            description:
              "Depart for the imperial city of Petropolis in the mountains",
          },
          {
            time: "Afternoon",
            description: "Tour the Imperial Museum and Crystal Palace",
          },
          {
            time: "Evening",
            description: "Return to Rio and enjoy a free evening",
          },
        ],
      },
      {
        day: 5,
        title: "Free Day in Rio",
        activities: [
          {
            time: "All Day",
            description:
              "Optional activities: hang gliding, favela tour, or relaxing on the beach",
          },
        ],
      },
    ],
  },
];

export const continents = [
  "Asia",
  "Europe",
  "South America",
  "Africa",
  "North America",
  "Oceania",
];
