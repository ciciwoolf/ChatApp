import { Button, Image, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import {
  GoogleSignin,
  GoogleSigninButton,
  isErrorWithCode,
  isSuccessResponse,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import { theme, typography, spacing, borderRadius } from '../../styles';

const GoogleSignIn = () => {
  GoogleSignin.configure({
    webClientId:
      '351735077810-iin4e84l47hmc13ll7m1r65ppi9195c4.apps.googleusercontent.com',
  });

  const [userInfo, setUserInfo] = useState(null);

  const googleSignIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const response = await GoogleSignin.signIn();
      if (isSuccessResponse(response)) {
        console.log('Response = ', JSON.stringify(response.data, null, 3));
        setUserInfo(response.data);
      } else {
        // sign in was cancelled by user
      }
    } catch (error) {
      if (isErrorWithCode(error)) {
        switch (error.code) {
          case statusCodes.IN_PROGRESS:
            // operation (eg. sign in) already in progress
            break;
          case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
            // Android only, play services not available or outdated
            break;
          default:
          // some other error happened
        }
      } else {
        // an error that's not related to google sign in occurred
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello World</Text>
      <Button title="Sign in with Google" onPress={googleSignIn} />
      {userInfo && (
        <View style={styles.userInfoContainer}>
          <Image
            style={styles.avatar}
            source={{ uri: userInfo?.user?.photo }}
          />
          <Text style={styles.userName}>{userInfo?.user?.name}</Text>
          <Text style={styles.userEmail}>{userInfo?.user?.email}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background,
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing.base,
  },
  title: {
    ...typography.h1,
    color: theme.textPrimary,
    marginBottom: spacing.xl,
  },
  userInfoContainer: {
    alignItems: 'center',
    marginTop: spacing.xl,
    padding: spacing.lg,
    backgroundColor: theme.backgroundSecondary,
    borderRadius: borderRadius.md,
    width: '100%',
    maxWidth: 300,
  },
  avatar: {
    height: 100,
    width: 100,
    borderRadius: borderRadius.full,
    marginBottom: spacing.md,
    backgroundColor: theme.border,
  },
  userName: {
    ...typography.h4,
    color: theme.textPrimary,
    marginBottom: spacing.xs,
  },
  userEmail: {
    ...typography.body,
    color: theme.textSecondary,
  },
});

export default GoogleSignIn;
