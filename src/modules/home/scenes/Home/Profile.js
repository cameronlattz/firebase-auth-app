import React from 'react';
import { connect } from 'react-redux';
import styles from './styles';

const { View, Text } = require('react-native');

class Profile extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Profile</Text>
      </View>
    );
  }
}

export default connect(
  null,
  {}
)(Profile);
