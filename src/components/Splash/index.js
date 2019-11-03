import React from 'react';
import { View, Text, ActivityIndicator, Image } from 'react-native';
import styles from './styles';
import { appName } from '../../styles/theme';

const indexImageSrc = require('../../assets/images/index.png');

// eslint-disable-next-line react/prefer-stateless-function
export default class extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <Image style={styles.image} source={indexImageSrc} />
          <Text style={styles.title}>{appName}</Text>
        </View>
        <View style={styles.activityIndicatorContainer}>
          <ActivityIndicator animating />
        </View>
      </View>
    );
  }
}
