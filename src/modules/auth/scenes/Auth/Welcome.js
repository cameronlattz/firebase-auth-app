import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Button, Divider } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import styles from "./styles";
import * as theme from "../../../../styles/theme";

class Welcome extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Image style={styles.image} source={{ uri: "" }} />
          <Text style={styles.title}>Firebase Auth App</Text>
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
              icon={(
                <Icon
                  name="facebook-f"
                  size={theme.button.icon.size}
                  color={theme.button.color}
                  style={theme.button.icon.style}
                />
              )}
            />
            <Button
              raised
              title="LOG IN WITH GOOGLE"
              buttonStyle={styles.button}
              containerStyle={styles.buttonContainer}
              textStyle={styles.buttonText}
              onPress={this.onSignInWithGoogle}
              icon={(
                <Icon
                  name="google"
                  size={theme.button.icon.size}
                  color={theme.button.color}
                  style={theme.button.icon.style}
                />
              )}
            />
            <View style={styles.orContainer}>
              <Divider style={styles.divider} />
              <Text style={styles.orText}>
                Or
              </Text>
            </View>
            <Button
              raised
              title="LOG IN WITH E-MAIL"
              buttonStyle={styles.button}
              containerStyle={styles.buttonContainer}
              textStyle={styles.buttonText}
              onPress={Actions.Login}
              icon={(
                <Icon
                  name="at"
                  size={theme.button.icon.size}
                  color={theme.button.color}
                  style={theme.button.icon.style}
                />
              )}
            />
          </View>
          <View style={styles.bottom}>
            <Text style={styles.bottomText}>
              Don&apos;t have an account?
            </Text>
            <TouchableOpacity onPress={Actions.Register}>
              <Text style={styles.signInText}>
                Sign up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}


export default connect(null, {})(Welcome);
