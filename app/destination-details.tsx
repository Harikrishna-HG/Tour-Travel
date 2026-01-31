import { ErrorMessage } from '@/components/travel/ErrorMessage';
import { LoadingSpinner } from '@/components/travel/LoadingSpinner';
import { TourCard } from '@/components/travel/TourCard';
import { useDestination, useTours } from '@/hooks/useFirebase';
import type { Tour } from '@/services/firebaseService';
import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function DestinationDetailsScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const destinationId = params.id as string;
  const [showFullDescription, setShowFullDescription] = useState(false);

  // Fetch data from Firebase
  const { destination, loading: destinationLoading, error: destinationError } = useDestination(destinationId);
  const { tours: destinationTours, loading: toursLoading } = useTours(destinationId);

  // Show loading state
  if (destinationLoading || toursLoading) {
    return (
      <SafeAreaView style={styles.container}>
        <LoadingSpinner message="Loading destination details..." />
      </SafeAreaView>
    );
  }

  // Show error or not found state
  if (destinationError || !destination) {
    return (
      <SafeAreaView style={styles.container}>
        <ErrorMessage
          message={destinationError || 'Destination not found'}
          onRetry={() => router.back()}
        />
      </SafeAreaView>
    );
  }

  const shortDescription = destination.description.length > 100
    ? destination.description.substring(0, 100) + '...'
    : destination.description;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Header with Back Button */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <Ionicons name="arrow-back" size={24} color="#333" />
          </TouchableOpacity>
          <Text style={styles.title}>{destination.name}</Text>
        </View>

        {/* Description */}
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>
            {showFullDescription ? destination.description : shortDescription}
          </Text>
          <TouchableOpacity
            onPress={() => setShowFullDescription(!showFullDescription)}
          >
            <Text style={styles.readMore}>
              {showFullDescription ? 'Show less' : 'Read more'}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Upcoming Tours */}
        {destinationTours.length > 0 && (
          <View style={styles.toursSection}>
            <Text style={styles.sectionTitle}>Upcoming tours</Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.toursContent}
            >
              {destinationTours.map((tour: Tour) => (
                <TourCard
                  key={tour.id}
                  title={tour.title}
                  image={{ uri: tour.image }}
                  duration={tour.duration}
                  price={tour.price}
                  rating={tour.rating}
                  reviews={tour.reviews}
                  onPress={() =>
                    router.push({
                      pathname: '/itinerary',
                      params: { tourId: tour.id },
                    })
                  }
                />
              ))}
            </ScrollView>
          </View>
        )}

        <View style={styles.bottomPadding} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  scrollView: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 16,
  },
  backButton: {
    marginRight: 16,
    padding: 4,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    flex: 1,
  },
  descriptionContainer: {
    paddingHorizontal: 20,
    marginBottom: 32,
  },
  description: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
    marginBottom: 8,
  },
  readMore: {
    fontSize: 14,
    color: '#2196F3',
    fontWeight: '600',
  },
  toursSection: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginHorizontal: 20,
    marginBottom: 16,
  },
  toursContent: {
    paddingHorizontal: 20,
  },
  bottomPadding: {
    height: 40,
  },
});
