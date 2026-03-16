import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { theme, typography, spacing } from '../styles';

const EmptyChat = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Start a Conversation</Text>
      <Text style={styles.subtitle}>
        Ask me anything! I'm powered by AI and here to help.
      </Text>
    </View>
  );
};

export default EmptyChat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing.xl,
  },
  title: {
    ...typography.h4,
    color: theme.textPrimary,
    marginBottom: spacing.sm,
    textAlign: 'center',
  },
  subtitle: {
    ...typography.body,
    color: theme.textSecondary,
    textAlign: 'center',
  },
});
