import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { DEFAULT_PREFERENCES, DEFAULT_PROFILE, DEFAULT_THEME, loadAppData, resetStoredData, savePreferences, saveProfile, saveTheme } from '../services/storage';
import { createNavigationTheme, darkColors, lightColors } from '../theme/tokens';

const ThemeContext = createContext(null);
const ProfileContext = createContext(null);
const PreferencesContext = createContext(null);

export function AppProvider({ children }) {
  const [profile, setProfile] = useState(DEFAULT_PROFILE);
  const [theme, setThemeState] = useState(DEFAULT_THEME);
  const [preferences, setPreferences] = useState(DEFAULT_PREFERENCES);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const stored = await loadAppData();
        if (mounted) { setProfile(stored.profile); setThemeState(stored.theme); setPreferences(stored.preferences); }
      } catch (error) { console.warn('App data could not be loaded. Safe defaults will be used.', error); }
      finally { if (mounted) setIsHydrated(true); }
    })();
    return () => { mounted = false; };
  }, []);

  async function updateProfile(nextProfile) {
    try { await saveProfile(nextProfile); setProfile(nextProfile); return { ok:true }; }
    catch (error) { console.warn('Profile could not be saved.', error); return { ok:false, error }; }
  }
  async function setTheme(nextTheme) {
    try { await saveTheme(nextTheme); setThemeState(nextTheme); return { ok:true }; }
    catch (error) { console.warn('Theme could not be saved.', error); return { ok:false, error }; }
  }
  async function toggleFavorite(id) {
    const ids = preferences.favoriteInterestIds.includes(id)
      ? preferences.favoriteInterestIds.filter((itemId) => itemId !== id)
      : [...preferences.favoriteInterestIds, id];
    const next = { ...preferences, favoriteInterestIds:ids };
    try { await savePreferences(next); setPreferences(next); return { ok:true }; }
    catch (error) { console.warn('Preferences could not be saved.', error); return { ok:false, error }; }
  }
  async function resetAll() {
    try { await resetStoredData(); setProfile(DEFAULT_PROFILE); setThemeState(DEFAULT_THEME); setPreferences(DEFAULT_PREFERENCES); return { ok:true }; }
    catch (error) { console.warn('Stored data could not be reset.', error); return { ok:false, error }; }
  }

  const colors = theme === 'dark' ? darkColors : lightColors;
  const themeValue = useMemo(() => ({ theme, colors, isDark:theme === 'dark', isHydrated, navigationTheme:createNavigationTheme(theme), setTheme }), [theme, isHydrated]);
  const profileValue = useMemo(() => ({ profile, updateProfile }), [profile]);
  const preferencesValue = useMemo(() => ({ preferences, toggleFavorite, resetAll }), [preferences]);

  return (
    <ThemeContext.Provider value={themeValue}>
      <ProfileContext.Provider value={profileValue}>
        <PreferencesContext.Provider value={preferencesValue}>{children}</PreferencesContext.Provider>
      </ProfileContext.Provider>
    </ThemeContext.Provider>
  );
}

function required(context, name) { const value = useContext(context); if (!value) throw new Error(`${name} must be used inside AppProvider.`); return value; }
export const useAppTheme = () => required(ThemeContext, 'useAppTheme');
export const useProfile = () => required(ProfileContext, 'useProfile');
export const usePreferences = () => required(PreferencesContext, 'usePreferences');
