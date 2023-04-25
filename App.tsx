import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import TipProvider from 'react-native-tip';

import NavigationStack from './src/navigation/NavigationStack';

export default function App() {
  return (
    <NavigationContainer>
      <NavigationStack />
      <TipProvider
        overlayOpacity={0.1}
        bodyStyle={styles.bodyTooltip}
        tipContainerStyle={styles.containerTooltip}
        prevNextTextStyle={{}}
        prevNextButtonStyle={{}}
      />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  bodyTooltip: {
    fontWeight: 'bold',
    fontSize: 13,
    textAlign: 'center',
    color: '#3E0B82',
    backgroundColor: '#F4EEB2',
  },
  containerTooltip: {
    padding: 15,
    borderRadius: 20,
    maxWidth: 195,
    elevation: 5,
    backgroundColor: '#F4EEB2',
  },
});
