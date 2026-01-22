import { Text, StyleSheet } from "react-native";
import Colors from "../constants/colors";

// 계단식 스타일 적용하기
const InstructionText = ({ children, style }) => {
    return <Text style={[styles.instructionText, style]}>{children}</Text>;
};

export default InstructionText;

const styles = StyleSheet.create({
    instructionText: {
        color: Colors.accent500,
        fontFamily: "OpenSans-Regular",
        fontSize: 24,
    },
});
