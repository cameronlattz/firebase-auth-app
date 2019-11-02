import { Dimensions, Platform, StatusBar } from 'react-native';
import { moderateScale as normalize } from 'react-native-size-matters';

const color = {
  black: "#3B3031",
  light_black: "#414141",
  main: "rgb(99,139,250)",
  white: "#ffffff",
  light_gray: "#eaeaea",
  gray: "#ccc",
  error: "red",
  underlayColor: "#ddd",
};

const font = {
  family: {
    bold: "UbuntuBold",
    medium: "UbuntuMedium",
    regular: "UbuntuRegular",
    light: "UbuntuLight",
    italic: "UbuntuItalic",
  },
  size: {
    small: normalize(12),
    regular: normalize(14),
    large: normalize(21),
    largest: normalize(26),
  },
};

const tabColor = (Platform.OS === "ios") ? "rgba(73,75,76, .5)" : "rgba(255,255,255,.8)";
const selectedTabColor = (Platform.OS === "ios") ? "rgb(73,75,76)" : "#fff";
const tab = {
  color: tabColor,
  selected: {
    color: selectedTabColor,
  },
  icon: {
    size: 21,
    color: tabColor,
    selected: {
      color: selectedTabColor,
    },
  },
};

const input = {
  placeholderTextColor: color.gray,
  underLineColorAndroid: color.white,
  icon: {
    size: Math.round(font.size.largest),
    style: {
      marginLeft: -20,
      width: 40,
      textAlign: "center",
    },
    color: color.black,
  },
};

const button = {
  color: color.white,
  backgroundColor: color.main,
  icon: {
    style: {
      marginRight: 5,
    },
    size: Math.round(font.size.large),
  },
};

const padding = 8;
const window = {
  height: Dimensions.get('window').height,
  width: Dimensions.get('window').width,
};

const navTitleStyle = {
  fontSize: font.size.regular,
  fontFamily: font.family.extrabold,
  color: color.black
};

const statusBarHeight = Platform.OS === 'android' ? StatusBar.currentHeight : 0;

export {
  color,
  tab,
  input,
  font,
  window,
  padding,
  statusBarHeight,
  navTitleStyle,
  normalize,
  button
};
