import { StyleSheet, Text, View } from 'react-native';
import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import '@/global.css';
import { Button, ButtonText } from '@/components/ui/button';
import { Divider } from '@/components/ui/divider';
import {useRouter} from "expo-router";

export default function pagina1() {
  const router = useRouter();
  return (
    <GluestackUIProvider mode="dark">
      <View style={styles.container}>
        <Text className="uppercase font-extrabold">Página 1</Text>

        <Divider className="my-3 w-40" />

        <Button className="bg-blue-500" onPress={()=> router.b}>
          <ButtonText className="font-bold text-white">
            home
          </ButtonText>
        </Button>

        <Button className="bg-green-500">
          <ButtonText className="font-bold text-white">
            Segunda página
          </ButtonText>
        </Button>

      
        <Button className="bg-red-500">
          <ButtonText className="font-bold text-white">
            Terceira página
          </ButtonText>
        </Button>

         <Divider className="my-3 w-40" />

      </View>
    </GluestackUIProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
});