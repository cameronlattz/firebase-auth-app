import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  icon: {
    marginRight: 5,
    marginLeft: 5
  }
});

const RightButtons = props => {
  const { onPressHandler, iconName } = props;
  return (
    <TouchableOpacity onPress={onPressHandler} style={styles.icon} key={iconName}>
      <Icon size={32} name={iconName} />
    </TouchableOpacity>
  );
};

RightButtons.propTypes = {
  onPressHandler: PropTypes.func,
  iconName: PropTypes.string
};

RightButtons.defaultProps = {
  onPressHandler: null,
  iconName: 'priority-high'
};

export default RightButtons;
