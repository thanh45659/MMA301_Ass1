import { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { useAppTheme } from '../contexts/AppContext';
import { SectionCard } from './SectionCard';

export function ProfileCard({ profile, compact = false }) {
  const { colors } = useAppTheme(); const [failed,setFailed] = useState(false); const initial = profile.name.trim().charAt(0).toUpperCase() || '?';
  useEffect(() => setFailed(false), [profile.avatarUri]);
  return <SectionCard style={[styles.card,compact && styles.compact]}>{profile.avatarUri && !failed ? <Image accessibilityLabel={`${profile.name}'s avatar`} source={{uri:profile.avatarUri}} style={[styles.avatar,compact && styles.small]} onError={() => setFailed(true)}/> : <View accessibilityLabel="Default profile avatar" style={[styles.avatar,styles.fallback,compact && styles.small,{backgroundColor:colors.elevated}]}><Text style={[styles.initial,{color:colors.primary}]}>{initial}</Text></View>}<View style={[styles.details,compact && styles.detailsCompact]}><Text style={[styles.name,compact && styles.nameCompact,{color:colors.text}]}>{profile.name}</Text><Text style={[styles.bio,compact && styles.bioCompact,{color:colors.muted}]} numberOfLines={compact?2:undefined}>{profile.bio || 'No bio yet. Add one from Edit Profile.'}</Text></View></SectionCard>;
}
const styles=StyleSheet.create({card:{alignItems:'center',paddingVertical:28},compact:{flexDirection:'row',paddingVertical:16},avatar:{width:112,height:112,borderRadius:56},small:{width:64,height:64,borderRadius:32},fallback:{alignItems:'center',justifyContent:'center'},initial:{fontSize:42,fontWeight:'800'},details:{alignItems:'center',marginTop:16},detailsCompact:{flex:1,alignItems:'flex-start',marginTop:0,marginLeft:14},name:{fontSize:26,fontWeight:'800',textAlign:'center'},nameCompact:{fontSize:20,textAlign:'left'},bio:{fontSize:15,lineHeight:22,textAlign:'center',marginTop:8},bioCompact:{textAlign:'left',marginTop:4}});
