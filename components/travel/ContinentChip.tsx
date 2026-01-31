import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

interface ContinentChipProps {
  name: string;
  onPress: () => void;
  selected?: boolean;
}

export function ContinentChip({ name, onPress, selected = false }: ContinentChipProps) {
  return (
    <TouchableOpacity
      style={[styles.chip, selected && styles.chipSelected]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Text style={[styles.chipText, selected && styles.chipTextSelected]}>
        {name}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  chip: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: '#F5F5F5',
    marginRight: 12,
  },
  chipSelected: {
    backgroundColor: '#2196F3',
  },
  chipText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#666',
  },
  chipTextSelected: {
    color: '#fff',
  },
});
