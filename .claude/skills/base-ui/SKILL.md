---
name: base-ui
description: Base UI component library reference for building accessible, unstyled React interfaces. Use when implementing UI components with @base-ui/react, need component API references, or want styling/composition guidance.
metadata:
  author: mui
  version: '1.0.0'
---

# Base UI

Comprehensive reference for `@base-ui/react`, a composable, styling-agnostic component library for building accessible React interfaces. Contains 30+ unstyled components with full keyboard navigation, ARIA support, and flexible composition patterns.

## When to Apply

Reference these docs when:

- Building UI components with `@base-ui/react`
- Need component API documentation or usage examples
- Implementing accessible form controls
- Styling components with CSS-in-JS, Tailwind, or plain CSS
- Composing Base UI primitives with custom components

## Documentation Sources

Fetch latest documentation before implementing:

- Quick Start: https://base-ui.com/react/overview/quick-start
- Accessibility: https://base-ui.com/react/overview/accessibility
- Styling Guide: https://base-ui.com/react/handbook/styling
- Animation Guide: https://base-ui.com/react/handbook/animation

## Quick Reference

### Handbook Guides

| Guide           | Description                                |
| --------------- | ------------------------------------------ |
| `styling`       | Style components with any CSS solution     |
| `animation`     | Animate open/close states and transitions  |
| `composition`   | Compose primitives with custom components  |
| `customization` | Customize component behavior and rendering |
| `forms`         | Build accessible forms with validation     |
| `typescript`    | TypeScript patterns and type safety        |

### Components by Category

**Overlays & Dialogs**

- `Dialog` - Modal dialog over the page
- `Alert Dialog` - Dialog requiring user response
- `Popover` - Popup anchored to a trigger
- `Tooltip` - Hint on hover/focus
- `Preview Card` - Link preview on hover
- `Toast` - Notification messages

**Navigation & Menus**

- `Menu` - Dropdown action list with keyboard nav
- `Menubar` - Application menu bar
- `Navigation Menu` - Site navigation with submenus
- `Context Menu` - Right-click menu
- `Tabs` - Toggle between related panels

**Form Controls**

- `Field` - Labeling and validation wrapper
- `Fieldset` - Group related fields with legend
- `Form` - Form with error handling
- `Input` - Text input
- `Number Field` - Numeric input with increment/decrement
- `Checkbox` / `Checkbox Group` - Single/multiple selections
- `Radio` - Single selection from group
- `Select` - Dropdown selection
- `Combobox` - Input with filtered options
- `Autocomplete` - Search with suggestions
- `Switch` - On/off toggle
- `Slider` - Range input

**Layout & Display**

- `Accordion` - Collapsible content sections
- `Collapsible` - Single expandable panel
- `Scroll Area` - Custom scrollbars
- `Separator` - Visual divider
- `Progress` - Task progress indicator
- `Meter` - Numeric value display
- `Avatar` - User image/initials

**Actions**

- `Button` - Clickable action
- `Toggle` / `Toggle Group` - Two-state buttons
- `Toolbar` - Grouped controls

### Utilities

| Utility              | Description                          |
| -------------------- | ------------------------------------ |
| `CSP Provider`       | Apply nonce to inline styles/scripts |
| `Direction Provider` | Enable RTL support                   |
| `mergeProps`         | Merge React props intelligently      |
| `useRender`          | Enable render prop pattern           |

## How to Use

For component documentation, fetch from base-ui.com:

```
https://base-ui.com/react/components/{component-name}
https://base-ui.com/react/handbook/{guide-name}
```

Each component page contains:

- API reference with all props
- Usage examples with code
- Styling patterns
- Accessibility information
