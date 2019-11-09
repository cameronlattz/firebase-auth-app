import { StyleSheet } from 'react-native';
import { color, window, font } from '../../../../styles/theme';

const styles = StyleSheet.create({
  container: {
    marginBottom: 10
  },
  errorText: {
    color: color.error
  },
  inputStyle: {
    fontSize: font.size.regular + 2,
    fontFamily: font.family.bold
  },
  containerStyle: {
    width: window.width - 45
  }
});

export default styles;
