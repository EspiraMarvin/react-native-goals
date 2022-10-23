import { StyleSheet, Text, View, Pressable } from "react-native"

export default function GoalItem({ id, text, deleteGoalHandler }) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#210644" }}
        onPress={deleteGoalHandler.bind(this, id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        {/* below is an alternative to bind(), bind method allows us to preconfigure a function for future execution. Takes 2 args, this & the parameter to be passed to the fn for future execution */}
        {/* <Pressable onPress={() => deleteGoalHandler(id)}>  */}
        <Text style={styles.goalText}>{text}</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "white",
    padding: 8,
  },
  pressedItem: {
    opacity: 0.5,
  },
})
