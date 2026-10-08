# MMA301 Assignment 01 - Profile & Activity App

Expo/React Native application with a five-screen workflow: Home, Profile, Edit Profile, Interests, and Settings. It demonstrates Stack Navigation, Context API, Formik/Yup validation, `FlatList`, reusable components, Flexbox, and AsyncStorage persistence.

> Before submission, replace `StudentName_ClassCode` and the default profile with your real student/class information. The student must understand and be able to modify every submitted section.

## Run

```bash
npm install
npx expo start
```

Use Expo Go/Android emulator, or run `npm run web`. Verification commands:

```bash
npm run doctor
npm run export:android
```

## Workflow

```text
Startup -> hydrate profile/theme/favorites -> safe fallback
Home -> Profile -> Edit -> validate -> save/cancel -> shared UI updates
Home -> Interests -> FlatList -> favorite/filter/empty state
Home -> Settings -> light/dark -> app-wide update -> restart persistence
```

## State and persistence

| State | Owner | Persistent |
|---|---|---:|
| Form draft/errors | Formik in EditProfile | No |
| Saved profile | ProfileContext | Yes |
| Theme | ThemeContext | Yes |
| Favorite interest IDs | PreferencesContext | Yes |
| All/Favorites filter | InterestsScreen | No |

`AppProvider` loads all versioned AsyncStorage keys before rendering navigation. Missing or malformed data uses safe defaults. Writes complete before shared state updates, so the UI does not claim a failed save succeeded.

## Structure

```text
App.js                         composition root and hydration gate
src/navigation/AppNavigator.js five-screen native stack
src/contexts/AppContext.js     shared domain state/actions
src/services/storage.js        AsyncStorage and validation
src/screens/                   workflow screens
src/components/                reusable themed UI
docs/                          RTM, decisions, tests, debug, AI evidence
```

## Evidence

- `docs/RTM.md`
- `docs/DESIGN_DECISIONS.md`
- `docs/TEST_MATRIX.md`
- `docs/DEBUG_LOG.md`
- `docs/AI_USAGE_LOG.md`
- `docs/INTERVIEW_GUIDE.md`

## Limitations

- Local-only data; no backend or authentication.
- Avatar uses a URL rather than an image picker.
- Device-only cases in the test matrix must be rerun on the final assessment device.
- AI assisted the project; usage is disclosed and must be independently verified by the student.
