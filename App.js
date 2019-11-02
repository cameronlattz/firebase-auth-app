import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { AppLoading } from 'expo';
import { SafeAreaView, View, Text } from 'react-native';
import * as Font from 'expo-font';
import store from './src/redux/store';
import Router from './src/config/routes';

function cacheFonts(fonts) {
  return fonts.map(font => Font.loadAsync(font));
}

export default class src extends Component {
  constructor() {
    super();
    this.state = {
      isReady: false
    };
  }

  // eslint-disable-next-line class-methods-use-this
  async loadAssetsAsync() {
    const fontAssets = cacheFonts([
      // eslint-disable-next-line global-require
      { UbuntuBold: require('./src/assets/fonts/Ubuntu-Bold.ttf') },
      // eslint-disable-next-line global-require
      { UbuntuMedium: require('./src/assets/fonts/Ubuntu-Medium.ttf') },
      // eslint-disable-next-line global-require
      { UbuntuRegular: require('./src/assets/fonts/Ubuntu-Regular.ttf') },
      // eslint-disable-next-line global-require
      { UbuntuLight: require('./src/assets/fonts/Ubuntu-Light.ttf') },
      // eslint-disable-next-line global-require
      { UbuntuItalic: require('./src/assets/fonts/Ubuntu-Italic.ttf') }
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
