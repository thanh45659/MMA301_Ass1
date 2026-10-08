import { DarkTheme, DefaultTheme } from '@react-navigation/native';

export const lightColors = { background:'#F5F7FB', surface:'#FFFFFF', elevated:'#EEF2FF', primary:'#4F46E5', text:'#172033', muted:'#667085', border:'#D7DEEA', danger:'#DC2626', success:'#15803D', warning:'#B45309', input:'#FFFFFF' };
export const darkColors = { background:'#0F172A', surface:'#182235', elevated:'#202D45', primary:'#818CF8', text:'#F8FAFC', muted:'#A7B1C2', border:'#334155', danger:'#F87171', success:'#4ADE80', warning:'#FBBF24', input:'#111C30' };

export function createNavigationTheme(mode) {
  const colors = mode === 'dark' ? darkColors : lightColors;
  const base = mode === 'dark' ? DarkTheme : DefaultTheme;
  return { ...base, colors: { ...base.colors, primary: colors.primary, background: colors.background, card: colors.surface, text: colors.text, border: colors.border } };
}
