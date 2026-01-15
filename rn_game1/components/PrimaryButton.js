import { View, Text, Pressable, StyleSheet } from "react-native";

const PrimaryButton = ({ children, onPressFn }) => {
    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable
                style={({ pressed }) =>
                    pressed
                        ? [styles.buttonInnerContainer, styles.pressed]
                        : styles.buttonInnerContainer
                }
                onPress={onPressFn}
                android_ripple={{ color: "#b80860" }}
            >
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    );
};

export default PrimaryButton;

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: "hidden",
    },
    buttonInnerContainer: {
        backgroundColor: "#72063c",
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 4,
    },
    buttonText: { color: "white", textAlign: "center" },
    pressed: {
        opacity: 0.75,
    },
});
