import { StyleSheet, Pressable, Text, View } from "react-native"

export default function GoalItem(props) {
	
	// function onDeleteGoalHandler() {
	// 	props.deleteGoalHandler();
	// }

	return (
			<View style={styles.goalItem}>
		<Pressable android_ripple={{ color: '#cccccc' }} onPress={props.onDeleteGoal.bind(this, props.id)}>
				<Text style={styles.goalText}>{props.text}</Text>
		</Pressable>
			</View>
		);
}

const styles = StyleSheet.create({
	goalItem: {
		margin: 8,
		borderRadius: 6,
		backgroundColor: '#5a0acc'
	},
	goalText: {
		color: '#fff',
		padding: 8,
		fontSize: 16
	}
});

