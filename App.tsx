import React from 'react';
import { StatusBar } from 'react-native';
import { AuthProvider } from './src/contexts/AuthContext';
import RootNavigator from './src/navigation/RootNavigator';

const App = () => {
  return (
    <AuthProvider>
      <StatusBar barStyle="dark-content" />
      <RootNavigator />
    </AuthProvider>
  );
};

export default App;
