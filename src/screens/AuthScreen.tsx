import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from 'react-native';
import { theme, typography, spacing, borderRadius } from '../styles';
import { useAuth } from '../contexts/AuthContext';

const AuthScreen = () => {
  const { signIn } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const handleSignIn = async () => {
    try {
      setIsLoading(true);
      await signIn();
    } catch (error: any) {
      Alert.alert(
        'Sign In Failed',
        error.message || 'An error occurred during sign in',
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Welcome to ChatApp</Text>
        <Text style={styles.subtitle}>
          Connect with friends and family instantly
        </Text>

        <TouchableOpacity
          style={[styles.button, isLoading && styles.buttonDisabled]}
          onPress={handleSignIn}
          disabled={isLoading}
          activeOpacity={0.8}>
          {isLoading ? (
            <ActivityIndicator color={theme.textInverse} />
          ) : (
            <>
              <Text style={styles.buttonIcon}>G</Text>
              <Text style={styles.buttonText}>Sign in with Google</Text>
            </>
          )}
        </TouchableOpacity>

        <Text style={styles.disclaimer}>
          By signing in, you agree to our Terms of Service and Privacy Policy
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background,
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing.xl,
  },
  content: {
    width: '100%',
    maxWidth: 400,
    alignItems: 'center',
  },
  title: {
    ...typography.h1,
    color: theme.textPrimary,
    marginBottom: spacing.md,
    textAlign: 'center',
  },
  subtitle: {
    ...typography.body,
    color: theme.textSecondary,
    marginBottom: spacing.xxxl,
    textAlign: 'center',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.primary,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.xl,
    borderRadius: borderRadius.md,
    width: '100%',
    minHeight: 50,
  },
  buttonDisabled: {
    opacity: 0.6,
  },
  buttonIcon: {
    ...typography.h5,
    color: theme.textInverse,
    marginRight: spacing.sm,
    fontWeight: '700',
  },
  buttonText: {
    ...typography.button,
    color: theme.textInverse,
  },
  disclaimer: {
    ...typography.caption,
    color: theme.textTertiary,
    marginTop: spacing.xl,
    textAlign: 'center',
  },
});

export default AuthScreen;
