# Debug Log

## DBG-01 - Web shadow compatibility warning

| Field | Record |
|---|---|
| Symptom | React Native Web warned that legacy `shadow*` style properties are deprecated. |
| Hypothesis/check | Searched project and navigation dependency for shadow properties. |
| Root cause | `SectionCard` originally shared native shadow props with Web; React Navigation also emits a dependency warning. |
| Fix | `Platform.select`: Web uses `boxShadow`; native keeps shadow/elevation. Do not patch `node_modules`. |
| Retest | Cards render in both themes; Android export passes. Remaining dependency warning is documented. |

## DBG-02 - Multi-agent documentation/source mismatch

| Field | Record |
|---|---|
| Symptom | Draft evidence referenced planned files/routes that did not match the integrated source. |
| Hypothesis/check | Compared every documentation path with `rg --files src` and the navigator. |
| Root cause | Architecture and evidence agents worked in parallel before final filenames were locked. |
| Fix | Updated all evidence to `src/contexts/AppContext.js`, `InterestsScreen.js`, and the real hydration flow. |
| Retest | Cross-file search finds no stale source paths outside this historical debug description. |

For assessment, explain: symptom -> hypothesis -> check -> root cause -> smallest fix -> retest -> regression.
