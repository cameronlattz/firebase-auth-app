import React from 'react';
import { connect } from 'react-redux';
import { ScrollView, Text } from 'react-native';
import styles from './styles';

class Settings extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>Settings</Text>
      </ScrollView>
    );
  }
}

export default connect(
  null,
  {}
)(Settings);
