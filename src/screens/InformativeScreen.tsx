import React from 'react';
import {
  Image,
  View,
  ImageBackground,
  StyleSheet,
  Pressable,
  Text,
} from 'react-native';

export default function InformativeScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/informative.png')}
        resizeMode="contain"
        style={styles.bgImage}>
        <Text style={styles.text}>
          El Día de Muertos es una de las celebraciones más importantes de
          México, conmemorando la muerte como un elemento más de la vida y como
          una forma de recordar y honrar a los seres queridos.
        </Text>
        <View style={styles.buttonContainer}>
          <Pressable>
            <Image source={require('../assets/sound.png')} />
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImage: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    padding: 30,
  },
  text: {
    color: '#F4EEB2',
    textAlign: 'center',
    alignSelf: 'flex-start',
    width: 200,
  },
  buttonContainer: {
    backgroundColor: 'black',
    borderWidth: 2,
    borderColor: 'grey',
    borderRadius: 50,
    padding: 10,
  },
});
