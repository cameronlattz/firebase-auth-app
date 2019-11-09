import { StyleSheet } from 'react-native';
import { button, color, padding, window, normalize, font } from '../../../../styles/theme';

const styles = StyleSheet.create({
  navHeader: {
    backgroundColor: color.primary,
    borderBottomColor: color.light_gray,
    borderBottomWidth: 0,
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0
    },
    elevation: 2
  },
  navCenterComponent: {
    width: window.width * 0.68,
    fontSize: font.size.large,
    color: color.black,
    textAlign: 'center',
    fontFamily: font.family.medium
  },
  navItem: {
    backgroundColor: 'transparent',
    width: window.width * 0.68,
    paddingTop: 10,
    paddingBottom: 10
  },
  navItemText: {
    color: color.black,
    textAlign: 'center',
    fontSize: font.size.regular,
    fontFamily: font.family.medium
  },
  container: {
    flex: 1,
    paddingLeft: '5%',
    paddingRight: '5%',
    paddingTop: '2%'
  },
  drawerContentContainer: {
    flex: 1,
    backgroundColor: color.light_gray
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
    }
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerView: {
    marginTop: 5,
    marginBottom: 5
  },
  button: {
    backgroundColor: button.backgroundColor,
    height: normalize(55)
  },
  buttonText: {
    fontSize: font.size.regular + 2,
    fontFamily: font.family.medium
  },
  inputButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonWithInput: {
    backgroundColor: button.backgroundColor,
    width: 100,
    flex: 0
  },
  inputWithButton: {
    flex: 1,
    width: window.width * 0.9 - 100,
    position: 'relative',
    top: 15
  },
  image: {
    height: 100,
    width: 100
  }
});

export default styles;
