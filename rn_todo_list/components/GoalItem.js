import { StyleSheet, View, Text, Pressable } from "react-native";

const GoalItem = (props) => {
    return (
        <Pressable
            android_ripple={{ color: "#cfccd3" }}
            style={({ pressed }) => pressed && styles.pressedItem}
            onPress={props.onDeleteFn}
        >
            <View style={styles.goalItem}>
                <Text style={styles.goalText}>{props.text}</Text>
            </View>
        </Pressable>
    );
};

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: "#5e0acc",
    },
    pressedItem: {
        opacity: 0.5,
    },
    goalText: {
        padding: 8,
        color: "white",
    },
});
