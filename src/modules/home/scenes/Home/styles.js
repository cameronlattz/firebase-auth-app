import { StyleSheet } from 'react-native';
import { theme } from '../../index';

const { padding, window, color, font } = theme;

const styles = StyleSheet.create({
  navHeader: {
    fontSize: font.size.large,
    color: color.white,
    width: window.width * 0.67,
    textAlign: 'center'
  },
  navItem: {
    backgroundColor: theme.color.primary
  },
  navItemText: {
    color: color.black
  },
  container: {
    flex: 1,
    marginTop: theme.statusBarHeight
  },
  drawerContentContainer: {
    flex: 1,
    backgroundColor: theme.color.primary
  },
  bottomContainer: {
    backgroundColor: theme.color.white,
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
  }
});

export default styles;
