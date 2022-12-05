import { StatusBar } from "expo-status-bar"
import { useState } from "react"
import { StyleSheet, Text, View, FlatList, Button } from "react-native"
import GoalInput from "./components/GoalInput"
import GoalItem from "./components/GoalItem"

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false)
  const [courseGoals, setCourseGoals] = useState([])

  const toggleAddGoalModal = () => {
    setModalIsVisible((prevState) => !prevState)
  }

  const AddGoalHandler = (enteredGoalText) => {
    if (enteredGoalText.trim().length === 0) return
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ])
    setModalIsVisible(false)
  }

  const deleteGoalHandler = (id) => {
    // if the id passed is not the same, return true, keeping the item in the array else false, removing the item.
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals.filter((goal) => goal.id !== id),
    ])

    // function below works the same way as above
    /*
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id)
    })
    */
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          color="#a06de2"
          onPress={toggleAddGoalModal}
        />
        <GoalInput
          showModal={modalIsVisible}
          toggleAddGoalModal={toggleAddGoalModal}
          AddGoalHandler={AddGoalHandler}
        />
        <View style={styles.goalsContainer}>
          {courseGoals.length == 0 && (
            <Text style={styles.noGoals}>No Goals Yet</Text>
          )}
          <FlatList
            data={courseGoals}
            alwaysBounceVertical={false}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  id={itemData.item.id}
                  deleteGoalHandler={deleteGoalHandler}
                />
              )
            }}
            keyExtractor={(item, index) => item.id}
          />
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
    marginTop: 10,
  },
  noGoals: {
    flex: 1,
    textAlign: "center",
    textAlignVertical: "center",
    color: "gray",
    fontSize: 20,
  },
})
