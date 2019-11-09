import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import { input as inputStyle } from '../../../../styles/theme';

class AuthTextInput extends Component {
  render() {
    const {
      autoFocus,
      showLabel,
      placeholder,
      onChangeText,
      textContentType,
      secureTextEntry,
      placeholderTextColor,
      keyboardType,
      error,
      label,
      value,
      iconName,
      includeLinks,
      editable,
      multiline,
      autoCorrect,
      autoCompleteType,
      containerStyle
    } = this.props;
    const input = React.createRef();

    function onIconPressHandler() {
      input.current.focus();
    }

    function isSecureType() {
      return textContentType === 'password' || textContentType === 'newPassword';
    }

    return (
      <View style={styles.container}>
        <Input
          ref={input}
          autoCompleteType={autoCompleteType}
          autoFocus={autoFocus}
          label={showLabel && label}
          showLabel={showLabel}
          leftIcon={
            iconName && (
              <Icon
                name={iconName}
                size={inputStyle.icon.size}
                color={inputStyle.icon.color}
                style={inputStyle.icon.style}
                onPress={onIconPressHandler}
              />
            )
          }
          placeholder={placeholder}
          errorStyle={styles.errorText}
          inputStyle={styles.inputStyle}
          containerStyle={containerStyle || styles.containerStyle}
          errorMessage={error}
          defaultValue={value}
          autoCapitalize="none"
          clearButtonMode="while-editing"
          underlineColorAndroid={styles.underlineColorAndroid}
          onChangeText={onChangeText}
          keyboardType={keyboardType}
          placeholderTextColor={placeholderTextColor || inputStyle.placeholderTextColor}
          secureTextEntry={isSecureType() || secureTextEntry}
          textContentType={textContentType}
          dataDetectorTypes={includeLinks ? 'link' : 'none'}
          editable={editable}
          multiline={multiline}
          autoCorrect={autoCorrect}
        />
      </View>
    );
  }
}

AuthTextInput.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  autoFocus: PropTypes.bool,
  placeholder: PropTypes.string,
  placeholderTextColor: PropTypes.string,
  keyboardType: PropTypes.string,
  onChangeText: PropTypes.func.isRequired,
  secureTextEntry: PropTypes.bool,
  value: PropTypes.string,
  error: PropTypes.string,
  showLabel: PropTypes.bool,
  textContentType: PropTypes.string,
  iconName: PropTypes.string,
  autoCompleteType: PropTypes.string,
  includeLinks: PropTypes.bool,
  editable: PropTypes.bool,
  multiline: PropTypes.bool,
  autoCorrect: PropTypes.bool,
  containerStyle: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object])
  )
};

AuthTextInput.defaultProps = {
  autoFocus: false,
  label: '',
  secureTextEntry: false,
  placeholder: '',
  placeholderTextColor: null,
  keyboardType: 'default',
  value: '',
  error: ' ',
  showLabel: true,
  textContentType: 'none',
  iconName: null,
  autoCompleteType: null,
  includeLinks: false,
  editable: true,
  multiline: false,
  autoCorrect: true,
  containerStyle: null
};

export default AuthTextInput;
