import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      <ThemedView style={styles.header}>
        <Ionicons name="compass" size={48} color="#2196F3" />
        <ThemedText type="title" style={styles.title}>
          Discover Your Next Adventure
        </ThemedText>
        <ThemedText style={styles.subtitle}>
          Explore amazing destinations around the world
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.content}>
        <TouchableOpacity
          style={styles.ctaButton}
          onPress={() => router.push('/destination-selection')}
        >
          <Ionicons name="globe" size={24} color="#fff" />
          <ThemedText style={styles.ctaButtonText}>Explore Destinations</ThemedText>
        </TouchableOpacity>

        <ThemedView style={styles.featuresSection}>
          <ThemedText type="subtitle" style={styles.sectionTitle}>
            Why Travel With Us?
          </ThemedText>

          <View style={styles.featureCard}>
            <Ionicons name="airplane" size={32} color="#2196F3" />
            <View style={styles.featureContent}>
              <ThemedText style={styles.featureTitle}>Curated Destinations</ThemedText>
              <ThemedText style={styles.featureDesc}>
                Handpicked locations across all continents
              </ThemedText>
            </View>
          </View>

          <View style={styles.featureCard}>
            <Ionicons name="star" size={32} color="#FFC107" />
            <View style={styles.featureContent}>
              <ThemedText style={styles.featureTitle}>Top-Rated Tours</ThemedText>
              <ThemedText style={styles.featureDesc}>
                Highly rated experiences and activities
              </ThemedText>
            </View>
          </View>

          <View style={styles.featureCard}>
            <Ionicons name="calendar" size={32} color="#4CAF50" />
            <View style={styles.featureContent}>
              <ThemedText style={styles.featureTitle}>Easy Planning</ThemedText>
              <ThemedText style={styles.featureDesc}>
                Create and manage your travel itineraries
              </ThemedText>
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
    textAlign: 'center',
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
  ctaButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2196F3',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 12,
    marginBottom: 32,
    gap: 8,
  },
  ctaButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  featuresSection: {
    marginBottom: 40,
  },
  sectionTitle: {
    marginBottom: 20,
    textAlign: 'center',
  },
  featureCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    marginBottom: 16,
    borderRadius: 12,
    backgroundColor: 'rgba(33, 150, 243, 0.1)',
    gap: 16,
  },
  featureContent: {
    flex: 1,
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  featureDesc: {
    fontSize: 14,
    opacity: 0.7,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
