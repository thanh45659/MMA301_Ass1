import { StyleSheet, Text, View } from 'react-native';
import { useAppTheme } from '../contexts/AppContext';
export function EmptyState({title,message}){const{colors}=useAppTheme();return <View style={[styles.box,{backgroundColor:colors.elevated,borderColor:colors.border}]}><Text style={styles.icon}>🌱</Text><Text style={[styles.title,{color:colors.text}]}>{title}</Text><Text style={[styles.message,{color:colors.muted}]}>{message}</Text></View>}
const styles=StyleSheet.create({box:{borderWidth:1,borderRadius:18,padding:28,alignItems:'center',marginTop:18},icon:{fontSize:36},title:{fontSize:18,fontWeight:'800',marginTop:10},message:{fontSize:14,lineHeight:21,textAlign:'center',marginTop:6}});
