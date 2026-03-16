import React from 'react';
import { StyleSheet, View } from 'react-native';
import { s, vs } from 'react-native-size-matters';
import { theme, typography, spacing, borderRadius } from '../styles';
import TypingEffect from './TypingEffect';

interface ResponseMessageCardProps {
  message: string;
}

const ResponseMessageCard: React.FC<ResponseMessageCardProps> = ({ message }) => {
  return (
    <View style={styles.container}>
      <View style={styles.messageContainer}>
        <TypingEffect style={styles.messageText} text={message} />
      </View>
    </View>
  );
};

export default ResponseMessageCard;

const styles = StyleSheet.create({
  container: {
    marginVertical: vs(4),
    marginBottom: vs(12),
  },
  messageContainer: {
    backgroundColor: theme.backgroundSecondary,
    borderRadius: borderRadius.lg,
    maxWidth: '80%',
    padding: spacing.md,
  },
  messageText: {
    ...typography.body,
    color: theme.textPrimary,
  },
});
