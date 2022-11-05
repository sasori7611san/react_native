import { StyleSheet, Text, View } from 'react-native';

export default function InputPlace(): JSX.Element {
  return (
    <>
      <View>
        <View style={styles.inputStoreName}>
          <Text style={styles.storeNameLabel}>店名：</Text>
          <Text style={styles.inputStoreNameWindow}></Text>
        </View>
        <Text style={styles.inputItemName}>買うものを入力</Text>
        <View style={styles.registration}>
          <Text style={styles.registrationBtn}>登録</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  inputStoreName: {
    flexDirection: 'row',
    marginTop: 8,
  },
  storeNameLabel: {
    paddingLeft: 16,
    paddingVertical: 8,
  },
  inputStoreNameWindow: {
    paddingLeft: 72,
    width: '80%',
    marginVertical: 8,
    borderWidth: 1,
    backgroundColor: '#ffffff',
  },
  inputItemName: {
    marginVertical: 8,
    marginHorizontal: 16,
    width: '91%',
    borderWidth: 1,
    backgroundColor: '#ffffff',
    fontSize: 12,
    color: '#898989',
  },
  registration: {
    alignItems: 'flex-end',
    marginRight: 16,
  },
  registrationBtn: {
    width: 64,
    height: 32,
    fontSize: 16,
    textAlign: 'center',
    textAlignVertical: 'center',
    borderWidth: 1,
    backgroundColor: '#ff6565',
  },
});
