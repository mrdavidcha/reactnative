import React, { Component } from 'react';
import { AppRegistry, Text, View, Button } from 'react-native';
import Styles from './index.iosStyles';
import Helpers from './ios/containers/helpers';

export default class reactNativePractice extends Component {

	render() {
		const text = 'Hey';
		
		return (
			<View style={Styles.container}>
				<Text style={Styles.welcome}>
					Welcome!
				</Text>
				<Button
					onPress={() => Helpers.handleAlertButtonClick(text)}
					title="Click Me"
					accessibilityLabel="See an informative alert"
				/>
			</View>
		);
	}
}

AppRegistry.registerComponent('reactNativePractice', () => reactNativePractice);
