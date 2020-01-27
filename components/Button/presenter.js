import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

class Button extends Component {
  static propTypes = {
    iconName: PropTypes.string.isRequired
  };
  render() {
    const { iconName, onPress } = this.props;
    return (
      <TouchableOpacity onPress={onPress}>
        <View style={styles.container}>
          <Icon name={iconName} size={40} color="#CE0B24" />
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: 80,
    width: 80,
    borderRadius: 50,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 5
  }
});

export default Button;