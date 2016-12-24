import React, { Component } from 'react';
import { Text, Button, View } from 'react-native';

export default class HomePage extends Component {
	constructor() {
		super();
	}

	render() {
		return(
			<View>
				<Text>'Hello this is my home Page'</Text>
				<Button onPress={this.goToMyAboutPage} title="go to my about page"></Button>
				<Button onPress={this.goToMyTasklist} title="Tasklist"></Button>
			</View>
		);
	}

	goToMyAboutPage = () => {
		this.props.navigator.push({
			name: 'About',
			title: 'About',
			passProps: {
				data: {
					name: 'Felipe',
					lastName: 'Felix',
					Age: 25
				}
			}
		});
	}

	goToMyTasklist = () => {
		this.props.navigator.push({
			name: 'Task',
			title: 'Task',
			passProps: {}
		});
	}
}