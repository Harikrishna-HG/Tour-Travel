import { ContinentChip } from '@/components/travel/ContinentChip';
import { DestinationCard } from '@/components/travel/DestinationCard';
import { ErrorMessage } from '@/components/travel/ErrorMessage';
import { LoadingSpinner } from '@/components/travel/LoadingSpinner';
import { useContinents, useDestinations, useFeaturedDestinations } from '@/hooks/useFirebase';
import type { Destination } from '@/services/firebaseService';
import { useRouter } from 'expo-router';
import React, { useMemo, useState } from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';

export default function DestinationSelectionScreen() {
  const router = useRouter();
  const [selectedContinent, setSelectedContinent] = useState<string | null>(null);

  // Fetch data from Firebase
  const { destinations, loading: destinationsLoading, error: destinationsError } = useDestinations();
  const { destination: featuredDestination, loading: featuredLoading } = useFeaturedDestinations();
  const { continents, loading: continentsLoading } = useContinents();

  // Filter destinations by continent
  const filteredDestinations = useMemo(() => {
    if (!selectedContinent) return destinations;
    return destinations.filter((d: Destination) => d.continent === selectedContinent);
  }, [destinations, selectedContinent]);

  // Show loading state
  if (destinationsLoading || featuredLoading || continentsLoading) {
    return (
      <SafeAreaView style={styles.container}>
        <LoadingSpinner message="Loading destinations..." />
      </SafeAreaView>
    );
  }

  // Show error state
  if (destinationsError) {
    return (
      <SafeAreaView style={styles.container}>
        <ErrorMessage
          message={destinationsError}
          onRetry={() => window.location.reload()}
        />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.greeting}>Welcome Back, Explorer!</Text>
          <Text style={styles.subtitle}>Where will your adventure begin?</Text>
        </View>

        {/* Continent Chips */}
        {continents.length > 0 && (
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.continentsContainer}
            contentContainerStyle={styles.continentsContent}
          >
            {continents.map((continent: string) => (
              <ContinentChip
                key={continent}
                name={continent}
                selected={selectedContinent === continent}
                onPress={() =>
                  setSelectedContinent(
                    selectedContinent === continent ? null : continent
                  )
                }
              />
            ))}
          </ScrollView>
        )}

        {/* Featured Destination */}
        {featuredDestination && (
          <View style={styles.featuredSection}>
            <Text style={styles.sectionTitle}>🌟 Trending Now</Text>
            <DestinationCard
              title={featuredDestination.name}
              image={{ uri: featuredDestination.image }}
              rating={featuredDestination.rating}
              reviews={featuredDestination.reviews}
              onPress={() =>
                router.push({
                  pathname: '/destination-details',
                  params: { id: featuredDestination.id },
                })
              }
            />
          </View>
        )}

        {/* Other Destinations */}
        {filteredDestinations.length > 0 && (
          <View style={styles.otherDestinations}>
            <Text style={styles.sectionTitle}>✈️ Discover More Destinations</Text>
            {filteredDestinations
              .filter(d => d.id !== featuredDestination?.id)
              .map((destination: Destination) => (
                <DestinationCard
                  key={destination.id}
                  title={destination.name}
                  image={{ uri: destination.image }}
                  rating={destination.rating}
                  reviews={destination.reviews}
                  onPress={() =>
                    router.push({
                      pathname: '/destination-details',
                      params: { id: destination.id },
                    })
                  }
                />
              ))}
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
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 16,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
  },
  continentsContainer: {
    marginBottom: 24,
  },
  continentsContent: {
    paddingHorizontal: 20,
  },
  featuredSection: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginHorizontal: 20,
    marginBottom: 16,
  },
  otherDestinations: {
    marginBottom: 20,
  },
  bottomPadding: {
    height: 40,
  },
});
