import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { LoadingScreen } from './src/components/LoadingScreen';
import { AppProvider, useAppTheme } from './src/contexts/AppContext';
import { AppNavigator } from './src/navigation/AppNavigator';

function AppShell() {
  const { isDark, isHydrated, navigationTheme } = useAppTheme();
  if (!isHydrated) return <LoadingScreen />;
  return (
    <NavigationContainer theme={navigationTheme}>
      <StatusBar style={isDark ? 'light' : 'dark'} />
      <AppNavigator />
    </NavigationContainer>
  );
}

export default function App() {
  return <AppProvider><AppShell /></AppProvider>;
}
