import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, ImageBackground } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import Colors from "./constants/colors";

export default function App() {
    const [userNumber, setUserNumber] = useState(null);

    const pickedNumberHandler = (pickedNumber) => {
        setUserNumber(pickedNumber);
    };

    return (
        <SafeAreaProvider>
            <LinearGradient
                style={styles.rootScreen}
                colors={[Colors.primary700, Colors.accent500]}
            >
                <StatusBar style="auto" />
                <ImageBackground
                    source={require("./assets/images/background.png")}
                    resizeMode="cover"
                    style={styles.rootScreen}
                    imageStyle={styles.backgroundImage}
                >
                    <SafeAreaView style={styles.rootScreen}>
                        {userNumber ? (
                            <GameScreen userNumber={userNumber} />
                        ) : (
                            <StartGameScreen
                                onPickNumberFn={pickedNumberHandler}
                            />
                        )}
                    </SafeAreaView>
                </ImageBackground>
            </LinearGradient>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    rootScreen: {
        flex: 1,
    },
    backgroundImage: {
        opacity: 0.15,
    },
});
