import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class AboutPage extends Component {
	constructor() {
		super();
	}

	render() {
		let data = JSON.stringify(this.props.data);
		return(
			<View>
				<Text>'Helllo this is my about Page'</Text>
				<Text> { data }</Text>
			</View>
		);
	}
}