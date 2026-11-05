# Architecture Rules

- Keep the authentication context in a `globalThis` registry so hot-reloaded or duplicated hook modules share the same provider context and cannot strand consumers outside `AuthProvider`.