import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';

export default function MyTripsScreen() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      <ThemedView style={styles.header}>
        <Ionicons name="suitcase" size={40} color="#2196F3" />
        <ThemedText type="title" style={styles.title}>
          My Trips
        </ThemedText>
        <ThemedText style={styles.subtitle}>
          Plan and manage your adventures
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.content}>
        <View style={styles.emptyState}>
          <Ionicons name="airplane-outline" size={80} color="#ccc" />
          <ThemedText style={styles.emptyTitle}>No trips planned yet</ThemedText>
          <ThemedText style={styles.emptySubtitle}>
            Start exploring destinations and book your dream vacation!
          </ThemedText>

          <TouchableOpacity
            style={styles.exploreButton}
            onPress={() => router.push('/destination-selection')}
          >
            <Ionicons name="compass" size={20} color="#fff" />
            <ThemedText style={styles.buttonText}>Discover Destinations</ThemedText>
          </TouchableOpacity>
        </View>

        <ThemedView style={styles.featuresSection}>
          <ThemedText style={styles.featuresTitle}>Coming Soon</ThemedText>

          <View style={styles.featureCard}>
            <Ionicons name="bookmark-outline" size={28} color="#2196F3" />
            <View style={styles.featureContent}>
              <ThemedText style={styles.featureTitle}>Saved Destinations</ThemedText>
              <ThemedText style={styles.featureDesc}>Bookmark your favorite places</ThemedText>
            </View>
          </View>

          <View style={styles.featureCard}>
            <Ionicons name="calendar-outline" size={28} color="#4CAF50" />
            <View style={styles.featureContent}>
              <ThemedText style={styles.featureTitle}>Trip Planner</ThemedText>
              <ThemedText style={styles.featureDesc}>Organize your itinerary</ThemedText>
            </View>
          </View>

          <View style={styles.featureCard}>
            <Ionicons name="notifications-outline" size={28} color="#FF9800" />
            <View style={styles.featureContent}>
              <ThemedText style={styles.featureTitle}>Travel Alerts</ThemedText>
              <ThemedText style={styles.featureDesc}>Stay updated on your trips</ThemedText>
            </View>
          </View>
        </ThemedView>
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 30,
    alignItems: 'center',
  },
  title: {
    marginTop: 16,
    fontSize: 32,
  },
  subtitle: {
    marginTop: 8,
    fontSize: 16,
    opacity: 0.7,
    textAlign: 'center',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  emptyState: {
    alignItems: 'center',
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  emptyTitle: {
    fontSize: 22,
    fontWeight: '600',
    marginTop: 20,
  },
  emptySubtitle: {
    fontSize: 15,
    opacity: 0.6,
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 30,
  },
  exploreButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2196F3',
    paddingHorizontal: 24,
    paddingVertical: 14,
    borderRadius: 12,
    gap: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  featuresSection: {
    marginTop: 20,
    paddingBottom: 40,
  },
  featuresTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  featureCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'rgba(33, 150, 243, 0.05)',
    borderRadius: 12,
    marginBottom: 12,
    gap: 16,
  },
  featureContent: {
    flex: 1,
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  featureDesc: {
    fontSize: 14,
    opacity: 0.6,
  },
});
