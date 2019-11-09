import React from 'react';
import { View, Text, ActivityIndicator, Image } from 'react-native';
import styles from './styles';
import { appName } from '../../styles/theme';
import indexImageSrc from '../../assets/images/index.png';

function Splash() {
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

export default Splash;
