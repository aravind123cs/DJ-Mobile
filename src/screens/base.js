import React from 'react';
// import { themeVariables } from '~/src/ui/styles';
import { Screen } from '@shoutem/ui';

import { Dimensions, StyleSheet, View, Image } from 'react-native';


export default class BaseScreen extends React.PureComponent {
	static navigationOptions = {
    headerStyle: {
    //   backgroundColor: themeVariables.navBarBackground,
		},
		title: <Image source={require('../../assets/logo.png')} resizeMode="cover" style={{ width:30, height:26 }} />
  };

  render() {
	  console.log('098909890989098909')
	  console.log(this)
		return (
        <Screen>
					{this.renderContents()}
        </Screen>
		)
	}

	render(){
		return null;
	}
}