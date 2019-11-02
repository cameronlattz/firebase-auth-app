import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import { validate } from '../../utils/validate';
import styles from './styles';
import AuthTextInput from '../AuthTextInput';

class Form extends React.Component {
  constructor(props) {
    super(props);

    function createState(fields, error) {
      const state = {};
      fields.forEach(field => {
        const { key, type, value } = field;
        state[key] = { type, value };
      });
      state.error = error;
      return state;
    }

    const { fields, error } = props;

    this.state = createState(fields, error);

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {
    const data = this.state;
    const result = validate(data);
    const { props, state } = this;
    Object.keys(state.error).forEach(key => {
      state.error[key] = ' ';
    });
    props.error.general = '';

    function extractData(inData) {
      const retData = {};
      Object.keys(inData).forEach(key => {
        if (key !== 'error') {
          const { value } = inData[key];
          retData[key] = value;
        }
      });
      return retData;
    }

    if (!result.success) this.setState({ error: result.error });
    else props.onSubmit(extractData(data));
  }

  onChange(key, text) {
    const { state } = this;
    state[key].value = text;
    this.setState(state);
  }

  render() {
    const { fields, showLabel, buttonTitle, onForgotPassword, error } = this.props;
    const { state } = this;

    function getErrorText(generalErrorText) {
      if (generalErrorText === 'The password is invalid or the user does not have a password.') {
        return 'This email address is already associated with another login method, or the password is incorrect. Please log in with Facebook or Google, or use the Forgot Password link below.';
      }
      if (
        generalErrorText ===
        'There is no user record corresponding to this identifier. The user may have been deleted.'
      ) {
        return 'Email address not found.';
      }
      if (generalErrorText === 'The email address is already in use by another account.') {
        return 'This email address is already in use.';
      }
      return generalErrorText;
    }

    return (
      <View>
        <Text style={styles.generalErrorText}>{getErrorText(error.general)}</Text>
        {fields.map(data => {
          const {
            key,
            label,
            placeholder,
            autoFocus,
            secureTextEntry,
            keyboardType,
            iconName
          } = data;
          return (
            <AuthTextInput
              key={key}
              label={label}
              showLabel={showLabel}
              placeholder={placeholder}
              autoFocus={autoFocus}
              onChangeText={text => this.onChange(key, text)}
              secureTextEntry={secureTextEntry}
              keyboardType={keyboardType}
              value={state[key].value}
              error={state.error[key] || ' '}
              iconName={iconName}
            />
          );
        })}
        <Button
          raised
          title={buttonTitle}
          borderRadius={0}
          containerViewStyle={styles.containerView}
          buttonStyle={styles.button}
          textStyle={styles.buttonText}
          onPress={this.onSubmit}
        />
        {onForgotPassword !== null && (
          <Text style={styles.forgotText} onPress={onForgotPassword}>
            Forgot password?
          </Text>
        )}
      </View>
    );
  }
}

Form.propTypes = {
  showLabel: PropTypes.bool,
  buttonTitle: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  error: PropTypes.objectOf(PropTypes.string),
  fields: PropTypes.arrayOf(PropTypes.object),
  onForgotPassword: PropTypes.func
};

Form.defaultProps = {
  showLabel: false,
  buttonTitle: null,
  error: {},
  onForgotPassword: null,
  fields: [{}]
};

export default Form;
