import React, { Component } from 'react';
import { View, Text, ListView } from 'react-native';

export default class LsView extends Component {

	render() {
		return(
			<View>
				<ListView
					dataSource={ this.props.dataSource }
					renderRow={ 
							(rowData) => (
								<Text>
									{rowData}
								</Text>
						)
					}
				/>
			</View>
		);
	}

}