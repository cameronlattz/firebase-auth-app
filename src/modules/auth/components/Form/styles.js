import { StyleSheet } from 'react-native';
import { theme } from "../../index";

const {
  color,
  padding,
  window,
  normalize,
  font,
} = theme;

const styles = StyleSheet.create({
  errorText: {
    color: color.error,
    width: (window.width - 45),
    marginTop: 20,
  },
  button: {
    backgroundColor: theme.button.backgroundColor,
    height: normalize(55),
  },
  buttonText: {
    fontSize: font.size.regular + 2,
    fontFamily: font.family.medium,
  },
  forgotText: {
    textAlign: "center",
    color: color.black,
    marginBottom: padding,
    fontSize: font.size.regular,
    fontFamily: font.family.medium,
    marginTop: padding,
  },
  containerView: {
    marginTop: 10,
  },
});


export default styles;