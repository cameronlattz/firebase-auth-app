import React from 'react';
import { connect } from 'react-redux';
import styles from './styles';

const { View, Text } = require('react-native');

class Home extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Home</Text>
      </View>
    );
  }
}

export default connect(
  null,
  {}
)(Home);
