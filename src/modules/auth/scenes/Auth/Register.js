import React from 'react';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';
import { actions as auth } from '../../index';
import Form from '../../components/Form';
import styles from './styles';

const { register } = auth;

const fields = [
  {
    key: 'email',
    label: 'Email Address',
    placeholder: 'Email Address',
    autoFocus: true,
    secureTextEntry: false,
    type: 'email',
    iconName: 'at',
    value: 'cameronlattz@gmail.com'
  },
  {
    key: 'username',
    label: 'Username',
    placeholder: 'Username',
    autoFocus: false,
    secureTextEntry: false,
    type: 'text',
    iconName: 'user',
    value: 'cameronlattz'
  },
  {
    key: 'password',
    label: 'Password',
    placeholder: 'Password',
    autoFocus: false,
    secureTextEntry: true,
    type: 'password',
    iconName: 'key',
    value: 'abcdef'
  }
];

const defaultError = {
  general: ' ',
  email: ' ',
  password: ' '
};

class Register extends React.Component {
  constructor() {
    super();
    defaultError.general = '';
    this.state = { error: defaultError };
  }

  onSubmit = data => {
    const { props } = this;
    this.setState({ error: defaultError });
    props
      .register(data)
      .then(() => {
        Actions.Main();
      })
      .catch(this.onError);
  };

  onError = error => {
    const { state } = this;
    const errObj = state.error;

    if (Object.prototype.hasOwnProperty.call(error, 'message')) {
      errObj.general = error.message;
    } else {
      const keys = Object.keys(error);
      keys.forEach(key => {
        errObj[key] = error[key];
      });
    }
    this.setState({
      error: errObj
    });
  };

  render() {
    const { error } = this.state;
    return (
      <View style={styles.formContainer}>
        <Text style={styles.formHeader}>Register</Text>
        <Form
          fields={fields}
          showLabel={false}
          onSubmit={this.onSubmit}
          buttonTitle="SIGN UP"
          error={error}
        />
      </View>
    );
  }
}

export default connect(
  null,
  { register }
)(Register);
