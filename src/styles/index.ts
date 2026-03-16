// Export all theme tokens from a single entry point
export { colors, lightTheme, darkTheme, theme } from './colors';
export { fontSize, fontWeight, lineHeight, typography } from './typography';
export { spacing, borderRadius, layout } from './spacing';
export { flex, position, shadow, margin, padding } from './utilities';

// Re-export everything as a single theme object for convenience
import { theme } from './colors';
import { typography } from './typography';
import { spacing, borderRadius, layout } from './spacing';
import { flex, position, shadow, margin, padding } from './utilities';

export default {
  colors: theme,
  typography,
  spacing,
  borderRadius,
  layout,
  flex,
  position,
  shadow,
  margin,
  padding,
};
