import { StyleSheet, View, Text } from "react-native";

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Settings Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize:22,
    fontWeight: "bold"
  }
});
