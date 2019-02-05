import React, { Component } from 'react';
import { Dimensions, StyleSheet, View, Image  } from 'react-native';
import { Screen } from '@shoutem/ui';
import Video from 'react-native-video';

import BaseScreen from './base';

const window = Dimensions.get('window');

export default class VideoBackgroundScreen extends BaseScreen {
	static navigationOptions = {
    ...BaseScreen.navigationOptions,
		headerStyle: {
      backgroundColor: 'transparent'
    }
  };

  render() {
		const { navigate } = this.props.navigation;

		return (
        <Screen>
          <Video source={require('../../assets/background.mp4')}   // Can be a URL or a local file. 
						rate={0.8}                     // 0 is paused, 1 is normal. 
						muted={true}                  // Mutes the audio entirely. 
						//paused={!this.props.isActive}                 // Pauses playback entirely. 
						resizeMode="cover"             // Fill the whole screen at aspect ratio. 
						repeat={true}                  // Repeat forever. 
						playInBackground={false}       // Audio continues to play when app entering background. 
						playWhenInactive={false}       // [iOS] Video continues to play when control or notification center are shown. 
						progressUpdateInterval={250.0} // [iOS] Interval to fire onProgress (default to ~250ms) 
						style={styles.backgroundVideo} />

					<Image source={require('../../assets/video-noise.png')} style={{...styles.backgroundImage, 
						resizeMode:'stretch',
						width:window.width,
						height:window.height+64
					}}/>
					
					{this.renderContents()}
        </Screen>			
		)
	}

}

const styles = {
  backgroundVideo: {
    position: 'absolute',
    top: -64,
    left: 0,
    bottom: 0,
		right: 0,
	},
	backgroundImage: {
    position: 'absolute',
    top: -64,
    left: 0,
    bottom: 0,
		right: 0,
  }
}