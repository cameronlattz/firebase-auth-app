/* eslint-disable react/jsx-filename-extension */
/* eslint-disable global-require */
// eslint-disable-next-line spaced-comment
/*import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function src() {
  return (
    <View style={styles.container}>
      <Text>Open up src.js to start working on your src!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
}); */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import store from './src/redux/store';
import Router from './src/config/routes';

function cacheFonts(fonts) {
  return fonts.map((font) => Font.loadAsync(font));
}

export default class src extends Component {
  constructor() {
    super();
    this.state = {
      isReady: false,
    };
  }

  // eslint-disable-next-line class-methods-use-this
  async loadAssetsAsync() {
    const fontAssets = cacheFonts([
      { UbuntuBold: require('./src/assets/fonts/Ubuntu-Bold.ttf') },
      { UbuntuMedium: require('./src/assets/fonts/Ubuntu-Medium.ttf') },
      { UbuntuRegular: require('./src/assets/fonts/Ubuntu-Regular.ttf') },
      { UbuntuLight: require('./src/assets/fonts/Ubuntu-Light.ttf') },
      { UbuntuItalic: require('./src/assets/fonts/Ubuntu-Italic.ttf') },
    ]);

    await Promise.all([...fontAssets]);
  }

  render() {
    const { isReady } = this.state;
    if (!isReady) {
      return (
        <AppLoading
          startAsync={this.loadAssetsAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      );
    }

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}
