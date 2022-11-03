import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.appbar}>
        <Text style={styles.appbarInner}>買い物リスト</Text>
        <Text style={styles.appbarRight}>Menu</Text>
      </View>
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
      <View>
        <Text>買うもの</Text>
        <View style={styles.buyListItem}>
          <Text style={styles.buyListItemName}>ほうれん草</Text>
          <View style={styles.buyListItemBottomLine}>
            <Text style={styles.buyListItemBottom}>底値：98円</Text>
            <Text style={styles.buyListItemBayBtn}>購入</Text>
            <Text style={styles.buyListItemDelBtn}>削除</Text>
          </View>
        </View>
        <View style={styles.buyListItem}>
          <Text style={styles.buyListItemName}>ほうれん草</Text>
          <View style={styles.buyListItemBottomLine}>
            <Text style={styles.buyListItemBottom}>底値：98円</Text>
            <Text style={styles.buyListItemBayBtn}>購入</Text>
            <Text style={styles.buyListItemDelBtn}>削除</Text>
          </View>
        </View>
        <View style={styles.buyListItem}>
          <Text style={styles.buyListItemName}>ほうれん草</Text>
          <View style={styles.buyListItemBottomLine}>
            <Text style={styles.buyListItemBottom}>底値：98円</Text>
            <Text style={styles.buyListItemBayBtn}>購入</Text>
            <Text style={styles.buyListItemDelBtn}>削除</Text>
          </View>
        </View>

        <Text>購入済み</Text>
        <View style={styles.buyListItem}>
          <Text style={styles.buyListItemName}>ほうれん草</Text>
          <View style={styles.buyListItemBottomLine}>
            <Text style={styles.buyListItemBottom}>底値：98円</Text>
            <Text style={styles.buyListItemBayBtn}>戻す</Text>
            <Text style={styles.buyListItemDelBtn}>削除</Text>
          </View>
        </View>
        <View style={styles.buyListItem}>
          <Text style={styles.buyListItemName}>ほうれん草</Text>
          <View style={styles.buyListItemBottomLine}>
            <Text style={styles.buyListItemBottom}>底値：98円</Text>
            <Text style={styles.buyListItemBayBtn}>戻す</Text>
            <Text style={styles.buyListItemDelBtn}>削除</Text>
          </View>
        </View>
        <View style={styles.buyListItem}>
          <Text style={styles.buyListItemName}>ほうれん草</Text>
          <View style={styles.buyListItemBottomLine}>
            <Text style={styles.buyListItemBottom}>底値：98円</Text>
            <Text style={styles.buyListItemBayBtn}>戻す</Text>
            <Text style={styles.buyListItemDelBtn}>削除</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  appbar: {
    width: '100%',
    height: 72,
    backgroundColor: '#0019FF',
  },
  appbarInner: {
    paddingTop: 24,
    paddingLeft: 16,
    lineHeight: 24,
    fontSize: 20,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  appbarRight: {
    position: 'absolute',
    right: 8,
    bottom: 8,
    lineHeight: 24,
    fontSize: 16,
    color: '#ffffff',
  },
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
  inputItemName: {
    marginVertical: 8,
    marginHorizontal: 16,
    width: '91%',
    borderWidth: 1,
    backgroundColor: '#ffffff',
    fontSize: 12,
    color: '#898989',
  },
  buyListItem: {
    height: 48,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: '#04FF59',
  },
  buyListItemName: {
    marginTop: 8,
    marginHorizontal: 8,
    fontSize: 12,
  },
  buyListItemBottomLine: {
    flexDirection: 'row',
  },
  buyListItemBottom: {
    marginHorizontal: 8,
    fontSize: 12,
  },
  buyListItemBayBtn: {
    position: 'absolute',
    right: 56,
    bottom: 0,
    borderWidth: 1,
    backgroundColor: '#FFAA04',
  },
  buyListItemDelBtn: {
    position: 'absolute',
    right: 8,
    bottom: 0,
    borderWidth: 1,
    backgroundColor: '#FFAA04',
  },
});
