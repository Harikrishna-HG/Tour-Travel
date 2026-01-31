import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { StarRating } from './StarRating';

interface TourCardProps {
  title: string;
  image: any;
  duration?: string;
  price?: string;
  rating: number;
  reviews: number;
  onPress: () => void;
}

export function TourCard({ title, image, duration, price, rating, reviews, onPress }: TourCardProps) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.9}>
      <Image source={image} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        {duration && price && (
          <View style={styles.infoRow}>
            <Text style={styles.duration}>{duration}</Text>
            <Text style={styles.price}>{price}</Text>
          </View>
        )}
        <StarRating rating={rating} reviews={reviews} size={12} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginRight: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 2,
    overflow: 'hidden',
    width: 280,
  },
  image: {
    width: '100%',
    height: 160,
    resizeMode: 'cover',
  },
  content: {
    padding: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 6,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  duration: {
    fontSize: 14,
    color: '#666',
  },
  price: {
    fontSize: 14,
    fontWeight: '600',
    color: '#4CAF50',
  },
});
