# Travel App - Modern React Native Interface

A beautiful travel app built with React Native and Expo, featuring three main screens for browsing destinations, viewing tour details, and exploring itineraries.

## Features

### 🌍 Destination Selection Screen

- Personalized greeting: "Hello, Vanessa"
- Interactive continent filters (Asia, Europe, South America, etc.)
- Featured destination card with ratings and reviews
- Beautiful card-based layout with images

### 🏖️ Destination Details Screen

- Destination overview with expandable descriptions
- "Upcoming tours" section with horizontal scroll
- Tour cards showing duration, price, ratings, and reviews
- Clean navigation with back button

### 📅 Itinerary Screen

- Complete tour details with date range
- Day-by-day itinerary with timeline view
- Activity breakdown (Morning, Afternoon, Evening)
- Timeline dots and connecting lines
- "Book a tour" call-to-action button

## Design Highlights

- **Modern UI**: Rounded cards, subtle shadows, and smooth animations
- **Travel-Inspired Colors**: Blue, green, and white palette
- **Typography**: Bold headers, readable body text
- **Icons**: Star ratings, navigation icons from Ionicons
- **Responsive**: Works on iOS, Android, and Web

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Expo CLI (installed globally)

### Installation

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm start
```

3. Run on your preferred platform:

```bash
# iOS
npm run ios

# Android
npm run android

# Web
npm run web
```

## Project Structure

```
my-app/
├── app/
│   ├── destination-selection.tsx    # Main screen with continents and destinations
│   ├── destination-details.tsx      # Destination info and tours
│   ├── itinerary.tsx                # Tour itinerary details
│   └── (tabs)/
│       └── index.tsx                # Redirects to destination-selection
├── components/
│   └── travel/
│       ├── StarRating.tsx           # Star rating component
│       ├── PrimaryButton.tsx        # Reusable button component
│       ├── DestinationCard.tsx      # Destination card with image
│       ├── TourCard.tsx             # Tour card component
│       └── ContinentChip.tsx        # Continent filter chip
├── data/
│   └── travelData.ts                # Mock data for destinations, tours, itineraries
└── assets/
    └── images/
        └── travel-images.ts         # Image URLs (using Unsplash)
```

## Technologies Used

- **React Native**: Cross-platform mobile development
- **Expo**: Development platform and tooling
- **Expo Router**: File-based navigation
- **TypeScript**: Type-safe development
- **Ionicons**: Beautiful icon set

## Navigation Flow

```
Destination Selection
    ↓
Destination Details (tap on destination)
    ↓
Itinerary Screen (tap on tour)
```

## Customization

### Adding New Destinations

Edit `data/travelData.ts` and add new destination objects:

```typescript
{
  id: '4',
  name: 'Your Destination',
  continent: 'Asia',
  rating: 4.7,
  reviews: 200,
  image: { uri: 'your-image-url' },
  description: 'Your description here...',
}
```

### Changing Colors

Update colors in component styles:

- Primary Blue: `#2196F3`
- Secondary Green: `#4CAF50`
- Background: `#F8F9FA`

## Screenshots

The app features:

- Beautiful image cards with ratings
- Horizontal scrolling tour lists
- Timeline-based itinerary view
- Clean, modern typography
- Smooth navigation transitions

## License

This project is for educational purposes.

## Credits

Images from Unsplash (free stock photos)
Icons from Expo Vector Icons (Ionicons)
