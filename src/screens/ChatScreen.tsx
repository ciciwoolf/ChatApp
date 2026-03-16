import React, { useEffect, useRef, useState } from 'react';
import {
  FlatList,
  KeyboardAvoidingView,
  StyleSheet,
  View,
  Platform,
} from 'react-native';
import { s } from 'react-native-size-matters';
import AppHeader from '../components/AppHeader';
import SentMessageCard from '../components/SentMessageCard';
import ResponseMessageCard from '../components/ResponseMessageCard';
import { RECEIVED, SENT } from '../constants/chat';
import ChatInput from '../components/ChatInput';
import EmptyChat from '../components/EmptyChat';
import { useKeyboardState } from '../hooks/useKeyboardState';
import { getOpenAIResponse } from '../api/openai';
import { theme } from '../styles';

interface Message {
  id: number;
  message: string;
  type: string;
}

const ChatScreen = () => {
  const [messagesData, setMessagesData] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [msgInput, setMsgInput] = useState('');
  const flatListRef = useRef<FlatList>(null);
  const { isKeyboardVisible } = useKeyboardState();

  // Function to make FlatList scroll to bottom
  const scrollToBottom = () => {
    if (flatListRef.current && messagesData.length > 0) {
      flatListRef.current.scrollToEnd({ animated: true });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messagesData, isKeyboardVisible]);

  // Function to send a new message to AI
  const onMessageSent = (sentMsg: string) => {
    setMessagesData(prevMessages => {
      return [
        ...prevMessages,
        {
          message: sentMsg,
          id: prevMessages.length + 1,
          type: SENT,
        },
      ];
    });

    setTimeout(() => {
      getResFromAI(sentMsg);
    }, 100);
  };

  const getResFromAI = async (msg: string) => {
    setIsLoading(true);
    const generatedText = await getOpenAIResponse(msg);
    onGetResponse(generatedText);
    setIsLoading(false);
  };

  // Function to receive AI response
  const onGetResponse = (response: string) => {
    setMessagesData(prevMessages => {
      return [
        ...prevMessages,
        {
          message: response,
          id: prevMessages.length + 1,
          type: RECEIVED,
        },
      ];
    });
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        style={styles.keyboardView}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}>
        <AppHeader title="AI Chat" />

        <FlatList
          ref={flatListRef}
          data={messagesData}
          keyExtractor={item => item.id?.toString()}
          renderItem={({ item }) => {
            return item.type === SENT ? (
              <SentMessageCard message={item.message} />
            ) : (
              <ResponseMessageCard message={item.message} />
            );
          }}
          contentContainerStyle={styles.messagesList}
          ListEmptyComponent={<EmptyChat />}
          onLayout={scrollToBottom}
          onContentSizeChange={scrollToBottom}
        />

        {isLoading && (
          <View style={styles.loadingContainer}>
            <ResponseMessageCard message="Thinking..." />
          </View>
        )}

        <ChatInput
          messageValue={msgInput}
          setMessageValue={setMsgInput}
          onMessageSent={onMessageSent}
        />
      </KeyboardAvoidingView>
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background,
  },
  keyboardView: {
    flex: 1,
  },
  messagesList: {
    paddingHorizontal: s(12),
    flexGrow: 1,
  },
  loadingContainer: {
    paddingHorizontal: s(12),
  },
});
