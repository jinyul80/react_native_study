import { useState, useEffect } from "react";
import { View, StyleSheet, Alert, FlatList, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import NumberContainer from "../components/game/NumberContainer";
import Title from "../components/Title";
import PrimaryButton from "../components/PrimaryButton";
import InstructionText from "../components/InstructionText";
import Card from "../components/Card";
import GeussLogItem from "../components/game/GuessLogItem";

const generateRandomBetween = (min, max, exclude) => {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
};

let minBoundary = 1;
let maxBoundray = 100;

const GameScreen = ({ userNumber, onGameOver }) => {
    const initialGuess = generateRandomBetween(1, 100, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [guessRounds, setGuessRounds] = useState([initialGuess]);

    useEffect(() => {
        if (currentGuess == userNumber) {
            onGameOver(guessRounds.length);
        }
    }, [currentGuess, userNumber]);

    useEffect(() => {
        minBoundary = 1;
        maxBoundray = 100;
    }, []);

    const nextGuessHandler = (direction) => {
        if (
            (direction == "lower" && currentGuess < userNumber) ||
            (direction == "greater" && currentGuess > userNumber)
        ) {
            Alert.alert("Don't lie!!!", "You know that this is wrong...", [
                { text: "Sorry!", style: "cancel" },
            ]);
            return;
        }
        if (direction == "lower") {
            maxBoundray = currentGuess;
        } else {
            minBoundary = currentGuess + 1;
        }

        const newRndNumber = generateRandomBetween(
            minBoundary,
            maxBoundray,
            currentGuess,
        );

        setCurrentGuess(newRndNumber);
        setGuessRounds((prevGuessRounds) => [newRndNumber, ...prevGuessRounds]);
    };

    const guessRoundsListLength = guessRounds.length;

    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card>
                <InstructionText style={styles.instructionText}>
                    Higher or lower?
                </InstructionText>
                <View style={styles.buttonsContainer}>
                    <View style={styles.button}>
                        <PrimaryButton
                            onPressFn={nextGuessHandler.bind(this, "lower")}
                        >
                            <Ionicons name="remove" size={24} color="white" />
                        </PrimaryButton>
                    </View>
                    <View style={styles.button}>
                        <PrimaryButton
                            onPressFn={nextGuessHandler.bind(this, "greater")}
                        >
                            <Ionicons name="add" size={24} color="white" />
                        </PrimaryButton>
                    </View>
                </View>
            </Card>
            <View style={styles.listContainer}>
                <FlatList
                    data={guessRounds}
                    renderItem={(itemData) => (
                        <GeussLogItem
                            roundNumber={guessRoundsListLength - itemData.index}
                            guess={itemData.item}
                        />
                    )}
                    keyExtractor={(item) => item}
                />
            </View>
        </View>
    );
};

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
    },
    instructionText: {
        marginBottom: 12,
    },
    buttonsContainer: {
        flexDirection: "row",
    },
    button: {
        flex: 1,
    },
    listContainer: {
        flex: 1,
        padding: 16,
    },
});
