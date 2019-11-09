import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { AppLoading } from 'expo';
import { YellowBox } from 'react-native';
import * as Font from 'expo-font';
import store from './src/redux/store';
import Router from './src/config/routes';
import UbuntuBold from './src/assets/fonts/Ubuntu-Bold.ttf';
import UbuntuMedium from './src/assets/fonts/Ubuntu-Medium.ttf';
import UbuntuRegular from './src/assets/fonts/Ubuntu-Regular.ttf';
import UbuntuLight from './src/assets/fonts/Ubuntu-Light.ttf';
import UbuntuItalic from './src/assets/fonts/Ubuntu-Italic.ttf';

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

  // eslint-disable-next-line class-methods-use-this
  async loadAssetsAsync() {
    const fontAssets = cacheFonts([
      { UbuntuBold },
      { UbuntuMedium },
      { UbuntuRegular },
      { UbuntuLight },
      { UbuntuItalic }
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
