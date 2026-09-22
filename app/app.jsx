import { StyleSheet, Text, View } from 'react-native';
import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import '@/global.css';
import { Button, ButtonText } from '@/components/ui/button';
import { Divider } from '@/components/ui/divider';

export default function Home() {
  return (
    <GluestackUIProvider mode="dark">
      <View style={styles.container}>
        <Text className="uppercase font-extrabold">Página Home</Text>

        <Divider className="my-3 w-40" />

        {/* Exemplo com botão azul */}
        <Button className="bg-blue-500">
          <ButtonText className="font-bold text-white">
            Primeira página
          </ButtonText>
        </Button>

        {/* Exemplo com botão verde */}
        <Button className="bg-green-500">
          <ButtonText className="font-bold text-white">
            Segunda página
          </ButtonText>
        </Button>

        {/* Exemplo com botão vermelho */}
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