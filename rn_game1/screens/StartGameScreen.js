import { useState } from "react";
import {
    TextInput,
    View,
    StyleSheet,
    Alert,
    useWindowDimensions,
} from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import Colors from "../constants/colors";
import Title from "../components/Title";
import Card from "../components/Card";
import InstructionText from "../components/InstructionText";

const StartGameScreen = ({ onPickNumberFn }) => {
    const [enteredNumber, setEnteredNumber] = useState("");

    // 가로, 세로 변환 시 기기의 크기 정보 업데이트
    const { width, height } = useWindowDimensions();

    const numberInputHandler = (inputText) => {
        setEnteredNumber(inputText);
    };

    const resetInputHandler = () => {
        setEnteredNumber("");
    };

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredNumber);

        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert(
                "Invalid number",
                "Please enter a number between 1 and 99.",
                [
                    {
                        text: "Try again",
                        style: "destructive",
                        onPress: resetInputHandler,
                    },
                ],
            );
            return;
        }

        onPickNumberFn(chosenNumber);
    };

    const marginTopValue = height < 500 ? 30 : 100;

    return (
        <View style={[styles.rootContainer, { marginTop: marginTopValue }]}>
            <Title>Guess My Number</Title>
            <Card>
                <InstructionText>Enter a Number</InstructionText>
                <TextInput
                    style={styles.numberInput}
                    maxLength={2}
                    keyboardType="number-pad"
                    onChangeText={numberInputHandler}
                    value={enteredNumber}
                />
                <View style={styles.buttonsContainer}>
                    <View style={styles.button}>
                        <PrimaryButton onPressFn={resetInputHandler}>
                            Reset
                        </PrimaryButton>
                    </View>
                    <View style={styles.button}>
                        <PrimaryButton onPressFn={confirmInputHandler}>
                            Confirm
                        </PrimaryButton>
                    </View>
                </View>
            </Card>
        </View>
    );
};

export default StartGameScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        alignItems: "center",
    },
    numberInput: {
        height: 60,
        width: 50,
        fontSize: 32,
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        color: Colors.accent500,
        marginVertical: 8,
        fontWeight: "bold",
        textAlign: "center",
    },
    buttonsContainer: {
        flexDirection: "row",
    },
    button: {
        flex: 1,
    },
});
