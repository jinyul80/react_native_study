import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import CategoriesScreen from "./screens/CategoriesScreen";

export default function App() {
  return (
      <SafeAreaProvider>
          <StatusBar style="light" />
          <SafeAreaView style={styles.rootScreen}>
              <CategoriesScreen />
          </SafeAreaView>
      </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
    rootScreen: { flex: 1 },
});
