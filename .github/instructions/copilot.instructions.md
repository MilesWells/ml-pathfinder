---
applyTo: "**/*.ts,**/*.tsx"
---
# Project coding standards for TypeScript and React

- Never look at any file ignored by git via .gitignore
- Do not alter the structure of any existing code

## TypeScript Guidelines
- Use TypeScript for all new code
- Follow functional programming principles where possible
- Use types for data structures and type definitions
- Never use interfaces
- Prefer immutable data (const, readonly)
- Prefer early returns instead of nesting
- Use optional chaining (?.) and nullish coalescing (??) operators where early returns are not possible or if it would create less readable code
- Never use any
- Only use unknown if absolutely necessary

## React Guidelines
- Use functional components with hooks
- Use the function keyword for component definitions
- Never use arrow functions for component definitions
- Follow the React hooks rules (no conditional hooks)
- Keep components small and focused
- Use Mantine core components wherever possible (documentation at: https://mantine.dev/core/package)
- Use CSS modules for component styling (documentation at: https://mantine.dev/styles/css-modules/)
- Never import React (for example: "import React from 'react';")