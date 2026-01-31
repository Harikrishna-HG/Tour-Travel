# Dynamic Backend Integration - Quick Reference

## What Changed

Your travel app now uses **Firebase Firestore** as a dynamic backend instead of static data!

### ✅ Benefits

- **Real-time Data**: Updates instantly across all devices
- **Scalable**: Can handle millions of users
- **Cloud Storage**: Images and media stored in the cloud
- **Easy Management**: Update content without app updates
- **Free Tier**: Generous free quotas for development

## Architecture

```
App Components
    ↓
Custom Hooks (useFirebase.ts)
    ↓
Firebase Service (firebaseService.ts)
    ↓
Firebase SDK
    ↓
Cloud Firestore Database
```

## New Files Created

### Configuration

- `config/firebase.ts` - Firebase initialization and config

### Services

- `services/firebaseService.ts` - All database operations
  - `fetchDestinations()` - Get all destinations
  - `fetchDestinationById()` - Get single destination
  - `fetchToursByDestination()` - Get tours for a destination
  - `fetchItineraryByTourId()` - Get tour itinerary
  - `fetchContinents()` - Get unique continent list
  - `fetchFeaturedDestinations()` - Get top-rated destinations

### Hooks

- `hooks/useFirebase.ts` - React hooks for easy data fetching
  - `useDestinations()` - Fetch all destinations
  - `useFeaturedDestinations()` - Fetch featured destination
  - `useDestination(id)` - Fetch single destination
  - `useTours(destinationId)` - Fetch tours
  - `useTour(tourId)` - Fetch single tour
  - `useItinerary(tourId)` - Fetch itinerary
  - `useContinents()` - Fetch continents

### Components

- `components/travel/LoadingSpinner.tsx` - Loading indicator
- `components/travel/ErrorMessage.tsx` - Error display with retry

## Updated Screens

All three main screens now fetch data dynamically:

1. **destination-selection.tsx**
   - Uses `useDestinations()`, `useFeaturedDestinations()`, `useContinents()`
   - Shows loading spinner while fetching
   - Displays errors with retry option

2. **destination-details.tsx**
   - Uses `useDestination()`, `useTours()`
   - Dynamic destination info and tours

3. **itinerary.tsx**
   - Uses `useTour()`, `useItinerary()`
   - Dynamic tour details and itinerary

## How to Use

### In a Component:

```typescript
import { useDestinations } from '@/hooks/useFirebase';

function MyComponent() {
  const { destinations, loading, error } = useDestinations();

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <View>
      {destinations.map(dest => (
        <Text key={dest.id}>{dest.name}</Text>
      ))}
    </View>
  );
}
```

### Loading States

All hooks return:

- `data` - The fetched data
- `loading` - Boolean indicating loading state
- `error` - Error message if request failed

## Database Structure

### Firestore Collections:

```
destinations/
  ├── {destinationId}
  │   ├── name: string
  │   ├── continent: string
  │   ├── rating: number
  │   ├── reviews: number
  │   ├── image: string (URL)
  │   └── description: string

tours/
  ├── {tourId}
  │   ├── destinationId: string
  │   ├── title: string
  │   ├── duration: string
  │   ├── price: string
  │   ├── rating: number
  │   ├── reviews: number
  │   ├── image: string (URL)
  │   └── description: string

itineraries/
  ├── {itineraryId}
  │   ├── tourId: string
  │   ├── title: string
  │   ├── dateRange: string
  │   └── days: array
  │       ├── day: number
  │       ├── title: string
  │       └── activities: array
  │           ├── time: string
  │           └── description: string
```

## Common Operations

### Add a New Destination

```javascript
// In Firebase Console:
// 1. Go to Firestore Database
// 2. Click 'destinations' collection
// 3. Click 'Add document'
// 4. Fill in the fields
// 5. Click 'Save'
```

### Update a Destination

```javascript
// In Firebase Console:
// 1. Find the document
// 2. Click to edit
// 3. Update fields
// 4. Changes reflect instantly in the app!
```

### Query by Continent

Already implemented in `fetchDestinationsByContinent()`

```typescript
const brazilDestinations = await fetchDestinationsByContinent("South America");
```

## Performance Tips

1. **Indexes**: Firestore auto-creates indexes for simple queries
2. **Caching**: Firebase SDK caches data automatically
3. **Pagination**: For large datasets, implement pagination:
   ```typescript
   const q = query(collection(db, "destinations"), limit(10));
   ```

## Security

### Development (Current)

```javascript
allow read, write: if true;  // Anyone can access
```

### Production (Recommended)

```javascript
allow read: if true;  // Anyone can read
allow write: if request.auth != null;  // Only authenticated users can write
```

## Cost Estimates (Free Tier)

Firebase Spark Plan (Free):

- **Reads**: 50,000/day
- **Writes**: 20,000/day
- **Storage**: 1 GB
- **Network**: 10 GB/month

For a typical travel app with 1000 daily users:

- ~10,000 reads/day ✅ Well within limits
- ~100 writes/day ✅ Well within limits

## Next Steps

### Immediate

1. Set up Firebase project
2. Add sample data
3. Update config with your credentials

### Future Enhancements

- Add Firebase Authentication for user accounts
- Implement Cloud Functions for server-side logic
- Add Firebase Storage for user-uploaded images
- Set up Firebase Analytics
- Implement push notifications
- Add real-time updates with onSnapshot()

## Troubleshooting

### App shows loading forever

- Check Firebase config in `config/firebase.ts`
- Verify Firestore is enabled in Firebase Console
- Check browser console for errors

### "Permission denied" errors

- Update Firestore Security Rules to test mode
- Rules tab in Firestore Database

### Data not updating

- Clear app cache
- Refresh the app
- Check Firebase Console to verify data exists

## Resources

- [Firebase Docs](https://firebase.google.com/docs)
- [Firestore Guide](https://firebase.google.com/docs/firestore)
- [Firebase with React](https://firebase.google.com/docs/web/setup)
- [Firestore Data Modeling](https://firebase.google.com/docs/firestore/manage-data/structure-data)

---

**Your app is now powered by a professional backend! 🚀**
