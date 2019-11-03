import React from 'react';
import { Button, Header } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import styles from './styles';
import { appName } from '../../../../styles/theme';
import { actions as auth } from '../../../auth/index';

const { View, Alert } = require('react-native');

const { signOut } = auth;

class Drawer extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  onSignOut = () => {
    const { props } = this;
    props
      .signOut()
      .then(() => Actions.reset('Auth'))
      .catch(error => {
        Alert.alert('Oops!', error.message);
      });
  };

  render() {
    return (
      <View style={[styles.drawerContentContainer]}>
        <Header
          leftComponent={{ style: { display: 'none' } }}
          centerComponent={{ text: appName, style: styles.navHeader }}
          rightComponent={{ style: { display: 'none' } }}
        />
        <Button title="Home" buttonStyle={styles.navItem} onPress={Actions.Home} />
        <Button title="New Message" buttonStyle={styles.navItem} onPress={Actions.Create} />
        <Button title="Read Messages" buttonStyle={styles.navItem} onPress={Actions.Read} />
        <Button title="Profile" buttonStyle={styles.navItem} onPress={Actions.Profile} />
        <Button title="Log Out" buttonStyle={styles.navItem} onPress={this.onSignOut} />
      </View>
    );
  }
}

export default connect(
  null,
  { signOut }
)(Drawer);
