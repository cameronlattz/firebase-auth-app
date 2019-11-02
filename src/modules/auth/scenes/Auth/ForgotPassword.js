import React from 'react';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';
import { actions as auth } from '../../index';
import Form from '../../components/Form';
import styles from './styles';

const { resetPassword } = auth;

const fields = [
  {
    key: 'email',
    label: 'Email Address',
    placeholder: 'Email',
    autoFocus: false,
    secureTextEntry: false,
    type: 'email',
    iconName: 'at'
  }
];

const defaultError = {
  general: '',
  email: ''
};

class ForgotPassword extends React.Component {
  constructor() {
    super();
    this.state = { error: defaultError };
  }

  onSubmit = data => {
    const { props } = this;
    this.setState({ error: defaultError });

    props
      .resetPassword(data)
      .then(() => {
        alert('Password Reminder Sent');
        Actions.pop();
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

    this.setState({ error: errObj });
  };

  render() {
    const { errorState } = this.state;
    return (
      <View style={styles.formContainer}>
        <Text style={styles.formHeader}>Reset Password</Text>
        <Form fields={fields} onSubmit={this.onSubmit} buttonTitle="SUBMIT" error={errorState} />
      </View>
    );
  }
}

export default connect(
  null,
  { resetPassword }
)(ForgotPassword);
