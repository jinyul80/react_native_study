import { useState } from "react";
import { TextInput, View, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

const StartGameScreen = ({ onPickNumberFn }) => {
    const [enteredNumber, setEnteredNumber] = useState("");

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
                ]
            );
            return;
        }

        onPickNumberFn(chosenNumber);
    };

    return (
        <View style={styles.inputContainer}>
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
        </View>
    );
};

export default StartGameScreen;

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 100,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: "#4e0329",
        borderRadius: 8,
        elevation: 4, // Android 그림자 설정
    },
    numberInput: {
        height: 60,
        width: 50,
        fontSize: 32,
        borderBottomColor: "#ddb52f",
        borderBottomWidth: 2,
        color: "#ddb52f",
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
