import React from 'react';
import { NativeBaseProvider } from 'native-base';
import { NavigationProvider } from './navigation/NavigationProvider';

const App = () => {
  return <NativeBaseProvider>
    <NavigationProvider/>
  </NativeBaseProvider>
}

export default App;
