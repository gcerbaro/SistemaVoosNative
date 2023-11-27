import { StyleSheet, Text, View } from 'react-native';
import Routes from './components/routes';
import 'react-native-gesture-handler';

export default function App() {
  return (
    <Routes/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
