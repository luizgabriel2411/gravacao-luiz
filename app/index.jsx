import { StyleSheet, Text, View } from 'react-native';

import { Button, ButtonText } from '@/components/ui/button';
import { Divider } from '@/components/ui/divider';
import { Link } from 'expo-router';

export default function app() {
  return (
    <View style={styles.container}>
      <Text className="uppercase font-extrabold">Home</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    backgroundColor: '#bfdaf5', // Altere esta cor de fundo como desejar
  },
});