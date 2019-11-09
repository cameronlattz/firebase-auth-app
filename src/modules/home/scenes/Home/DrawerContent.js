import React from 'react';
import { Header } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { Alert, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import PropTypes from 'prop-types';
import styles from './styles';
import { appName } from '../../../../styles/theme';
import { actions as auth } from '../../../auth/index';

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
      <View style={styles.drawerContentContainer}>
        <Header
          leftComponent={{ style: { display: 'none' } }}
          centerComponent={{ text: appName, style: styles.navCenterComponent }}
          rightComponent={{ style: { display: 'none' } }}
          containerStyle={styles.navHeader}
        />
        <TouchableOpacity onPress={Actions.Home} style={styles.navItem}>
          <Text style={styles.navItemText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={Actions.Create} style={styles.navItem}>
          <Text style={styles.navItemText}>New Message</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={Actions.Read} style={styles.navItem}>
          <Text style={styles.navItemText}>Read Messages</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={Actions.Statistics} style={styles.navItem}>
          <Text style={styles.navItemText}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.onSignOut} style={styles.navItem}>
          <Text style={styles.navItemText}>Log Out</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

Drawer.propTypes = {
  signOut: PropTypes.func
};

Drawer.defaultProps = {
  signOut: null
};

export default connect(
  null,
  { signOut }
)(Drawer);
