import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { Button, Divider } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as Facebook from 'expo-facebook';
import * as Google from 'expo-google-app-auth';
import styles from './styles';
import * as theme from '../../../../styles/theme';
import { actions as auth, constants } from '../../index';
import indexImageSrc from '../../../../assets/images/index.png';

const { signInWithFacebook, signInWithGoogle } = auth;

class Welcome extends React.Component {
  onSignInWithGoogle = async () => {
    try {
      const { props } = this;
      const { accessToken, idToken, type } = await Google.logInAsync({
        androidClientId: constants.GOOGLE_ANDROID_APP_ID,
        iosClientId: constants.GOOGLE_IPHONE_APP_ID,
        scopes: ['profile', 'email']
      });

      if (type === 'success') {
        props
          .signInWithGoogle(idToken, accessToken)
          .then(({ exists, user }) => {
            if (exists) Actions.Main();
            else Actions.CompleteProfile({ user });
          })
          .catch(error => alert(error.message));
      }
    } catch (e) {
      console.log('error', e);
    }
  };

  onSignInWithFacebook = async () => {
    const { type, token } = await Facebook.logInWithReadPermissionsAsync(
      constants.FACEBOOK_APP_ID,
      { permissions: ['public_profile', 'email'] }
    );
    const { props } = this;

    if (type === 'success') {
      props
        .signInWithFacebook(token)
        .then(({ exists, user }) => {
          if (exists) Actions.Main();
          else Actions.CompleteProfile({ user });
        })
        .catch(error => alert(error.message));
    }
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.topContainer}>
          <Image style={styles.image} source={indexImageSrc} />
          <Text style={styles.title}>{theme.appName}</Text>
        </View>

        <View style={styles.bottomContainer}>
          <View style={styles.buttonContainer}>
            <Button
              raised
              title="LOG IN WITH FACEBOOK"
              buttonStyle={styles.button}
              containerStyle={styles.buttonContainer}
              textStyle={styles.buttonText}
              onPress={this.onSignInWithFacebook}
              icon={
                <Icon
                  name="facebook-f"
                  size={theme.button.icon.size}
                  color={theme.button.color}
                  style={theme.button.icon.style}
                />
              }
            />
            <Button
              raised
              title="LOG IN WITH GOOGLE"
              buttonStyle={styles.button}
              containerStyle={styles.buttonContainer}
              textStyle={styles.buttonText}
              onPress={this.onSignInWithGoogle}
              icon={
                <Icon
                  name="google"
                  size={theme.button.icon.size}
                  color={theme.button.color}
                  style={theme.button.icon.style}
                />
              }
            />
            <View style={styles.orContainer}>
              <Divider style={styles.divider} />
              <Text style={styles.orText}>Or</Text>
            </View>
            <Button
              raised
              title="LOG IN WITH E-MAIL"
              buttonStyle={styles.button}
              containerStyle={styles.buttonContainer}
              textStyle={styles.buttonText}
              onPress={Actions.Login}
              icon={
                <Icon
                  name="at"
                  size={theme.button.icon.size}
                  color={theme.button.color}
                  style={theme.button.icon.style}
                />
              }
            />
          </View>
          <View style={styles.bottom}>
            <Text style={styles.bottomText}>Don&apos;t have an account?</Text>
            <TouchableOpacity onPress={Actions.Register}>
              <Text style={styles.signInText}>Sign up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

Welcome.propTypes = {
  signInWithFacebook: PropTypes.func,
  signInWithGoogle: PropTypes.func
};

Welcome.defaultProps = {
  signInWithFacebook: null,
  signInWithGoogle: null
};

export default connect(
  null,
  { signInWithFacebook, signInWithGoogle }
)(Welcome);
