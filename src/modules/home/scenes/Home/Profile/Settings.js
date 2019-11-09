import React from 'react';
import { connect } from 'react-redux';
import { ScrollView, View, Image } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import AppTextInput from '../../../../auth/components/AuthTextInput';
import styles from '../styles';
import { button } from '../../../../../styles/theme';
import profilePictureSrc from '../../../../../assets/images/index.png';

class Settings extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      email: '',
      password: ''
    };
  }

  render() {
    const { state } = this;
    return (
      <ScrollView style={styles.container}>
        <View style={styles.inputButtonContainer}>
          <Image style={styles.image} source={profilePictureSrc} />
          <Button
            raised
            title="Change Profile Picture"
            borderRadius={0}
            buttonStyle={styles.buttonWithInput}
          />
        </View>
        <View style={styles.inputButtonContainer}>
          <AppTextInput
            value={state.username}
            iconName="user"
            containerStyle={styles.inputWithButton}
            showLabel={false}
            type="email"
            onChangeText={text => this.setState({ username: text })}
          />
          <Button
            raised
            title="Change Username"
            borderRadius={0}
            buttonStyle={styles.buttonWithInput}
          />
        </View>
        <View style={styles.inputButtonContainer}>
          <AppTextInput
            value={state.email}
            iconName="at"
            containerStyle={styles.inputWithButton}
            showLabel={false}
            onChangeText={text => this.setState({ email: text })}
          />
          <Button
            raised
            title="Change Email"
            borderRadius={0}
            buttonStyle={styles.buttonWithInput}
          />
        </View>
        <View style={styles.inputButtonContainer}>
          <AppTextInput
            value={state.password}
            iconName="key"
            containerStyle={styles.inputWithButton}
            secureTextEntry
            showLabel={false}
            onChangeText={text => this.setState({ password: text })}
          />
          <Button
            raised
            title="Change Password"
            borderRadius={0}
            buttonStyle={styles.buttonWithInput}
          />
        </View>
        <Button
          raised
          title="Link Facebook Login"
          borderRadius={0}
          containerStyle={styles.containerView}
          buttonStyle={styles.button}
          textStyle={styles.buttonText}
          icon={
            <Icon
              name="facebook"
              size={button.icon.size}
              color={button.color}
              style={button.icon.style}
            />
          }
        />
        <Button
          raised
          title="Link Google Login"
          borderRadius={0}
          containerStyle={styles.containerView}
          buttonStyle={styles.button}
          textStyle={styles.buttonText}
          icon={
            <Icon
              name="google"
              size={button.icon.size}
              color={button.color}
              style={button.icon.style}
            />
          }
        />
      </ScrollView>
    );
  }
}

export default connect(
  null,
  {}
)(Settings);
