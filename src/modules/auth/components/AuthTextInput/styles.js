import { StyleSheet } from 'react-native';
import { theme } from '../../index';

const { color, window, font, placeholderTextColor } = theme;

const styles = StyleSheet.create({
  container: {
    marginBottom: 10
  },
  errorText: {
    color: color.error
  },
  placeholderTextColor,
  inputStyle: {
    fontSize: font.size.regular + 2,
    fontFamily: font.family.bold
  },
  containerStyle: {
    width: window.width - 45
  }
});

export default styles;
