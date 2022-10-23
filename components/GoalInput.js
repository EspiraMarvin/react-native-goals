import { useState } from "react"
import { StyleSheet, View, TextInput, Button, Modal, Image } from "react-native"

export default function GoalInput({
  showModal,
  toggleAddGoalModal,
  AddGoalHandler,
}) {
  const [enteredGoalText, setEnteredGoalText] = useState("")

  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText)
  }

  return (
    <Modal visible={showModal} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/goal.png")}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Cancel"
              color="#f31282"
              onPress={() => toggleAddGoalModal()}
            />
          </View>
          <View style={styles.button}>
            <Button
              title="Add Goal"
              onPress={() => {
                AddGoalHandler(enteredGoalText)
                setEnteredGoalText("")
              }}
              color="#8a51d4"
            />
          </View>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column", // default flex direction in react native
    justifyContent: "center",
    alignItems: "center",
    padding: 18,
    backgroundColor: "#311b6b",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "#120438",
    borderRadius: 6,
    width: "100%",
    padding: 12,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 15,
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
})
