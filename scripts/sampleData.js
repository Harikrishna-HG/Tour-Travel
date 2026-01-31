// Firebase Data Seeding Script
// This script helps you populate your Firebase database with sample data
// Run this in Firebase Console's Firestore Database using the "Add Collection" feature

// SAMPLE DATA FOR YOUR TRAVEL APP

const DESTINATIONS = [
  {
    // Document ID: rio (or auto-generate)
    name: "Rio de Janeiro",
    continent: "South America",
    rating: 5.0,
    reviews: 143,
    image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=800",
    description:
      "Known for its breathtaking beaches, vibrant culture, and iconic landmarks like Christ the Redeemer and Sugarloaf Mountain. Experience the energy of Carnival and samba in this beautiful coastal city.",
  },
  {
    // Document ID: tokyo
    name: "Tokyo",
    continent: "Asia",
    rating: 4.9,
    reviews: 287,
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800",
    description:
      "A mesmerizing blend of ancient traditions and cutting-edge modernity. Explore serene temples, bustling markets, and experience world-class cuisine in this vibrant metropolis.",
  },
  {
    // Document ID: paris
    name: "Paris",
    continent: "Europe",
    rating: 4.8,
    reviews: 421,
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800",
    description:
      "The City of Light offers romance, art, and culture at every corner. From the Eiffel Tower to charming cafés, Paris captivates with its timeless elegance.",
  },
  {
    // Document ID: bali
    name: "Bali",
    continent: "Asia",
    rating: 4.9,
    reviews: 512,
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800",
    description:
      "A tropical paradise known for its stunning beaches, rice terraces, and spiritual temples. Experience Balinese culture, yoga retreats, and world-class surfing.",
  },
  {
    // Document ID: dubai
    name: "Dubai",
    continent: "Asia",
    rating: 4.7,
    reviews: 389,
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800",
    description:
      "A futuristic city of superlatives featuring the world's tallest building, luxury shopping, and desert adventures. Experience modern Arabian hospitality and innovation.",
  },
];

const TOURS = [
  {
    // Document ID: iconic-brazil
    destinationId: "rio", // Must match destination document ID
    title: "Iconic Brazil",
    duration: "8 days",
    price: "from $659/person",
    rating: 4.6,
    reviews: 56,
    image: "https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?w=800",
    description:
      "Experience the best of Brazil with visits to Rio de Janeiro, São Paulo, and Iguazu Falls. This tour combines city exploration, natural wonders, and cultural immersion.",
  },
  {
    // Document ID: beach-paradise
    destinationId: "rio",
    title: "Beach Paradise",
    duration: "5 days",
    price: "from $450/person",
    rating: 4.8,
    reviews: 92,
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800",
    description:
      "Relax on the stunning beaches of Copacabana and Ipanema. Enjoy water sports, beachside cocktails, and unforgettable sunsets.",
  },
  {
    // Document ID: tokyo-discovery
    destinationId: "tokyo",
    title: "Tokyo Discovery",
    duration: "7 days",
    price: "from $899/person",
    rating: 4.9,
    reviews: 134,
    image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=800",
    description:
      "Discover Tokyo's fascinating blend of tradition and innovation. Visit ancient temples, bustling markets, and modern districts.",
  },
  {
    // Document ID: paris-romantic
    destinationId: "paris",
    title: "Romantic Paris",
    duration: "6 days",
    price: "from $799/person",
    rating: 4.9,
    reviews: 201,
    image: "https://images.unsplash.com/photo-1431274172761-fca41d930114?w=800",
    description:
      "Experience the romance of Paris with visits to iconic landmarks, Seine river cruises, and gourmet dining experiences.",
  },
  {
    // Document ID: bali-wellness
    destinationId: "bali",
    title: "Bali Wellness Retreat",
    duration: "10 days",
    price: "from $1,200/person",
    rating: 4.9,
    reviews: 178,
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800",
    description:
      "Rejuvenate your body and mind with yoga sessions, spa treatments, and healthy cuisine in stunning Ubud locations.",
  },
];

const ITINERARIES = [
  {
    // Document ID: iconic-brazil-itinerary
    tourId: "iconic-brazil", // Must match tour document ID
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
  {
    // Document ID: tokyo-discovery-itinerary
    tourId: "tokyo-discovery",
    title: "Tokyo Discovery Tour",
    dateRange: "Monday, Nov 10 – Sunday, Nov 16",
    days: [
      {
        day: 1,
        title: "Arrival and Shibuya",
        activities: [
          {
            time: "Morning",
            description:
              "Arrive at Narita Airport and transfer to hotel in Shinjuku",
          },
          {
            time: "Afternoon",
            description: "Explore Shibuya Crossing and shopping district",
          },
          {
            time: "Evening",
            description: "Welcome dinner at traditional izakaya restaurant",
          },
        ],
      },
      {
        day: 2,
        title: "Historic Tokyo",
        activities: [
          {
            time: "Morning",
            description: "Visit Senso-ji Temple in Asakusa",
          },
          {
            time: "Afternoon",
            description: "Explore Tokyo Skytree and surrounding area",
          },
          {
            time: "Evening",
            description: "Stroll through traditional Nakamise Shopping Street",
          },
        ],
      },
      {
        day: 3,
        title: "Modern Tokyo",
        activities: [
          {
            time: "Morning",
            description: "Visit teamLab Borderless digital art museum",
          },
          {
            time: "Afternoon",
            description: "Explore Odaiba waterfront and shopping malls",
          },
          {
            time: "Evening",
            description: "Dinner at robot restaurant show in Shinjuku",
          },
        ],
      },
    ],
  },
];

// INSTRUCTIONS:
// 1. Go to Firebase Console > Firestore Database
// 2. Create three collections: destinations, tours, itineraries
// 3. For each item above, click "Add document" in the respective collection
// 4. Copy the data (excluding comments) and paste field by field
// 5. Click "Save"

// QUICK ADD URLS (for images):
// All images are from Unsplash (free to use)
// If links break, search Unsplash for:
// - "rio de janeiro beach"
// - "tokyo skyline"
// - "paris eiffel tower"
// - "bali temple"
// - "dubai skyline"

export { DESTINATIONS, ITINERARIES, TOURS };
