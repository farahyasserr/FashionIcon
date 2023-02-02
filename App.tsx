import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import HomeScreen from './src/screens/HomeScreen/HomeScreen.container';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <HomeScreen />
      </SafeAreaView>
    </NavigationContainer>
  );
}

export default App;
