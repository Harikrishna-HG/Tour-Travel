import { useEffect, useState } from "react";
import type {
  Destination,
  Tour,
  TourItinerary,
} from "../services/firebaseService";
import * as firebaseService from "../services/firebaseService";

// Hook to fetch destinations
export const useDestinations = () => {
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadDestinations = async () => {
      try {
        setLoading(true);
        const data = await firebaseService.fetchDestinations();
        setDestinations(data);
        setError(null);
      } catch (err) {
        setError("Failed to load destinations");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadDestinations();
  }, []);

  return { destinations, loading, error };
};

// Hook to fetch featured destinations
export const useFeaturedDestinations = () => {
  const [destination, setDestination] = useState<Destination | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadFeatured = async () => {
      try {
        setLoading(true);
        const data = await firebaseService.fetchFeaturedDestinations(1);
        setDestination(data[0] || null);
        setError(null);
      } catch (err) {
        setError("Failed to load featured destination");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadFeatured();
  }, []);

  return { destination, loading, error };
};

// Hook to fetch single destination
export const useDestination = (id: string | null) => {
  const [destination, setDestination] = useState<Destination | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) {
      setLoading(false);
      return;
    }

    const loadDestination = async () => {
      try {
        setLoading(true);
        const data = await firebaseService.fetchDestinationById(id);
        setDestination(data);
        setError(null);
      } catch (err) {
        setError("Failed to load destination");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadDestination();
  }, [id]);

  return { destination, loading, error };
};

// Hook to fetch tours by destination
export const useTours = (destinationId: string | null) => {
  const [tours, setTours] = useState<Tour[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!destinationId) {
      setLoading(false);
      return;
    }

    const loadTours = async () => {
      try {
        setLoading(true);
        const data =
          await firebaseService.fetchToursByDestination(destinationId);
        setTours(data);
        setError(null);
      } catch (err) {
        setError("Failed to load tours");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadTours();
  }, [destinationId]);

  return { tours, loading, error };
};

// Hook to fetch tour by ID
export const useTour = (tourId: string | null) => {
  const [tour, setTour] = useState<Tour | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!tourId) {
      setLoading(false);
      return;
    }

    const loadTour = async () => {
      try {
        setLoading(true);
        const data = await firebaseService.fetchTourById(tourId);
        setTour(data);
        setError(null);
      } catch (err) {
        setError("Failed to load tour");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadTour();
  }, [tourId]);

  return { tour, loading, error };
};

// Hook to fetch itinerary
export const useItinerary = (tourId: string | null) => {
  const [itinerary, setItinerary] = useState<TourItinerary | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!tourId) {
      setLoading(false);
      return;
    }

    const loadItinerary = async () => {
      try {
        setLoading(true);
        const data = await firebaseService.fetchItineraryByTourId(tourId);
        setItinerary(data);
        setError(null);
      } catch (err) {
        setError("Failed to load itinerary");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadItinerary();
  }, [tourId]);

  return { itinerary, loading, error };
};

// Hook to fetch continents
export const useContinents = () => {
  const [continents, setContinents] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadContinents = async () => {
      try {
        setLoading(true);
        const data = await firebaseService.fetchContinents();
        setContinents(data);
        setError(null);
      } catch (err) {
        setError("Failed to load continents");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadContinents();
  }, []);

  return { continents, loading, error };
};
