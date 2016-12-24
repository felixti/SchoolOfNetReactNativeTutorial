import React, { Component } from 'react';
import { View, TextInput, Button, Alert, Text } from 'react-native';

export default class Tasklist extends Component {
	constructor() {
	  super();

	  this.state = {
	  		todoTxt: '',
	  		todoList: []
	  }
	}

	render() {
		return (
			<View>
				<TextInput
					value={ this.state.todoTxt }
					onChangeText={ this.handleChange }
				/>

				<Button title="New Todo"
					onPress={this.save}>
				</Button>

				<View>
				 { this.state.todoList.map((item, key) => (
				 		<Text key={key}>
				 			{item}
				 		</Text>
				 	)) }
				</View>
			</View>
		);
	}

	handleChange = (txt) => {
		this.setState({
			todoTxt : txt
		});
	}

	save = () => {

		if(!this.state.todoTxt){
			Alert.alert('Opss!', 'Please fill in task');
		}

		this.state.todoList.push(this.state.todoTxt);

		this.setState({
			todoTxt: '',
			todoList: this.state.todoList
		});
	}
}