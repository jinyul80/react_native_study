import { View, Text } from "react-native";

const MealItem = ({ title }) => {
    console.log("MealItem rendered", title);
    return (
        <View>
            <Text>{title}</Text>
        </View>
    );
};

export default MealItem;
