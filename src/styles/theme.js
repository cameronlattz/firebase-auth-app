import { Dimensions, Platform } from 'react-native';
import { moderateScale as normalize } from 'react-native-size-matters';

const color = {
  black: '#3B3031',
  light_black: '#414141',
  button: '#3fa5ff',
  primary: '#f6f6f6',
  white: '#ffffff',
  light_gray: '#eae9ef',
  gray: '#ccc',
  error: 'red',
  secondary: '#ff553f'
};

const font = {
  family: {
    bold: 'UbuntuBold',
    medium: 'UbuntuMedium',
    regular: 'UbuntuRegular',
    light: 'UbuntuLight',
    italic: 'UbuntuItalic'
  },
  size: {
    small: normalize(12),
    regular: normalize(14),
    large: normalize(21),
    largest: normalize(26)
  }
};

const tabColor = Platform.OS === 'ios' ? 'rgba(73,75,76, .5)' : 'rgba(255,255,255,.8)';
const selectedTabColor = Platform.OS === 'ios' ? 'rgb(73,75,76)' : '#fff';
const tab = {
  color: tabColor,
  selected: {
    color: selectedTabColor
  },
  icon: {
    size: 21,
    color: tabColor,
    selected: {
      color: selectedTabColor
    }
  }
};

const input = {
  placeholderTextColor: color.gray,
  underLineColorAndroid: color.white,
  icon: {
    size: Math.round(font.size.largest),
    style: {
      marginLeft: -20,
      width: 40,
      textAlign: 'center'
    },
    color: color.black
  }
};

const button = {
  color: color.white,
  backgroundColor: color.button,
  icon: {
    style: {
      marginRight: 5
    },
    size: Math.round(font.size.large)
  }
};

const padding = 8;
const window = {
  height: Dimensions.get('window').height,
  width: Dimensions.get('window').width
};

const appName = 'Firebase Auth App';

export { color, tab, input, font, window, padding, normalize, button, appName };
