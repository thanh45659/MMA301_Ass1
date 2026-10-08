import { Platform, StyleSheet, View } from 'react-native';
import { useAppTheme } from '../contexts/AppContext';
export function SectionCard({ children, style }) { const { colors } = useAppTheme(); return <View style={[styles.card, { backgroundColor:colors.surface, borderColor:colors.border }, style]}>{children}</View>; }
const styles = StyleSheet.create({ card:{ borderWidth:1, borderRadius:20, padding:18, ...Platform.select({ web:{ boxShadow:'0 3px 8px rgba(0,0,0,.06)' }, default:{ shadowColor:'#000', shadowOffset:{ width:0, height:3 }, shadowOpacity:.06, shadowRadius:8, elevation:2 } }) } });
