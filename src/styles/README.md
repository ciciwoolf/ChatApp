# Centralized Theme System

This directory contains the centralized theme system for the ChatApp. All colors, typography, spacing, and style utilities are defined here.

## Structure

```
src/styles/
├── colors.ts       # Color palette and theme definitions
├── typography.ts   # Font sizes, weights, and text styles
├── spacing.ts      # Spacing scale and border radius
├── utilities.ts    # Reusable style utilities
├── index.ts        # Main export file
└── README.md       # This file
```

## Usage

### Importing the Theme

```typescript
// Import individual modules
import { theme, typography, spacing, borderRadius } from '../styles';

// Or import specific utilities
import { flex, shadow, margin, padding } from '../styles';
```

### Colors

Use semantic color names from the theme instead of hardcoded values:

```typescript
const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.background,
    borderColor: theme.border,
  },
  text: {
    color: theme.textPrimary,
  },
  button: {
    backgroundColor: theme.primary,
  },
});
```

**Available theme colors:**
- `background`, `backgroundSecondary`, `backgroundTertiary`
- `textPrimary`, `textSecondary`, `textTertiary`, `textInverse`
- `border`, `borderLight`, `borderDark`
- `primary`, `primaryHover`, `primaryPressed`, `primaryLight`
- `success`, `error`, `warning`, `info` (+ Light variants)
- `overlay`, `overlayLight`

### Typography

Use typography presets for consistent text styling:

```typescript
const styles = StyleSheet.create({
  heading: {
    ...typography.h1,
    color: theme.textPrimary,
  },
  body: {
    ...typography.body,
    color: theme.textSecondary,
  },
  caption: {
    ...typography.caption,
    color: theme.textTertiary,
  },
});
```

**Available typography presets:**
- `h1`, `h2`, `h3`, `h4`, `h5`, `h6` - Heading styles
- `body` - Regular body text
- `bodySmall` - Small body text
- `caption` - Caption text
- `button` - Button text

### Spacing

Use the spacing scale for consistent margins and padding:

```typescript
const styles = StyleSheet.create({
  container: {
    padding: spacing.base,
    margin: spacing.lg,
    gap: spacing.md,
  },
  rounded: {
    borderRadius: borderRadius.md,
  },
});
```

**Spacing scale:**
- `none` (0), `xs` (4), `sm` (8), `md` (12), `base` (16), `lg` (20)
- `xl` (24), `2xl` (32), `3xl` (40), `4xl` (48), `5xl` (64), `6xl` (80)

**Border radius:**
- `none`, `sm`, `base`, `md`, `lg`, `xl`, `full`

### Style Utilities

Use pre-built utilities for common style patterns:

#### Flex Utilities

```typescript
const styles = StyleSheet.create({
  centered: {
    ...flex.center,  // Center content both axes
  },
  row: {
    ...flex.rowBetween,  // Row with space-between
  },
  column: {
    ...flex.columnCenter,  // Column with centered items
  },
});
```

**Available flex utilities:**
- `center`, `row`, `rowCenter`, `rowBetween`
- `column`, `columnCenter`, `flex1`, `wrap`

#### Shadow Utilities

```typescript
const styles = StyleSheet.create({
  card: {
    ...shadow.md,  // Medium shadow
    backgroundColor: theme.background,
  },
});
```

**Available shadows:** `sm`, `md`, `lg`, `xl`

#### Spacing Utilities

```typescript
const styles = StyleSheet.create({
  container: {
    ...padding.base,     // All sides
    ...margin.t.lg,      // Top only
    ...padding.h.md,     // Horizontal only
  },
});
```

**Directional helpers:**
- `t` (top), `b` (bottom), `l` (left), `r` (right)
- `h` (horizontal), `v` (vertical)

## Switching to Dark Mode

To enable dark mode, update `src/styles/colors.ts`:

```typescript
// Change from:
export const theme = lightTheme;

// To:
export const theme = darkTheme;
```

For dynamic theme switching, you'll need to implement a theme context/provider.

## Adding Custom Colors

To add custom theme colors:

1. Add the color to the base `colors` object:
```typescript
export const colors = {
  // ... existing colors
  purple500: '#A855F7',
  purple700: '#7E22CE',
};
```

2. Add semantic mappings to both themes:
```typescript
export const lightTheme = {
  // ... existing mappings
  accent: colors.purple500,
};

export const darkTheme = {
  // ... existing mappings
  accent: colors.purple500,
};
```

## Best Practices

1. **Always use theme colors** instead of hardcoded hex values
2. **Use typography presets** for consistent text styling
3. **Use spacing scale** instead of arbitrary pixel values
4. **Use StyleSheet.create()** instead of inline styles
5. **Leverage utilities** for common patterns (flex, shadow, etc.)
6. **Keep components theme-agnostic** by always referencing the theme

## Example Component

```typescript
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { theme, typography, spacing, borderRadius, flex, shadow } from '../styles';

const ExampleCard = ({ title, description }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    ...shadow.md,
    backgroundColor: theme.background,
    borderRadius: borderRadius.md,
    padding: spacing.base,
    margin: spacing.md,
  },
  title: {
    ...typography.h4,
    color: theme.textPrimary,
    marginBottom: spacing.xs,
  },
  description: {
    ...typography.body,
    color: theme.textSecondary,
  },
});

export default ExampleCard;
```
