import React from 'react';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';
import { actions as auth } from "../../index";
import Form from "../../components/Form";
import styles from "./styles";

const { login } = auth;

const fields = [
  {
    key: 'email',
    label: "Email Address",
    placeholder: "Email Address",
    autoFocus: true,
    secureTextEntry: false,
    type: "email",
    iconName: 'at',
    value: "cameronlattz@gmail.com",
  },
  {
    key: 'password',
    label: "Password",
    placeholder: "Password",
    autoFocus: false,
    secureTextEntry: true,
    type: "password",
    iconName: 'key',
    value: "abcdef",
  },
];

const defaultError = {
  general: "",
  email: "",
  password: "",
};

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      error: defaultError,
    };
  }

  onForgotPassword = () => {
    Actions.ForgotPassword();
  }

  onSubmit = (data) => {
    const { props } = this;
    this.setState({ error: defaultError });

    props.login(data)
      .then(({ exists, user }) => {
        if (!exists) Actions.CompleteProfile({ user });
      })
      .catch(this.onError);
  }

  onError = (error) => {
    const { state } = this;
    const errObj = state.error;

    if (error.hasOwnProperty("message")) {
      errObj.general = error.message;
    } else {
      const keys = Object.keys(error);
      keys.forEach((key) => {
        errObj[key] = error[key];
      });
    }
    this.setState({ error: errObj });
  }

  render() {
    const { errorState } = this.state;
    return (
      <View style={styles.formContainer}>
        <Text style={styles.formHeader}>Log In</Text>
        <Form
          fields={fields}
          showLabel={false}
          onSubmit={this.onSubmit}
          buttonTitle="LOG IN"
          error={errorState}
          onForgotPassword={this.onForgotPassword}
        />
      </View>
    );
  }
}

export default connect(null, { login })(Login);
