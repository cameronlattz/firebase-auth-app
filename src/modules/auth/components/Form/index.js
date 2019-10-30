import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import { validate } from '../../utils/validate';
import styles from "./styles";
import AuthTextInput from "../AuthTextInput";

class Form extends React.Component {
  constructor(props) {
    super(props);

    function createState(fields, error) {
      const state = {};
      fields.forEach((field) => {
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
    const { props } = this;

    function extractData(inData) {
      const retData = {};
      Object.keys(inData).forEach((key) => {
        if (key !== "error") {
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
    const {
      fields,
      showLabel,
      buttonTitle,
      onForgotPassword,
    } = this.props;
    const { state } = this;

    return (
      <View>
        {
          (state.error.general && state.error.general !== "")
          && <Text style={styles.errorText}>{state.error.general}</Text>
        }
        {
          fields.map((data) => {
            const {
              key,
              label,
              placeholder,
              autoFocus,
              secureTextEntry,
              keyboardType,
              iconName,
            } = data;
            return (
              <AuthTextInput
                key={key}
                label={label}
                showLabel={showLabel}
                placeholder={placeholder}
                autoFocus={autoFocus}
                onChangeText={(text) => this.onChange(key, text)}
                secureTextEntry={secureTextEntry}
                keyboardType={keyboardType}
                value={state[key].value}
                error={state.error[key]}
                iconName={iconName}
              />
            );
          })
        }
        <Button
          raised
          title={buttonTitle}
          borderRadius={0}
          containerViewStyle={styles.containerView}
          buttonStyle={styles.button}
          textStyle={styles.buttonText}
          onPress={this.onSubmit}
        />
        {
          onForgotPassword !== null
          && (
            <Text style={styles.forgotText} onPress={onForgotPassword}>
              Forgot password?
            </Text>
          )
        }
      </View>
    );
  }
}

Form.propTypes = {
  showLabel: PropTypes.bool,
  buttonTitle: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  error: PropTypes.objectOf(PropTypes.object),
  fields: PropTypes.arrayOf(PropTypes.object),
  onForgotPassword: PropTypes.func,
};


Form.defaultProps = {
  showLabel: false,
  buttonTitle: null,
  error: {},
  onForgotPassword: null,
  fields: [{}],
};


export default Form;
