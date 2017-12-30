import React, { Component, } from 'react'
import { 
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity } from 'react-native'

class Component1 extends Component {

  static propTypes = {}

  static defaultProps = {}

  constructor(props) {
    super(props)
    this.state = {
      name: "Aakanshu",
      message: this.props.message
    }
  }
static defaultProps = {
  message: "Hi there!"
}
  render() {
    return (
      <View>
        <Text>
          {this.state.message} {this.state.name}
        </Text>
      </View>
    );
  }
}

export default Component1