import { PrimaryButton } from '@/components/travel/PrimaryButton';
import { itineraries, ItineraryDay, Tour, TourItinerary, tours } from '@/data/travelData';
import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import { Alert, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ItineraryScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const tourId = params.tourId as string;

  const tour = tours.find((t: Tour) => t.id === tourId);
  const itinerary = itineraries.find((i: TourItinerary) => i.tourId === tourId);

  if (!tour || !itinerary) {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Tour not found</Text>
      </SafeAreaView>
    );
  }

  const handleBookTour = () => {
    Alert.alert(
      'Book Tour',
      `Would you like to book ${itinerary.title}?`,
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Book Now', onPress: () => Alert.alert('Success', 'Tour booked successfully!') },
      ]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.mainContainer}>
        <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
          {/* Header with Back Button */}
          <View style={styles.header}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => router.back()}
            >
              <Ionicons name="arrow-back" size={24} color="#333" />
            </TouchableOpacity>
            <View style={styles.headerText}>
              <Text style={styles.title}>{itinerary.title}</Text>
              <Text style={styles.dateRange}>{itinerary.dateRange}</Text>
            </View>
          </View>

          {/* Tour Info Card */}
          <View style={styles.tourInfoCard}>
            <View style={styles.tourInfoRow}>
              <View style={styles.tourInfoItem}>
                <Ionicons name="time-outline" size={20} color="#2196F3" />
                <Text style={styles.tourInfoText}>{tour.duration}</Text>
              </View>
              <View style={styles.tourInfoItem}>
                <Ionicons name="cash-outline" size={20} color="#4CAF50" />
                <Text style={styles.tourInfoText}>{tour.price}</Text>
              </View>
            </View>
          </View>

          {/* Itinerary Days */}
          <View style={styles.itinerarySection}>
            <Text style={styles.sectionTitle}>Daily Itinerary</Text>
            {itinerary.days.map((day: ItineraryDay, index: number) => (
              <View key={day.day} style={styles.dayCard}>
                <View style={styles.dayHeader}>
                  <View style={styles.dayBadge}>
                    <Text style={styles.dayBadgeText}>Day {day.day}</Text>
                  </View>
                  <Text style={styles.dayTitle}>{day.title}</Text>
                </View>

                {day.activities.map((activity: { time: string; description: string }, activityIndex: number) => (
                  <View key={activityIndex} style={styles.activityContainer}>
                    <View style={styles.timelineDot}>
                      <View style={styles.dot} />
                      {activityIndex < day.activities.length - 1 && (
                        <View style={styles.timelineLine} />
                      )}
                    </View>
                    <View style={styles.activityContent}>
                      <Text style={styles.activityTime}>{activity.time}</Text>
                      <Text style={styles.activityDescription}>{activity.description}</Text>
                    </View>
                  </View>
                ))}
              </View>
            ))}
          </View>

          <View style={styles.bottomPadding} />
        </ScrollView>

        {/* Bottom Button */}
        <View style={styles.bottomButtonContainer}>
          <PrimaryButton
            title="Book a tour"
            onPress={handleBookTour}
            variant="primary"
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  mainContainer: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 16,
  },
  backButton: {
    marginRight: 16,
    padding: 4,
    marginTop: 4,
  },
  headerText: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  dateRange: {
    fontSize: 14,
    color: '#666',
  },
  tourInfoCard: {
    backgroundColor: '#fff',
    marginHorizontal: 20,
    marginBottom: 24,
    padding: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 2,
  },
  tourInfoRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  tourInfoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  tourInfoText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },
  itinerarySection: {
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
  },
  dayCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 2,
  },
  dayHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  dayBadge: {
    backgroundColor: '#2196F3',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    marginRight: 12,
  },
  dayBadgeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
  dayTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    flex: 1,
  },
  activityContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  timelineDot: {
    width: 12,
    alignItems: 'center',
    marginRight: 12,
    position: 'relative',
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#2196F3',
    marginTop: 4,
  },
  timelineLine: {
    position: 'absolute',
    top: 16,
    width: 2,
    height: '100%',
    backgroundColor: '#E0E0E0',
  },
  activityContent: {
    flex: 1,
  },
  activityTime: {
    fontSize: 14,
    fontWeight: '600',
    color: '#2196F3',
    marginBottom: 4,
  },
  activityDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  bottomPadding: {
    height: 100,
  },
  bottomButtonContainer: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 5,
  },
});
