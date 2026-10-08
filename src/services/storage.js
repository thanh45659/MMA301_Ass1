import AsyncStorage from '@react-native-async-storage/async-storage';

export const STORAGE_KEYS = { profile:'@mma301/profile:v1', theme:'@mma301/theme:v1', preferences:'@mma301/preferences:v1' };
export const DEFAULT_PROFILE = { name:'Alex Nguyen', bio:'Mobile app student, lifelong learner, and coffee enthusiast.', avatarUri:'' };
export const DEFAULT_PREFERENCES = { favoriteInterestIds:[] };
export const DEFAULT_THEME = 'light';

function parseObject(raw) {
  if (!raw) return null;
  try { const value = JSON.parse(raw); return value && typeof value === 'object' && !Array.isArray(value) ? value : null; }
  catch (error) { console.warn('Stored JSON is invalid. Safe defaults will be used.', error); return null; }
}

export function validateProfile(value) {
  if (!value || typeof value.name !== 'string' || typeof value.bio !== 'string') return DEFAULT_PROFILE;
  return { name:value.name.trim() || DEFAULT_PROFILE.name, bio:value.bio, avatarUri:typeof value.avatarUri === 'string' ? value.avatarUri : '' };
}
export function validatePreferences(value) {
  if (!value || !Array.isArray(value.favoriteInterestIds)) return DEFAULT_PREFERENCES;
  return { favoriteInterestIds:value.favoriteInterestIds.filter((id) => typeof id === 'string') };
}

export async function loadAppData() {
  const pairs = await AsyncStorage.multiGet(Object.values(STORAGE_KEYS));
  const values = Object.fromEntries(pairs);
  return { profile:validateProfile(parseObject(values[STORAGE_KEYS.profile])), theme:values[STORAGE_KEYS.theme] === 'dark' ? 'dark' : DEFAULT_THEME, preferences:validatePreferences(parseObject(values[STORAGE_KEYS.preferences])) };
}
export const saveProfile = (value) => AsyncStorage.setItem(STORAGE_KEYS.profile, JSON.stringify(value));
export const saveTheme = (value) => AsyncStorage.setItem(STORAGE_KEYS.theme, value);
export const savePreferences = (value) => AsyncStorage.setItem(STORAGE_KEYS.preferences, JSON.stringify(value));
export const resetStoredData = () => AsyncStorage.multiRemove(Object.values(STORAGE_KEYS));
