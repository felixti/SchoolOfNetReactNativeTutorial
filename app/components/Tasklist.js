import React, { Component } from 'react';
import { View, TextInput, Button, Alert, Text, ListView } from 'react-native';
import LsView from './LsView';

export default class Tasklist extends Component {
	constructor() {
	  super();

      this.ds = new ListView.DataSource({
      		rowHasChanged: (row1, row2) => row1 !== row2
      });

	  this.state = {
	  		todoTxt: '',
	  		todoList: [],
	  		dataSource: this.ds.cloneWithRows([])

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

				<LsView dataSource= { this.state.dataSource } />
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
			todoList: this.state.todoList,
			dataSource: this.ds.cloneWithRows(this.state.todoList)
		});
	}
}