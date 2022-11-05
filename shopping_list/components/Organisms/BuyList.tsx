import { StyleSheet, Text, View } from 'react-native';

export default function BuyList(): JSX.Element {
  return (
    <>
      <View style={styles.buyListItem}>
        <Text style={styles.buyListItemName}>ほうれん草</Text>
        <View style={styles.buyListItemBottomLine}>
          <Text style={styles.buyListItemBottom}>底値：98円</Text>
          <Text style={styles.buyListItemBuyBtn}>購入</Text>
          <Text style={styles.buyListItemDelBtn}>削除</Text>
        </View>
      </View>
      <View style={styles.buyListItem}>
        <Text style={styles.buyListItemName}>ほうれん草</Text>
        <View style={styles.buyListItemBottomLine}>
          <Text style={styles.buyListItemBottom}>底値：98円</Text>
          <Text style={styles.buyListItemBuyBtn}>購入</Text>
          <Text style={styles.buyListItemDelBtn}>削除</Text>
        </View>
      </View>
      <View style={styles.buyListItem}>
        <Text style={styles.buyListItemName}>ほうれん草</Text>
        <View style={styles.buyListItemBottomLine}>
          <Text style={styles.buyListItemBottom}>底値：98円</Text>
          <Text style={styles.buyListItemBuyBtn}>購入</Text>
          <Text style={styles.buyListItemDelBtn}>削除</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
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
  buyListItemBuyBtn: {
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
