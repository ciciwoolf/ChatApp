import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { s, vs } from 'react-native-size-matters';
import { theme, typography, spacing, borderRadius } from '../styles';

interface SentMessageCardProps {
  message: string;
}

const SentMessageCard: React.FC<SentMessageCardProps> = ({ message }) => {
  return (
    <View style={styles.container}>
      <View style={styles.messageContainer}>
        <Text style={styles.textMessage}>{message}</Text>
      </View>
    </View>
  );
};

export default SentMessageCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginVertical: vs(4),
  },
  messageContainer: {
    backgroundColor: theme.primary,
    borderRadius: borderRadius.lg,
    maxWidth: '80%',
    padding: spacing.md,
  },
  textMessage: {
    ...typography.body,
    color: theme.textInverse,
  },
});
