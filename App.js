import { StyleSheet,FlatList, View, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { useState } from 'react';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  function startAddGoalHandler() {
	setIsModalVisible(true);

  }

  function endAddGoalHandler() {
	setIsModalVisible(false);
  }

  function addGoalHandler(enteredGoalText) {
	  setCourseGoals( (currentCourseGoals) => [
		  ...currentCourseGoals,
		  { text: enteredGoalText, id: Math.random().toString() }
	  ]);
  }

  function deleteGoalHandler(id) {
	  setCourseGoals(
		currentCourseGoals => {
			return currentCourseGoals.filter((goal) => goal.id !== id );
		}
	  );
	  endAddGoalHandler();
  }

  return (
	  <>
	  <StatusBar style='light'/>
	  <View style={styles.appContainer}>

	  <Button title='Add Goal' color='#a065ec' onPress={startAddGoalHandler}/>
	  <GoalInput onAddGoal={addGoalHandler} visible={isModalVisible} onCancel={endAddGoalHandler} />
		
		<View style={styles.goalsContainer}>
			<FlatList data={courseGoals}
				alwaysBounceVertical={false}
				renderItem={itemData => {
					return <GoalItem text={ itemData.item.text } 
									onDeleteGoal={deleteGoalHandler}
									id={itemData.item.id}
							/>
				}}
				keyExtractor={(item, index) => {
					return item.id
				}}
				>
		  </FlatList>
		</View>
	  </View>
	  </>
	);
}

const styles = StyleSheet.create({
	appContainer: {
		flex: 1,
		fontFamily: 'serif',
		paddingTop: 50,
		paddingRight: 10,
		paddingLeft: 10
	},
	inputContainer: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		marginBottom: 24,
		borderBottomWidth: 2,
		borderBottomColor: '#cccccc'
	},
	textInput: {
		borderWidth: 1,
		borderColor: '#cccccc',
		width: '70%',
		marginRight: 8,
		padding: 8,
	},
	goalsContainer: {
		flex: 4
	},

});
