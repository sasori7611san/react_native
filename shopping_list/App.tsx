import { StyleSheet, Text, View } from 'react-native';

import HeaderPlace from './components/Organisms/HeaderPlace';
import BuyList from './components/Organisms/BuyList';
import PurchasedList from './components/Organisms/PurchasedList';
import InputPlace from './components/Organisms/InputPlace';

export default function App(): JSX.Element {
  return (
    <View style={styles.container}>
      <HeaderPlace />
      <InputPlace />
      <View>
        <Text>買うもの</Text>
        <BuyList />
        <Text>購入済み</Text>
        <PurchasedList />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
});
