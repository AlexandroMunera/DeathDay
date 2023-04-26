import React from 'react';
import {
  ImageBackground,
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  Image,
} from 'react-native';
import {ReactNativeZoomableView} from '@openspacelabs/react-native-zoomable-view';

import {Tip} from 'react-native-tip';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ReactNativeZoomableView
        maxZoom={1.3}
        minZoom={1}
        zoomStep={0.3}
        initialZoom={1}>
        <View style={{backgroundColor: 'blue', width: '100%', height: '100%'}}>
          <ImageBackground
            resizeMode="cover"
            source={require('../assets/home.png')}
            style={styles.bgImage}>
            <View style={styles.header}>
              <Tip
                id={1}
                body="Los altares son en honor a los muertos de la familia">
                <Image source={require('../assets/pointView.png')} />
              </Tip>
              <View style={styles.score}>
                <Text style={styles.scoreText}>200</Text>
                <Image
                  style={styles.scoreIcon}
                  source={require('../assets/scoreIcon.png')}
                />
              </View>
            </View>
            <View style={styles.afterHeader}>
              <Image source={require('../assets/pointView.png')} />
            </View>
            <View style={styles.center}>
              <Image source={require('../assets/pointView.png')} />

              <Tip
                id={2}
                body="“Garbancera” sobrenombre para personas que negaban sus orígenes indígenas">
                <Image source={require('../assets/pointView.png')} />
              </Tip>
            </View>
            <View style={styles.footer}>
              <Image source={require('../assets/pointView.png')} />
              <Image source={require('../assets/pointView.png')} />
            </View>
          </ImageBackground>
        </View>
      </ReactNativeZoomableView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  bgImage: {
    flex: 1,
    paddingHorizontal: 60,
    paddingBottom: 30,
    justifyContent: 'flex-end',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 20,
  },
  score: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 50,
    borderColor: 'white',
    marginLeft: 92,
    marginRight: 30,
    marginTop: -5,
    width: 100,
  },
  scoreText: {
    color: 'white',
    marginRight: 20,
  },
  scoreIcon: {
    borderRadius: 50,
    width: 35,
    height: 35,
    marginRight: -1,
  },
  afterHeader: {
    alignItems: 'center',
    marginBottom: 58,
  },
  center: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 70,
    marginBottom: 85,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
