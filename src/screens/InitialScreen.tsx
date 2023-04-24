import React from 'react';
import {Pressable, StyleSheet, Text, View, ImageBackground} from 'react-native';

type InitialScreenProps = {
  navigation: any;
};

export default function InitialScreen({navigation}: InitialScreenProps) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/initial.png')}
        resizeMode="contain"
        style={styles.bgImage}>
        <Pressable onPress={() => navigation.navigate('Informative')}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>INICIAR</Text>
          </View>
        </Pressable>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#450D41',
  },
  bgImage: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  button: {
    marginBottom: 30,
    backgroundColor: '#450D41',
    borderRadius: 50,
    borderColor: 'grey',
    borderWidth: 1,
    width: 100,
    padding: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});
