import React, {createRef} from 'react';
import {
  ImageBackground,
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  Image,
  Pressable,
} from 'react-native';
import {Tip} from 'react-native-tip';
import {ReactNativeZoomableView} from '@openspacelabs/react-native-zoomable-view';

export default function HomeScreen() {
  const zoomableViewRef = createRef<ReactNativeZoomableView>();

  return (
    <SafeAreaView style={styles.container}>
      <ReactNativeZoomableView
        ref={zoomableViewRef}
        initialZoom={1}
        maxZoom={1.1}
        minZoom={1}>
        <View style={styles.bgImageContainer}>
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
              <View style={styles.centerPointsContainer}>
                <Image source={require('../assets/pointView.png')} />

                <Tip
                  id={2}
                  body="“Garbancera” sobrenombre para personas que negaban sus orígenes indígenas">
                  <Image source={require('../assets/pointView.png')} />
                </Tip>
              </View>
              <View style={styles.zoomContainer}>
                <Pressable
                  onPress={() => {
                    zoomableViewRef.current!.zoomBy(0.1);
                  }}>
                  <Text style={styles.zoomItem}>+</Text>
                </Pressable>
                <Pressable onPress={() => zoomableViewRef.current!.zoomTo(1)}>
                  <Text style={styles.zoomItem}>-</Text>
                </Pressable>
              </View>
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
  bgImageContainer: {backgroundColor: 'blue', width: '100%', height: '100%'},
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
  centerPointsContainer: {flexDirection: 'row', gap: 65},
  zoomContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'grey',
    borderRadius: 50,
    position: 'absolute',
    right: -40,
    top: -40,
    height: 100,
    width: 30,
    backgroundColor: '#110115',
  },
  zoomItem: {color: 'white', fontSize: 20, fontWeight: 'bold'},
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
