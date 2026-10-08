import { Pressable, StyleSheet, Text } from 'react-native';
import { useAppTheme } from '../contexts/AppContext';

export function AppButton({ title, onPress, variant = 'primary', disabled = false, style }) {
  const { colors } = useAppTheme(); const secondary = variant === 'secondary';
  return <Pressable accessibilityRole="button" accessibilityLabel={title} disabled={disabled} onPress={onPress} style={({ pressed }) => [styles.button, { backgroundColor:secondary ? colors.elevated : colors.primary, borderColor:colors.border }, secondary && styles.secondary, (pressed || disabled) && styles.dimmed, style]}><Text style={[styles.label, { color:secondary ? colors.primary : '#FFFFFF' }]}>{title}</Text></Pressable>;
}
const styles = StyleSheet.create({ button:{ minHeight:50, borderRadius:14, paddingHorizontal:18, alignItems:'center', justifyContent:'center' }, secondary:{ borderWidth:1 }, dimmed:{ opacity:.68 }, label:{ fontSize:16, fontWeight:'700' } });
