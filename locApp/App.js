import React, {useEffect, useState} from 'react';
import {StyleSheet, SafeAreaView, StatusBar, LogBox} from 'react-native';
import AuthProvider from './src/auth/AuthProvider';
import {
  Provider as PaperProvider,
  DefaultTheme,
  configureFonts,
} from 'react-native-paper';
import MainTabScreen from './src/controllers/MainTabScreen';
import {NavigationContainer} from '@react-navigation/native';
import {colors} from 'react-native-elements';
import SplashScreen from './src/screens/SplashScreen';
//import {AlanView} from '@alan-ai/alan-sdk-react-native';

export default function App() {
  //const {AlanManager, AlanEventEmitter} = NativeModules;
  //const alanEventEmitter = new NativeEventEmitter(AlanEventEmitter);

  // const subscription = alanEventEmitter.addListener('command', data => {
  //   console.log(`got command event ${JSON.stringify(data)}`);
  // });
  const [showSplash, setShowSplash] = useState(true);
  const fontConfig = {
    default: {
      regular: {
        fontFamily: 'SmoochSans_Regular',
        fontWeight: 'normal',
      },
      medium: {
        fontFamily: 'SmoochSans_Medium',
        fontWeight: 'normal',
      },
      light: {
        fontFamily: 'SmoochSans_Light',
        fontWeight: 'normal',
      },
      thin: {
        fontFamily: 'SmoochSans_Thin',
        fontWeight: 'normal',
      },
    },
  };
  LogBox.ignoreAllLogs();
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: '#4186F5',
      secondary: '#814ED2',
      accent: '#F5B400',
      disabled: '#FF7CC3',
      error: '#F14F0A',
      backgroundLight: '#F4F4F4',
      text: '#3C3C3C',
      textBefore: '#D3D3D3',
      textAfter: '#7D7D7D',
      border: '#00FFA3',
    },
    fonts: configureFonts(fontConfig),
  };

  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 2500);
  }, []);

  // useEffect(() => {
  //   return subscription.remove();
  // }, []);

  return (
    <SafeAreaView
      style={{
        ...styles.container,
        backgroundColor: theme.colors.backgroundLight,
      }}>
      <StatusBar backgroundColor={colors.secondary} />
      <AuthProvider>
        <PaperProvider theme={theme}>
          <NavigationContainer>
            {showSplash ? <SplashScreen /> : <MainTabScreen />}
            {/* <AlanView
              projectid={
                'cfdac5b36d0a78de9cd6709b0a7e592e2e956eca572e1d8b807a3e2338fdd0dc/stage'
              }
            /> */}
          </NavigationContainer>
        </PaperProvider>
      </AuthProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
