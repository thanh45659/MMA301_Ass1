import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAppTheme } from '../contexts/AppContext';
import { EditProfileScreen } from '../screens/EditProfileScreen';
import { HomeScreen } from '../screens/HomeScreen';
import { InterestsScreen } from '../screens/InterestsScreen';
import { ProfileScreen } from '../screens/ProfileScreen';
import { SettingsScreen } from '../screens/SettingsScreen';
const Stack=createNativeStackNavigator();
export function AppNavigator(){const{colors}=useAppTheme();return <Stack.Navigator screenOptions={{headerStyle:{backgroundColor:colors.surface},headerTintColor:colors.text,headerShadowVisible:false,contentStyle:{backgroundColor:colors.background},headerTitleStyle:{fontWeight:'800'}}}><Stack.Screen name="Home" component={HomeScreen} options={{title:'My Dashboard'}}/><Stack.Screen name="Profile" component={ProfileScreen}/><Stack.Screen name="EditProfile" component={EditProfileScreen} options={{title:'Edit Profile'}}/><Stack.Screen name="Interests" component={InterestsScreen}/><Stack.Screen name="Settings" component={SettingsScreen}/></Stack.Navigator>}
