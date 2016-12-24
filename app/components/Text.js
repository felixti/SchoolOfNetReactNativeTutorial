import React, { Component } from 'react';
import { Text } from 'react-native';

export default class TextComponent extends Component {
	constructor() {
	  super();
	}

	render(){
		return (
			<Text> { this.props.myText } </Text>
		);
	}
}