import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface StarRatingProps {
  rating: number;
  reviews?: number;
  size?: number;
  showReviews?: boolean;
}

export function StarRating({ rating, reviews, size = 14, showReviews = true }: StarRatingProps) {
  return (
    <View style={styles.container}>
      <Ionicons name="star" size={size} color="#FFD700" />
      <Text style={[styles.rating, { fontSize: size }]}>{rating.toFixed(1)}</Text>
      {showReviews && reviews && (
        <Text style={[styles.reviews, { fontSize: size - 2 }]}>({reviews} reviews)</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  rating: {
    fontWeight: '600',
    color: '#333',
  },
  reviews: {
    color: '#666',
    marginLeft: 4,
  },
});
