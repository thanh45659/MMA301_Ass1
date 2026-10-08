# Interview and Transfer Guide

## Files to open in 30 seconds

| Topic | File |
|---|---|
| Composition/hydration gate | `App.js` |
| Five routes | `src/navigation/AppNavigator.js` |
| Profile/theme/preferences | `src/contexts/AppContext.js` |
| AsyncStorage/fallback | `src/services/storage.js` |
| Form save/validation/cancel | `src/screens/EditProfileScreen.js` |
| Yup rules | `src/validation/profileSchema.js` |
| FlatList/key/empty state | `src/screens/InterestsScreen.js` |
| Reusable UI | `src/components/` |

## Explain every flow

Use: Purpose -> Input -> Trigger -> Transform -> Output -> Failure.

- Edit Profile: Formik draft -> Yup validation -> `updateProfile` -> AsyncStorage -> Context -> Profile/Home re-render; write failure stays on form.
- Theme: switch -> `setTheme` -> storage -> ThemeContext -> navigation/components re-render; reload hydrates before navigator.
- Interests: FlatList gets stable records -> star calls `toggleFavorite` -> new ID array -> storage -> list/Home count re-render; empty Favorites uses `ListEmptyComponent`.

## Typical questions

- Why Context instead of Redux? Scope is small, domain sharing is simple, and Context meets the requirement with less boilerplate.
- Why not mutate arrays? A new reference makes React consumers and FlatList update reliably.
- What if JSON is corrupt? Parsing/shape validation returns safe defaults; hydration finishes in `finally`.
- Why save before state update? The UI must not claim persistence when a write fails.
- Why stable `keyExtractor` IDs? Index keys break identity when filtering/sorting.

## Modification rehearsal

| Change | Impact |
|---|---|
| Add phone/location | Profile model/default, schema, form, ProfileCard, storage tests |
| Persist favorites | Already implemented; explain preferences Context/storage key |
| Add system theme | Theme model, system color-scheme listener, Settings UI, tests |
| Replace storage with mock API | Service and Context async/error flow; screens stay mostly unchanged |
| Add interest sorting | Local derived data and tests; source catalog/IDs remain unchanged |

Always state affected screens, state/data, service/storage, UI, tests, and regression risks before editing.
