import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs 
      screenOptions={{ 
        tabBarActiveTintColor: 'blue',
        headerShown: false, // Esconde o cabeçalho padrão de cima se quiser
      }}
    >
      {/* Aba da Home / Index */}
      <Tabs.Screen 
        name="index" 
        options={{ 
          title: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }} 
      />

      {/* Aba da Página 1 */}
      <Tabs.Screen 
        name="pagina1" 
        options={{ 
          title: 'Página 1',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="heart-outline" size={size} color={color} />
          ),
        }} 
      />

      {/* Aba da Página 2 */}
      <Tabs.Screen 
        name="pagina2" 
        options={{ 
          title: 'Página 2',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="star-outline" size={size} color={color} />
          ),
        }} 
      />

      {/* Aba da Página 3 */}
      <Tabs.Screen 
        name="pagina3" 
        options={{ 
          title: 'Página 3',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" size={size} color={color} />
          ),
        }} 
      />
    </Tabs>
  );
}