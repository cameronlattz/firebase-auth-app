import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  icon: {
    marginRight: 5,
    marginLeft: 5,
    padding: 10
  }
});

const NavButton = props => {
  const { onPressHandler, iconName } = props;
  return (
    <TouchableOpacity onPress={onPressHandler} style={styles.icon} key={iconName}>
      <Icon size={32} name={iconName} />
    </TouchableOpacity>
  );
};

NavButton.propTypes = {
  onPressHandler: PropTypes.func,
  iconName: PropTypes.string
};

NavButton.defaultProps = {
  onPressHandler: null,
  iconName: 'priority-high'
};

export default NavButton;
