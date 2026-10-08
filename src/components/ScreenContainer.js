import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAppTheme } from '../contexts/AppContext';

export function ScreenContainer({ children, scroll = true, keyboard = false, style }) {
  const { colors } = useAppTheme();
  const content = scroll ? <ScrollView contentContainerStyle={[styles.content, style]} keyboardShouldPersistTaps="handled" showsVerticalScrollIndicator={false}>{children}</ScrollView> : <View style={[styles.fill, style]}>{children}</View>;
  return <SafeAreaView style={[styles.safe, { backgroundColor:colors.background }]} edges={['bottom']}>{keyboard ? <KeyboardAvoidingView style={styles.fill} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>{content}</KeyboardAvoidingView> : content}</SafeAreaView>;
}
const styles = StyleSheet.create({ safe:{ flex:1 }, fill:{ flex:1 }, content:{ padding:20, paddingBottom:36 } });
