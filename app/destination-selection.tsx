import { ContinentChip } from '@/components/travel/ContinentChip';
import { DestinationCard } from '@/components/travel/DestinationCard';
import { continents, Destination, destinations } from '@/data/travelData';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';

export default function DestinationSelectionScreen() {
  const router = useRouter();
  const [selectedContinent, setSelectedContinent] = useState<string | null>(null);

  const filteredDestinations = selectedContinent
    ? destinations.filter((d: Destination) => d.continent === selectedContinent)
    : destinations;

  const featuredDestination = destinations[0]; // Rio de Janeiro

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

        {/* Featured Destination */}
        <View style={styles.featuredSection}>
          <Text style={styles.sectionTitle}>🌟 Trending Now</Text>
          <DestinationCard
            title={featuredDestination.name}
            image={featuredDestination.image}
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

        {/* Other Destinations */}
        {filteredDestinations.length > 1 && (
          <View style={styles.otherDestinations}>
            <Text style={styles.sectionTitle}>✈️ Discover More Destinations</Text>
            {filteredDestinations.slice(1).map((destination: Destination) => (
              <DestinationCard
                key={destination.id}
                title={destination.name}
                image={destination.image}
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
    fontSize: 32,
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
