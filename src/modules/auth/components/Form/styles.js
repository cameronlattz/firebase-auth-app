import { StyleSheet } from 'react-native';
import { button, color, padding, window, normalize, font } from '../../../../styles/theme';

const styles = StyleSheet.create({
  generalErrorText: {
    color: color.error,
    marginBottom: 20,
    fontSize: font.size.regular + 2,
    textAlign: 'center',
    width: window.width - 45
  },
  errorText: {
    color: color.error,
    marginTop: 20
  },
  button: {
    backgroundColor: button.backgroundColor,
    height: normalize(55)
  },
  buttonText: {
    fontSize: font.size.regular + 2,
    fontFamily: font.family.medium
  },
  forgotText: {
    textAlign: 'center',
    color: color.black,
    marginBottom: padding,
    fontSize: font.size.regular,
    fontFamily: font.family.medium,
    marginTop: padding
  },
  containerView: {
    marginTop: 10
  }
});

export default styles;
