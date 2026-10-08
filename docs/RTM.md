# Requirement Traceability Matrix

| ID | Requirement | Implementation evidence | Minimum test |
|---|---|---|---|
| R01 | Expo project runs | `package.json`, `app.json`, `App.js` | Clean install and cold start |
| R02 | At least five screens | `src/navigation/AppNavigator.js` | Open/back Home, Profile, EditProfile, Interests, Settings |
| R03 | Profile name/avatar/bio | `ProfileScreen`, `ProfileCard`, ProfileContext | Default, saved, restart |
| R04 | Controlled edit form + validation | `EditProfileScreen`, `FormField`, `profileSchema` | Valid, blank name, Cancel |
| R05 | App-wide theme Context | ThemeContext, `ThemeToggle`, themed components | Toggle on multiple screens and restart |
| R06 | Collection through FlatList | `InterestsScreen`, `InterestItem`, `EmptyState` | Non-empty, Favorites empty, toggle |
| R07 | AsyncStorage persistence | `storage.js`, AppProvider hydration gate | First run, restart, malformed data |
| R08 | Reusable components | `src/components/` | ProfileCard variants and shared ThemeToggle |
| R09 | Responsive Flexbox | SafeArea, ScrollView, flex layouts | Portrait sizes and keyboard |
| R10 | Error/fallback states | Yup errors, avatar fallback, empty list, storage defaults | Invalid form/data and failed image |

## End-to-end trace

1. Startup reads profile, theme, preferences in one `multiGet` and renders a loading gate until ready.
2. Valid Edit Profile saves to storage, updates Context, then navigates back; invalid input never reaches storage; Cancel drops the local draft.
3. Interests renders six stable-ID records with `FlatList`; favorite updates use a new array and persist.
4. Theme writes to storage and updates the Navigation/theme token consumers across the app.
5. JSON parse/schema failure and missing keys return safe defaults rather than crashing.
