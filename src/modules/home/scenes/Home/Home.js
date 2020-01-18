import React from 'react';
import { ScrollView, Text } from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>Home</Text>
      </ScrollView>
    );
  }
}

export default connect(null, {})(Home);
