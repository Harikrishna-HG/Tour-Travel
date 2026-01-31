import {
  collection,
  doc,
  getDoc,
  getDocs,
  limit,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { db } from "../config/firebase";

// Types
export interface Destination {
  id: string;
  name: string;
  continent: string;
  rating: number;
  reviews: number;
  image: string;
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
  image: string;
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

// Fetch all destinations
export const fetchDestinations = async (): Promise<Destination[]> => {
  try {
    const destinationsCol = collection(db, "destinations");
    const destinationSnapshot = await getDocs(destinationsCol);
    const destinations = destinationSnapshot.docs.map(
      (doc) =>
        ({
          id: doc.id,
          ...doc.data(),
        }) as Destination,
    );
    return destinations;
  } catch (error) {
    console.error("Error fetching destinations:", error);
    throw error;
  }
};

// Fetch destinations by continent
export const fetchDestinationsByContinent = async (
  continent: string,
): Promise<Destination[]> => {
  try {
    const destinationsCol = collection(db, "destinations");
    const q = query(destinationsCol, where("continent", "==", continent));
    const destinationSnapshot = await getDocs(q);
    const destinations = destinationSnapshot.docs.map(
      (doc) =>
        ({
          id: doc.id,
          ...doc.data(),
        }) as Destination,
    );
    return destinations;
  } catch (error) {
    console.error("Error fetching destinations by continent:", error);
    throw error;
  }
};

// Fetch single destination by ID
export const fetchDestinationById = async (
  id: string,
): Promise<Destination | null> => {
  try {
    const destinationDoc = doc(db, "destinations", id);
    const destinationSnapshot = await getDoc(destinationDoc);

    if (destinationSnapshot.exists()) {
      return {
        id: destinationSnapshot.id,
        ...destinationSnapshot.data(),
      } as Destination;
    }
    return null;
  } catch (error) {
    console.error("Error fetching destination:", error);
    throw error;
  }
};

// Fetch tours for a destination
export const fetchToursByDestination = async (
  destinationId: string,
): Promise<Tour[]> => {
  try {
    const toursCol = collection(db, "tours");
    const q = query(toursCol, where("destinationId", "==", destinationId));
    const tourSnapshot = await getDocs(q);
    const tours = tourSnapshot.docs.map(
      (doc) =>
        ({
          id: doc.id,
          ...doc.data(),
        }) as Tour,
    );
    return tours;
  } catch (error) {
    console.error("Error fetching tours:", error);
    throw error;
  }
};

// Fetch single tour by ID
export const fetchTourById = async (id: string): Promise<Tour | null> => {
  try {
    const tourDoc = doc(db, "tours", id);
    const tourSnapshot = await getDoc(tourDoc);

    if (tourSnapshot.exists()) {
      return {
        id: tourSnapshot.id,
        ...tourSnapshot.data(),
      } as Tour;
    }
    return null;
  } catch (error) {
    console.error("Error fetching tour:", error);
    throw error;
  }
};

// Fetch itinerary for a tour
export const fetchItineraryByTourId = async (
  tourId: string,
): Promise<TourItinerary | null> => {
  try {
    const itinerariesCol = collection(db, "itineraries");
    const q = query(itinerariesCol, where("tourId", "==", tourId), limit(1));
    const itinerarySnapshot = await getDocs(q);

    if (!itinerarySnapshot.empty) {
      const doc = itinerarySnapshot.docs[0];
      return {
        ...doc.data(),
      } as TourItinerary;
    }
    return null;
  } catch (error) {
    console.error("Error fetching itinerary:", error);
    throw error;
  }
};

// Fetch all continents (unique list)
export const fetchContinents = async (): Promise<string[]> => {
  try {
    const destinationsCol = collection(db, "destinations");
    const destinationSnapshot = await getDocs(destinationsCol);
    const continents = new Set<string>();

    destinationSnapshot.docs.forEach((doc) => {
      const data = doc.data();
      if (data.continent) {
        continents.add(data.continent);
      }
    });

    return Array.from(continents).sort();
  } catch (error) {
    console.error("Error fetching continents:", error);
    throw error;
  }
};

// Fetch featured destinations (highest rated)
export const fetchFeaturedDestinations = async (
  limitCount: number = 1,
): Promise<Destination[]> => {
  try {
    const destinationsCol = collection(db, "destinations");
    const q = query(
      destinationsCol,
      orderBy("rating", "desc"),
      limit(limitCount),
    );
    const destinationSnapshot = await getDocs(q);
    const destinations = destinationSnapshot.docs.map(
      (doc) =>
        ({
          id: doc.id,
          ...doc.data(),
        }) as Destination,
    );
    return destinations;
  } catch (error) {
    console.error("Error fetching featured destinations:", error);
    throw error;
  }
};
