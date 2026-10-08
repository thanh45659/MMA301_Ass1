# Design Decision Record

| Decision | Choice and reason | Impact if requirements change |
|---|---|---|
| Navigation | Native Stack: explicit routes, easy to demo and explain | Tabs can wrap the stack without moving domain state |
| State ownership | Local form/filter state; shared profile/theme/favorites in domain Contexts | Contexts can move into separate files if app grows |
| Persistence | One storage helper with versioned keys and normalization | Backend replacement stays behind the Context/service boundary |
| Hydration | Gate navigation until storage has been read | Prevents default values flashing or overwriting saved state |
| Save order | Persist first, then update Context | Failed writes never look successful; offline queue could change this |
| List model | Static interest catalog + persistent favorite IDs | User-created interests would add CRUD storage/API |
| List rendering | FlatList, stable string IDs, immutable favorite array | Supports sorting/sections without changing item identity |
| Reuse | Small themed components accept data/actions through props | New screens reuse the same visual and accessibility behavior |
| Avatar | Optional remote URL with initial fallback | Image picker would require permission and asset persistence |

## Data model

```js
profile = { name: string, bio: string, avatarUri: string }
theme = 'light' | 'dark'
preferences = { favoriteInterestIds: string[] }
interest = { id: string, icon: string, title: string, category: string, description: string }
```
