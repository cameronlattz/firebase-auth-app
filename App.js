import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { AppLoading } from 'expo';
import { YellowBox } from 'react-native';
import * as Font from 'expo-font';
import store from './src/redux/store';
import Router from './src/config/routes';
import FontBold from './src/assets/fonts/Ubuntu-Bold.ttf';
import FontMedium from './src/assets/fonts/Ubuntu-Medium.ttf';
import FontRegular from './src/assets/fonts/Ubuntu-Regular.ttf';
import FontLight from './src/assets/fonts/Ubuntu-Light.ttf';
import FontItalic from './src/assets/fonts/Ubuntu-Italic.ttf';

function cacheFonts(fonts) {
  return fonts.map(font => Font.loadAsync(font));
}

// eslint-disable-next-line no-console
YellowBox.ignoreWarnings(['Setting a timer']);

export default class src extends Component {
  constructor() {
    super();
    this.state = {
      isReady: false
    };
  }

  render() {
    const { isReady } = this.state;

    async function loadAssetsAsync() {
      const fontAssets = cacheFonts([
        { FontBold },
        { FontMedium },
        { FontRegular },
        { FontLight },
        { FontItalic }
      ]);
      await Promise.all([...fontAssets]);
    }

    if (!isReady) {
      return (
        <AppLoading
          startAsync={loadAssetsAsync}
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
