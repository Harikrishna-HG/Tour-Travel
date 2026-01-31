import React from 'react';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { StarRating } from './StarRating';

const { width } = Dimensions.get('window');

interface DestinationCardProps {
  title: string;
  image: any;
  rating: number;
  reviews: number;
  onPress: () => void;
}

export function DestinationCard({ title, image, rating, reviews, onPress }: DestinationCardProps) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.9}>
      <Image source={image} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <StarRating rating={rating} reviews={reviews} />
        <TouchableOpacity style={styles.seeMoreButton} onPress={onPress}>
          <Text style={styles.seeMoreText}>See more</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    marginHorizontal: 20,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  seeMoreButton: {
    marginTop: 12,
    alignSelf: 'flex-start',
  },
  seeMoreText: {
    color: '#2196F3',
    fontSize: 14,
    fontWeight: '600',
  },
});
