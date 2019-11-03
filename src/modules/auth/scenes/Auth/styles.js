import { StyleSheet } from 'react-native';
import { theme } from '../../index';

const { padding, color, font, window, normalize } = theme;

const resizeMode = 'contain';

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: '9%'
  },

  formHeader: {
    fontSize: font.size.largest,
    lineHeight: font.size.largest + 2,
    fontFamily: font.family.bold,
    color: color.black,
    letterSpacing: 1,
    marginBottom: '4%'
  },

  container: {
    flex: 1,
    backgroundColor: color.white
  },

  topContainer: {
    flex: 1,
    paddingHorizontal: 15,
    paddingBottom: padding * 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.color.secondary
  },

  image: {
    height: 100,
    width: 100,
    backgroundColor: color.gray,
    marginBottom: padding,
    resizeMode
  },

  title: {
    fontSize: font.size.largest,
    lineHeight: font.size.largest + 2,
    fontFamily: font.family.bold,
    color: color.white,
    letterSpacing: 1
  },

  subText: {
    color: color.secondary,
    fontSize: font.size.large,
    lineHeight: font.size.large + 10,
    marginVertical: padding * 2
  },

  bottomContainer: {
    backgroundColor: color.white,
    paddingVertical: padding * 3,
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0
    },
    width: window.width,
    paddingLeft: '15%',
    paddingRight: '15%'
  },

  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: padding,
    width: '100%'
  },

  button: {
    backgroundColor: theme.button.backgroundColor,
    height: normalize(55),
    borderRadius: 4,
    width: '100%'
  },
  buttonText: {
    color: theme.button.color
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: padding
  },

  bottomText: {
    fontSize: font.size.regular,
    fontFamily: font.family.medium,
    marginRight: 5,
    color: color.light_black
  },

  signInText: {
    fontSize: font.size.regular,
    color: theme.color.secondary,
    fontFamily: font.family.medium
  },

  orContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: window.width
  },

  divider: {
    backgroundColor: '#D0D5DA',
    position: 'absolute',
    top: 19,
    left: 20,
    right: 20
  },

  orText: {
    backgroundColor: color.white,
    fontSize: font.size.regular,
    fontFamily: font.family.medium,
    color: color.light_black,
    paddingHorizontal: padding
  }
});

export default styles;
