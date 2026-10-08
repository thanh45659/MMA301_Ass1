# Test Matrix

Only mark a case Pass after running it on the exact submitted source. Web/bundle checks below must be repeated on the final phone/emulator.

| ID | Scenario | Expected | Current evidence/status |
|---|---|---|---|
| TC01 | First run without storage | Safe defaults, no crash | Web Pass |
| TC02 | Open Profile | Correct default/saved data | Web Pass |
| TC03 | Save empty name | Error shown; no save | Web Pass |
| TC04 | Save valid name/bio | Profile/Home update immediately | Web Pass |
| TC05 | Edit then Cancel | Draft discarded | Web Pass |
| TC06 | Toggle dark mode | App-wide theme changes | Web Pass |
| TC07 | Restart after theme change | Theme restored | Web reload Pass; device pending |
| TC08 | Open Interests | Six FlatList items render | Web Pass |
| TC09 | Favorites with zero items | Helpful empty state | Web Pass |
| TC10 | Toggle favorite/filter | Star/count/list update | Web Pass |
| TC11 | Missing/corrupt storage | Safe fallback, no stuck loading | Code reviewed; injected-device test pending |
| TC12 | Open/back all five screens | No crash; shared state retained | Web Pass |
| TC13 | Invalid avatar URL/image failure | Validation or initial fallback | Device test pending |
| TC14 | Storage write rejection | UI reports failure; no false success | Mock/device test pending |
| TC15 | Portrait sizes and keyboard | No clipped critical controls | Device test pending |
| TC16 | Clean install/build | Dependencies/install/bundle succeed | Expo Doctor and Android export Pass |

## Verification record

- Date: 2026-10-08 (Asia/Saigon)
- Expo SDK: 57.0.27
- `npx expo-doctor`: 21/21 checks passed.
- `npx expo export --platform android`: production bundle succeeded.
- Web smoke: form valid/invalid/cancel, navigation, list empty/interaction, theme and reload persistence passed.
