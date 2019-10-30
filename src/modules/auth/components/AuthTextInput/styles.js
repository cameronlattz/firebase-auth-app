import { StyleSheet } from 'react-native';
import { theme } from "../../index";

const {
  color,
  window,
  font,
  placeholderTextColor,
} = theme;

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  errorText: {
    color: color.error,
    width: (window.width - 45),
  },
  placeholderTextColor,
  inputStyle: {
    fontSize: font.size.regular + 2,
    fontFamily: font.family.bold,
  },
});

export default styles;
