import { StyleSheet, View, Text } from "react-native";

export default function SignupScreen() {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Sign Up Screen</Text>
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
