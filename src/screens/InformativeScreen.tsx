import React, {useState} from 'react';
import {
  Image,
  View,
  ImageBackground,
  StyleSheet,
  Pressable,
  Text,
} from 'react-native';
import SoundPlayer from 'react-native-sound-player';

type InformativeScreenProps = {
  navigation: any;
};

export default function InformativeScreen({
  navigation,
}: InformativeScreenProps) {
  const [isPlayingSound, setIsPlayingSound] = useState(false);

  const playSound = () => {
    try {
      setIsPlayingSound(!isPlayingSound);

      !isPlayingSound === true
        ? SoundPlayer.playSoundFile('sound', 'mp3')
        : SoundPlayer.stop();
    } catch (e) {
      console.log('cannot play the sound file', e);
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/informative.png')}
        resizeMode="cover"
        style={styles.bgImage}>
        <Text style={styles.text}>
          El Día de Muertos es una de las celebraciones más importantes de
          México, conmemorando la muerte como un elemento más de la vida y como
          una forma de recordar y honrar a los seres queridos.
        </Text>
        <View style={styles.footer}>
          <View style={styles.buttonContainer}>
            <Pressable onPress={playSound}>
              {isPlayingSound && (
                <Image
                  style={styles.icon}
                  source={require('../assets/sound.png')}
                />
              )}
              {!isPlayingSound && (
                <Image
                  style={styles.icon}
                  source={require('../assets/sound-mute.png')}
                />
              )}
            </Pressable>
          </View>
          <View style={styles.buttonContainer}>
            <Pressable onPress={() => navigation.navigate('Home')}>
              <Image
                style={styles.enterIcon}
                source={require('../assets/right-arrow.png')}
              />
            </Pressable>
          </View>
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
    padding: 30,
  },
  text: {
    color: '#F4EEB2',
    textAlign: 'center',
    alignSelf: 'flex-start',
    width: 200,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  enterIcon: {
    width: 25,
    height: 25,
  },
  buttonContainer: {
    backgroundColor: 'black',
    borderWidth: 2,
    borderColor: 'grey',
    borderRadius: 50,
    padding: 10,
    justifyContent: 'center',
  },
  icon: {
    height: 20,
    width: 30,
  },
});
