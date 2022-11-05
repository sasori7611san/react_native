import { JSXElementConstructor } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function HeaderPlace(): JSX.Element {
  return (
    <View style={styles.appbar}>
      <Text style={styles.appbarInner}>買い物リスト</Text>
      <Text style={styles.appbarRight}>Menu</Text>
    </View>
  );
}

const styles = StyleSheet.create({
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
});
