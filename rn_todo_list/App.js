import { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
    const [courseGoals, setCourseGoals] = useState([]);

    const addGoalHandler = (enteredGoalText) => {
        setCourseGoals((currentCourseGoals) => [
            ...currentCourseGoals,
            { text: enteredGoalText, id: Math.random().toString() },
        ]);
    };

    const deleteGoalHandler = (id) => {
        setCourseGoals((currentCourseGoals) =>
            currentCourseGoals.filter((goal) => goal.id !== id)
        );
    };

    return (
        <View style={styles.appContainer}>
            {/* Goal 입력 영역 */}
            <GoalInput onAddGoal={addGoalHandler} />

            {/* Todo 리스트 출력 영역 */}
            <View style={styles.goalsContainer}>
                <FlatList
                    data={courseGoals}
                    renderItem={(itemData) => {
                        return (
                            <GoalItem
                                text={itemData.item.text}
                                onDeleteFn={() =>
                                    deleteGoalHandler(itemData.item.id)
                                }
                            />
                        );
                    }}
                    keyExtractor={(item, index) => {
                        return item.id;
                    }}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 16,
    },
    goalsContainer: {
        flex: 5,
    },
});
