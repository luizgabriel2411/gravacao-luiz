import { StyleSheet, Text, View } from 'react-native';
import { Button, ButtonText } from '@/components/ui/button';
import { Divider } from '@/components/ui/divider';
import {useRouter} from "expo-router";

export default function Pagina1() {
  const router = useRouter();
  return (

      <View style={styles.container}>
        <Text className="uppercase font-extrabold">Itens que você gostou</Text>
      </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
 justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  backgroundColor: '#bfdaf5',
  },
});