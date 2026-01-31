# Firebase Setup Instructions

## Step 1: Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project"
3. Enter project name: "travel-app" (or your preferred name)
4. Follow the setup wizard
5. Enable Google Analytics (optional)

## Step 2: Add Web App

1. In Firebase Console, click the **Web icon (</>)**
2. Register app with nickname: "Travel App Web"
3. Copy the Firebase configuration object
4. Open `config/firebase.ts` and replace the placeholder values

## Step 3: Enable Firestore Database

1. In Firebase Console, go to **Build > Firestore Database**
2. Click "Create database"
3. Choose **Start in test mode** (for development)
4. Select your preferred region
5. Click "Enable"

## Step 4: Set Up Firestore Security Rules (Optional for Development)

In the Firestore Rules tab, use these rules for development:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if true;  // WARNING: Only for development!
    }
  }
}
```

**⚠️ Important:** Update these rules for production!

## Step 5: Add Sample Data to Firestore

### Using Firebase Console:

1. Go to **Firestore Database**
2. Click **Start collection**

#### Collection: `destinations`

Add 3 documents:

**Document ID: `rio` (or auto-generated)**

```json
{
  "name": "Rio de Janeiro",
  "continent": "South America",
  "rating": 5.0,
  "reviews": 143,
  "image": "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=800",
  "description": "Known for its breathtaking beaches, vibrant culture, and iconic landmarks like Christ the Redeemer and Sugarloaf Mountain. Experience the energy of Carnival and samba in this beautiful coastal city."
}
```

**Document ID: `tokyo`**

```json
{
  "name": "Tokyo",
  "continent": "Asia",
  "rating": 4.9,
  "reviews": 287,
  "image": "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800",
  "description": "A mesmerizing blend of ancient traditions and cutting-edge modernity. Explore serene temples, bustling markets, and experience world-class cuisine in this vibrant metropolis."
}
```

**Document ID: `paris`**

```json
{
  "name": "Paris",
  "continent": "Europe",
  "rating": 4.8,
  "reviews": 421,
  "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800",
  "description": "The City of Light offers romance, art, and culture at every corner. From the Eiffel Tower to charming cafés, Paris captivates with its timeless elegance."
}
```

#### Collection: `tours`

Add 3 documents:

**Document ID: `iconic-brazil` (use the destination document ID from above)**

```json
{
  "destinationId": "rio",
  "title": "Iconic Brazil",
  "duration": "8 days",
  "price": "from $659/person",
  "rating": 4.6,
  "reviews": 56,
  "image": "https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?w=800",
  "description": "Experience the best of Brazil with visits to Rio de Janeiro, São Paulo, and Iguazu Falls. This tour combines city exploration, natural wonders, and cultural immersion."
}
```

**Document ID: `beach-paradise`**

```json
{
  "destinationId": "rio",
  "title": "Beach Paradise",
  "duration": "5 days",
  "price": "from $450/person",
  "rating": 4.8,
  "reviews": 92,
  "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800",
  "description": "Relax on the stunning beaches of Copacabana and Ipanema. Enjoy water sports, beachside cocktails, and unforgettable sunsets."
}
```

**Document ID: `tokyo-discovery`**

```json
{
  "destinationId": "tokyo",
  "title": "Tokyo Discovery",
  "duration": "7 days",
  "price": "from $899/person",
  "rating": 4.9,
  "reviews": 134,
  "image": "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=800",
  "description": "Discover Tokyo's fascinating blend of tradition and innovation. Visit ancient temples, bustling markets, and modern districts."
}
```

#### Collection: `itineraries`

Add 1 document:

**Document ID: `iconic-brazil-itinerary`**

```json
{
  "tourId": "iconic-brazil",
  "title": "Iconic Brazil Tour",
  "dateRange": "Wednesday, Oct 21 – Sunday, Nov 1",
  "days": [
    {
      "day": 1,
      "title": "Arrival to Rio de Janeiro",
      "activities": [
        {
          "time": "Morning",
          "description": "Arrive at Rio de Janeiro International Airport and transfer to your hotel in Copacabana"
        },
        {
          "time": "Afternoon",
          "description": "Free time to relax and explore the neighborhood around your hotel"
        },
        {
          "time": "Evening",
          "description": "Welcome dinner at a traditional Brazilian churrascaria with your tour group"
        }
      ]
    },
    {
      "day": 2,
      "title": "Rio de Janeiro Highlights",
      "activities": [
        {
          "time": "Morning",
          "description": "Visit Christ the Redeemer statue at sunrise for breathtaking views of the city"
        },
        {
          "time": "Afternoon",
          "description": "Take the cable car to Sugarloaf Mountain and enjoy panoramic views of Rio"
        },
        {
          "time": "Evening",
          "description": "Explore the historic Santa Teresa neighborhood and enjoy dinner at a local restaurant"
        }
      ]
    },
    {
      "day": 3,
      "title": "Beaches and Culture",
      "activities": [
        {
          "time": "Morning",
          "description": "Walking tour of Ipanema and Copacabana beaches"
        },
        {
          "time": "Afternoon",
          "description": "Visit the Selarón Steps and explore the Lapa neighborhood"
        },
        {
          "time": "Evening",
          "description": "Experience authentic samba at a local club"
        }
      ]
    }
  ]
}
```

## Step 6: Update Firebase Config

Open `config/firebase.ts` and replace with your actual Firebase configuration:

```typescript
const firebaseConfig = {
  apiKey: "AIzaSy...", // Your actual API key
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123",
};
```

## Step 7: Test the App

1. Make sure Firebase config is updated
2. Restart your Expo development server:
   ```bash
   npm start
   ```
3. The app will now load data from Firebase!

## Troubleshooting

### "Permission denied" errors

- Check Firestore Security Rules
- Make sure you're in test mode for development

### "Firebase not initialized"

- Verify your Firebase config in `config/firebase.ts`
- Make sure all values are correct

### "No data showing"

- Check Firebase Console to confirm data was added
- Check browser console for errors
- Verify collection and field names match exactly

## Production Security Rules

Before deploying to production, update Firestore rules:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /destinations/{destination} {
      allow read: if true;
      allow write: if request.auth != null;  // Only authenticated users
    }
    match /tours/{tour} {
      allow read: if true;
      allow write: if request.auth != null;
    }
    match /itineraries/{itinerary} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```

## Next Steps

- Add Firebase Authentication
- Implement user favorites/bookmarks
- Add booking functionality
- Set up Cloud Functions for backend logic
- Add Firebase Analytics
- Implement push notifications

---

**Need Help?**

- [Firebase Documentation](https://firebase.google.com/docs)
- [Firestore Guides](https://firebase.google.com/docs/firestore)
- [React Native Firebase](https://rnfirebase.io/)
