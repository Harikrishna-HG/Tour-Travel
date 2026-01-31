import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import React, { useEffect, useRef } from 'react';
import {
  Animated,
  Dimensions,
  Easing,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const { width, height } = Dimensions.get('window');

export default function SplashScreen() {
  const router = useRouter();
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.3)).current;
  const slideAnim = useRef(new Animated.Value(50)).current;
  const rotateAnim = useRef(new Animated.Value(0)).current;
  const planeAnim = useRef(new Animated.Value(-100)).current;
  const pulseAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    // Animate splash screen elements
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        tension: 10,
        friction: 3,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
      }),
    ]).start();

    // Continuous rotation animation
    Animated.loop(
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 20000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();

    // Plane flying animation
    Animated.timing(planeAnim, {
      toValue: width + 100,
      duration: 2500,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: true,
    }).start();

    // Pulse animation for icon
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 1.1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    ).start();

    // Navigate after delay
    const timer = setTimeout(() => {
      router.replace('/destination-selection');
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  const rotate = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <LinearGradient
        colors={['#0F2027', '#203A43', '#2C5364']}
        style={styles.gradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        {/* Animated Flying Plane */}
        <Animated.View
          style={[
            styles.flyingPlane,
            {
              transform: [{ translateX: planeAnim }],
            },
          ]}
        >
          <Ionicons name="airplane" size={40} color="rgba(255,255,255,0.6)" />
        </Animated.View>

        {/* Animated Background Icons */}
        <Animated.View
          style={[
            styles.backgroundIcon,
            styles.icon1,
            { transform: [{ rotate }] },
          ]}
        >
          <Ionicons name="earth" size={150} color="rgba(255,255,255,0.05)" />
        </Animated.View>

        <Animated.View
          style={[
            styles.backgroundIcon,
            styles.icon2,
          ]}
        >
          <Ionicons name="location" size={120} color="rgba(76,175,80,0.1)" />
        </Animated.View>

        <Animated.View
          style={[
            styles.backgroundIcon,
            styles.icon3,
            { transform: [{ rotate }] },
          ]}
        >
          <Ionicons name="compass" size={100} color="rgba(33,150,243,0.08)" />
        </Animated.View>

        {/* Floating particles */}
        <View style={styles.particle1} />
        <View style={styles.particle2} />
        <View style={styles.particle3} />

        {/* Main Content */}
        <Animated.View
          style={[
            styles.content,
            {
              opacity: fadeAnim,
              transform: [{ scale: scaleAnim }, { translateY: slideAnim }],
            },
          ]}
        >
          {/* Icon Container with Pulse */}
          <Animated.View style={[styles.iconContainer, { transform: [{ scale: pulseAnim }] }]}>
            <View style={styles.iconCircle}>
              <LinearGradient
                colors={['#2196F3', '#21CBF3']}
                style={styles.iconGradient}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
              >
                <Ionicons name="airplane" size={64} color="#fff" />
              </LinearGradient>
            </View>
            <View style={[styles.iconCircle, styles.iconCircle2]}>
              <LinearGradient
                colors={['#4CAF50', '#8BC34A']}
                style={styles.iconGradient}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
              >
                <Ionicons name="location" size={48} color="#fff" />
              </LinearGradient>
            </View>
          </Animated.View>

          {/* App Name with Glow Effect */}
          <View style={styles.titleContainer}>
            <Text style={[styles.titleText, styles.textGlow]}>tour</Text>
            <Text style={[styles.titleAmpersand, styles.ampersandGlow]}>&</Text>
            <Text style={[styles.titleText, styles.textGlow]}>travel</Text>
          </View>

          {/* Tagline */}
          <Animated.Text
            style={[
              styles.tagline,
              {
                opacity: fadeAnim,
              },
            ]}
          >
            ✈ Explore the World with Us ✈
          </Animated.Text>

          {/* Loading Indicator */}
          <View style={styles.loadingContainer}>
            <View style={styles.decorativeContainer}>
              <Animated.View style={[styles.dot, { opacity: fadeAnim }]} />
              <Animated.View style={[styles.dot, styles.dotActive, { opacity: fadeAnim }]} />
              <Animated.View style={[styles.dot, { opacity: fadeAnim }]} />
            </View>
            <Text style={styles.loadingText}>Loading amazing destinations...</Text>
          </View>
        </Animated.View>

        {/* Bottom Decorative Wave */}
        <View style={styles.bottomDecoration}>
          <View style={styles.wave1} />
          <View style={styles.wave2} />
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flyingPlane: {
    position: 'absolute',
    top: '15%',
    left: 0,
    zIndex: 10,
  },
  backgroundIcon: {
    position: 'absolute',
  },
  icon1: {
    top: '8%',
    right: '5%',
  },
  icon2: {
    bottom: '20%',
    left: '8%',
  },
  icon3: {
    top: '35%',
    left: '10%',
  },
  particle1: {
    position: 'absolute',
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: 'rgba(255,255,255,0.4)',
    top: '25%',
    right: '20%',
  },
  particle2: {
    position: 'absolute',
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: 'rgba(76,175,80,0.3)',
    top: '60%',
    right: '15%',
  },
  particle3: {
    position: 'absolute',
    width: 5,
    height: 5,
    borderRadius: 2.5,
    backgroundColor: 'rgba(33,150,243,0.3)',
    top: '40%',
    right: '25%',
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },
  iconContainer: {
    position: 'relative',
    width: 160,
    height: 160,
    marginBottom: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconCircle: {
    width: 130,
    height: 130,
    borderRadius: 65,
    overflow: 'hidden',
    shadowColor: '#2196F3',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.5,
    shadowRadius: 20,
    elevation: 15,
  },
  iconGradient: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 4,
    borderColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 65,
  },
  iconCircle2: {
    position: 'absolute',
    width: 90,
    height: 90,
    borderRadius: 45,
    bottom: -5,
    right: -5,
    shadowColor: '#4CAF50',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.5,
    shadowRadius: 15,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  titleText: {
    fontSize: 56,
    fontWeight: '800',
    color: '#fff',
    letterSpacing: 3,
  },
  textGlow: {
    textShadowColor: 'rgba(33, 150, 243, 0.8)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 20,
  },
  titleAmpersand: {
    fontSize: 48,
    fontWeight: '300',
    color: '#4CAF50',
    marginHorizontal: 12,
  },
  ampersandGlow: {
    textShadowColor: 'rgba(76, 175, 80, 0.8)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 20,
  },
  tagline: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.95)',
    letterSpacing: 2,
    marginTop: 8,
    fontWeight: '500',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
  loadingContainer: {
    marginTop: 50,
    alignItems: 'center',
  },
  decorativeContainer: {
    flexDirection: 'row',
    marginBottom: 16,
    gap: 12,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
  },
  dotActive: {
    backgroundColor: '#fff',
    width: 32,
    shadowColor: '#fff',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 8,
  },
  loadingText: {
    fontSize: 13,
    color: 'rgba(255, 255, 255, 0.7)',
    fontStyle: 'italic',
    letterSpacing: 1,
  },
  bottomDecoration: {
    position: 'absolute',
    bottom: 0,
    width: width,
    height: 180,
    overflow: 'hidden',
  },
  wave1: {
    position: 'absolute',
    bottom: 0,
    width: width * 2,
    height: 180,
    backgroundColor: 'rgba(33, 150, 243, 0.1)',
    borderTopLeftRadius: width,
    borderTopRightRadius: width,
  },
  wave2: {
    position: 'absolute',
    bottom: -20,
    width: width * 2,
    height: 160,
    backgroundColor: 'rgba(76, 175, 80, 0.08)',
    borderTopLeftRadius: width,
    borderTopRightRadius: width,
  },
});
