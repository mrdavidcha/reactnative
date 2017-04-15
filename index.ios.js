import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import Styles from './index.iosStyles';

export default class reactNativePractice extends Component {
	render() {
		return (
			<View style={Styles.container}>
				<Text style={Styles.welcome}>
					Welcome!
				</Text>
				<Text style={Styles.instructions}>
					To get started, edit index.ios.js
				</Text>
				<Text style={Styles.instructions}>
					Press Cmd+R to reload,{'\n'}
					Cmd+D or shake for dev menu o
				</Text>
			</View>
		);
	}
}

AppRegistry.registerComponent('reactNativePractice', () => reactNativePractice);
