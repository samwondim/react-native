import { Button,StyleSheet, View, TextInput, Modal, Image} from "react-native";
import { useState } from "react";

export default function GoalInput(props) {
	const [enteredGoalText, setEnteredGoalText] = useState('');
  
	function goalInputHandler(enteredGoalText) {
		setEnteredGoalText(enteredGoalText);
	}
	
	function addGoalHandler() {
		props.onAddGoal(enteredGoalText);
		setEnteredGoalText('');
	}

	return (
		<Modal visible={ props.visible } animationType="slide">
		<View style={styles.inputContainer}>
		<Image style={styles.image} source = { require('../assets/images/goal.jpg') } />
			<TextInput style={styles.textInput}
				onChangeText={goalInputHandler}
				placeholder="Your course goal..."
				value={enteredGoalText}	
			/>		
			<View style={styles.buttonContainer}>
			<View style={styles.button}>

			<Button color='#5e0acc' title='add goal' onPress={addGoalHandler}/>
			</View>	
			<View style={styles.button}>

			<Button color='#f31282' title='cancel' onPress={props.onCancel}/>
			</View>	
			</View>
		</View>
		</Modal>
	)
}

const styles = StyleSheet.create({
	inputContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 16,
		backgroundColor: '#fbfbfb'
	},
	textInput: {
		borderWidth: 1,
		borderColor: '#cccccc',
		width: '100%',
		backgroundColor: '#e4d0ff',
		borderColor: '#e4d0ff',
		color: '#120438',
		borderRadius: 6,
		padding: 16,
	},
	buttonContainer: {
		flexDirection: 'row',
		marginTop: 25,
		justifyContent: 'space-between'
	},
	button: {
		marginRight: 8,
		width: '30%'
	},
	image: {
		width: 100,
		height: 100,
		margin: 10
	}
});
