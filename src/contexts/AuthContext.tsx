import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  GoogleSignin,
  User as GoogleUser,
} from '@react-native-google-signin/google-signin';

// Configure Google Sign-In
// Use the web client ID from your Firebase console
GoogleSignin.configure({
  webClientId:
    '351735077810-iin4e84l47hmc13ll7m1r65ppi9195c4.apps.googleusercontent.com',
  iosClientId: '351735077810-ahl6r8qt0mcnu0mcld6liq7fabga8f3m.apps.googleusercontent.com', // From GoogleService-Info.plist
});

interface AuthContextType {
  user: GoogleUser | null;
  isLoading: boolean;
  signIn: () => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AUTH_STORAGE_KEY = '@auth_user';

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<GoogleUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Check for existing session on mount
  useEffect(() => {
    checkSignedIn();
  }, []);

  const checkSignedIn = async () => {
    try {
      setIsLoading(true);

      // Check if user is signed in with Google
      const isSignedIn = await GoogleSignin.isSignedIn();

      if (isSignedIn) {
        const userInfo = await GoogleSignin.signInSilently();
        setUser(userInfo);
        await AsyncStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(userInfo));
      } else {
        // Try to restore from AsyncStorage
        const storedUser = await AsyncStorage.getItem(AUTH_STORAGE_KEY);
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }
      }
    } catch (error) {
      console.error('Error checking sign in status:', error);
      // Clear stored data on error
      await AsyncStorage.removeItem(AUTH_STORAGE_KEY);
    } finally {
      setIsLoading(false);
    }
  };

  const signIn = async () => {
    try {
      setIsLoading(true);
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      setUser(userInfo);
      await AsyncStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(userInfo));
    } catch (error) {
      console.error('Sign in error:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const signOut = async () => {
    try {
      setIsLoading(true);
      await GoogleSignin.signOut();
      await AsyncStorage.removeItem(AUTH_STORAGE_KEY);
      setUser(null);
    } catch (error) {
      console.error('Sign out error:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
