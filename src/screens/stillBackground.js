import React, { Component } from 'react';
import { Dimensions, StyleSheet, View, Image } from 'react-native';
import { Screen } from '@shoutem/ui';
import Video from 'react-native-video';
import {ImageBackground,  ScrollView} from 'react-native';
const window = Dimensions.get('window');

export default class StillBackgroundScreen extends Component {


  render() {
    // const { navigate } = this.props.navigation;
    console.log('this.props')
    console.log(this.props)
    return (
      <View style={{ flex: 1 }}>
        <ImageBackground
          resizeMode={'stretch'}
          style={{ flex: 1 }}
          source={require('../../assets/stillBackground.png')}
        >
        {this.props.children}
        </ImageBackground>
      </View>
    )
  }

}

const styles = {
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
		right: 0,
  }
}