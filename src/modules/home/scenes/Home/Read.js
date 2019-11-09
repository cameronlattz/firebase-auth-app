import React from 'react';
import { connect } from 'react-redux';
import { ScrollView, Text } from 'react-native';
import styles from './styles';

class Read extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>Read</Text>
      </ScrollView>
    );
  }
}

export default connect(
  null,
  {}
)(Read);
