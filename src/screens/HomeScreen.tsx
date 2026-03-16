import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import { theme, typography, spacing, borderRadius } from '../styles';
import { useAuth } from '../contexts/AuthContext';
import AppHeader from '../components/AppHeader';

const HomeScreen = () => {
  const { user, signOut } = useAuth();

  const handleSignOut = async () => {
    Alert.alert('Sign Out', 'Are you sure you want to sign out?', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Sign Out',
        style: 'destructive',
        onPress: async () => {
          try {
            await signOut();
          } catch (error) {
            Alert.alert('Error', 'Failed to sign out. Please try again.');
          }
        },
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <AppHeader title="ChatApp" />

      <View style={styles.content}>
        <View style={styles.profileSection}>
          {user?.user?.photo && (
            <Image
              source={{ uri: user.user.photo }}
              style={styles.avatar}
            />
          )}
          <Text style={styles.greeting}>
            Welcome back, {user?.user?.givenName || user?.user?.name || 'User'}!
          </Text>
          <Text style={styles.email}>{user?.user?.email}</Text>
        </View>

        <View style={styles.placeholder}>
          <Text style={styles.placeholderText}>
            Chat features coming soon...
          </Text>
          <Text style={styles.placeholderSubtext}>
            This is where your conversations will appear
          </Text>
        </View>

        <TouchableOpacity
          style={styles.signOutButton}
          onPress={handleSignOut}
          activeOpacity={0.8}>
          <Text style={styles.signOutButtonText}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background,
  },
  content: {
    flex: 1,
    padding: spacing.xl,
  },
  profileSection: {
    alignItems: 'center',
    paddingVertical: spacing.xl,
    backgroundColor: theme.backgroundSecondary,
    borderRadius: borderRadius.lg,
    marginBottom: spacing.xl,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: borderRadius.full,
    marginBottom: spacing.md,
    backgroundColor: theme.border,
  },
  greeting: {
    ...typography.h4,
    color: theme.textPrimary,
    marginBottom: spacing.xs,
  },
  email: {
    ...typography.body,
    color: theme.textSecondary,
  },
  placeholder: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing.xl,
  },
  placeholderText: {
    ...typography.h5,
    color: theme.textSecondary,
    marginBottom: spacing.sm,
    textAlign: 'center',
  },
  placeholderSubtext: {
    ...typography.body,
    color: theme.textTertiary,
    textAlign: 'center',
  },
  signOutButton: {
    backgroundColor: theme.error,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.xl,
    borderRadius: borderRadius.md,
    alignItems: 'center',
    marginTop: spacing.lg,
  },
  signOutButtonText: {
    ...typography.button,
    color: theme.textInverse,
  },
});

export default HomeScreen;
