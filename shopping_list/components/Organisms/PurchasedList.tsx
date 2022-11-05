import { StyleSheet, Text, View } from 'react-native';

export default function PurchasedList(): JSX.Element {
  return (
    <>
      <View style={styles.purchasedListItem}>
        <Text style={styles.purchasedListItemName}>ほうれん草</Text>
        <View style={styles.purchasedListItemBottomLine}>
          <Text style={styles.purchasedListItemBottom}>底値：98円</Text>
          <Text style={styles.purchasedListItemRtnBtn}>戻す</Text>
          <Text style={styles.purchasedListItemDelBtn}>削除</Text>
        </View>
      </View>
      <View style={styles.purchasedListItem}>
        <Text style={styles.purchasedListItemName}>ほうれん草</Text>
        <View style={styles.purchasedListItemBottomLine}>
          <Text style={styles.purchasedListItemBottom}>底値：98円</Text>
          <Text style={styles.purchasedListItemRtnBtn}>戻す</Text>
          <Text style={styles.purchasedListItemDelBtn}>削除</Text>
        </View>
      </View>
      <View style={styles.purchasedListItem}>
        <Text style={styles.purchasedListItemName}>ほうれん草</Text>
        <View style={styles.purchasedListItemBottomLine}>
          <Text style={styles.purchasedListItemBottom}>底値：98円</Text>
          <Text style={styles.purchasedListItemRtnBtn}>戻す</Text>
          <Text style={styles.purchasedListItemDelBtn}>削除</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  purchasedListItem: {
    height: 48,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: '#04FF59',
  },
  purchasedListItemName: {
    marginTop: 8,
    marginHorizontal: 8,
    fontSize: 12,
  },
  purchasedListItemBottomLine: {
    flexDirection: 'row',
  },
  purchasedListItemBottom: {
    marginHorizontal: 8,
    fontSize: 12,
  },
  purchasedListItemRtnBtn: {
    position: 'absolute',
    right: 56,
    bottom: 0,
    borderWidth: 1,
    backgroundColor: '#FFAA04',
  },
  purchasedListItemDelBtn: {
    position: 'absolute',
    right: 8,
    bottom: 0,
    borderWidth: 1,
    backgroundColor: '#FFAA04',
  },
});
