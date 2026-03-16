import React from 'react';
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Platform,
} from 'react-native';
import { s, vs } from 'react-native-size-matters';
import { theme, spacing, borderRadius } from '../styles';
import { useKeyboardState } from '../hooks/useKeyboardState';

// Using a simple arrow icon instead of vector-icons for now
// We can add react-native-vector-icons later if needed
const SendIcon = () => (
  <View style={styles.sendIconText}>
    <View style={styles.arrow} />
  </View>
);

interface ChatInputProps {
  messageValue: string;
  setMessageValue: (message: string) => void;
  onMessageSent: (message: string) => void;
}

const ChatInput: React.FC<ChatInputProps> = ({
  messageValue,
  setMessageValue,
  onMessageSent,
}) => {
  const sendMessageHandler = () => {
    if (messageValue.trim().length > 0) {
      onMessageSent(messageValue);
      setMessageValue('');
    }
  };

  const { isKeyboardVisible } = useKeyboardState();
  const paddingBottomIOSStyle =
    Platform.OS === 'ios' && {
      paddingBottom: isKeyboardVisible ? vs(10) : vs(20),
    };

  return (
    <View style={[styles.container, paddingBottomIOSStyle]}>
      <TextInput
        style={styles.input}
        value={messageValue}
        onChangeText={setMessageValue}
        placeholder="Type a message..."
        multiline
        placeholderTextColor={theme.textTertiary}
      />

      <TouchableOpacity style={styles.sendButton} onPress={sendMessageHandler}>
        <SendIcon />
      </TouchableOpacity>
    </View>
  );
};

export default ChatInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: spacing.md,
    backgroundColor: theme.background,
    borderTopWidth: 1,
    borderTopColor: theme.border,
  },
  input: {
    flex: 1,
    backgroundColor: theme.backgroundSecondary,
    paddingHorizontal: spacing.md,
    paddingVertical: vs(10),
    marginRight: spacing.sm,
    borderRadius: borderRadius.lg,
    maxHeight: 100,
    color: theme.textPrimary,
  },
  sendButton: {
    width: s(40),
    height: s(40),
    borderRadius: borderRadius.full,
    backgroundColor: theme.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sendIconText: {
    width: 16,
    height: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrow: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 8,
    borderRightWidth: 8,
    borderBottomWidth: 12,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: theme.textInverse,
    transform: [{ rotate: '90deg' }],
  },
});
