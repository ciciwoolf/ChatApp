import { ViewStyle, TextStyle, ImageStyle } from 'react-native';
import { spacing } from './spacing';

type Style = ViewStyle | TextStyle | ImageStyle;

/**
 * Common flex utilities
 */
export const flex = {
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  } as ViewStyle,
  row: {
    flexDirection: 'row',
  } as ViewStyle,
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  } as ViewStyle,
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  } as ViewStyle,
  column: {
    flexDirection: 'column',
  } as ViewStyle,
  columnCenter: {
    flexDirection: 'column',
    alignItems: 'center',
  } as ViewStyle,
  flex1: {
    flex: 1,
  } as ViewStyle,
  wrap: {
    flexWrap: 'wrap',
  } as ViewStyle,
};

/**
 * Position utilities
 */
export const position = {
  absolute: {
    position: 'absolute',
  } as ViewStyle,
  relative: {
    position: 'relative',
  } as ViewStyle,
  absoluteFill: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  } as ViewStyle,
};

/**
 * Shadow utilities
 */
export const shadow = {
  sm: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  } as ViewStyle,
  md: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  } as ViewStyle,
  lg: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5,
  } as ViewStyle,
  xl: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 16,
    elevation: 8,
  } as ViewStyle,
};

/**
 * Helper to generate margin/padding utilities
 */
const createSpacingUtility = (property: 'margin' | 'padding') => ({
  none: { [property]: spacing.none } as Style,
  xs: { [property]: spacing.xs } as Style,
  sm: { [property]: spacing.sm } as Style,
  md: { [property]: spacing.md } as Style,
  base: { [property]: spacing.base } as Style,
  lg: { [property]: spacing.lg } as Style,
  xl: { [property]: spacing.xl } as Style,
  '2xl': { [property]: spacing['2xl'] } as Style,
  '3xl': { [property]: spacing['3xl'] } as Style,

  // Directional spacing
  t: {
    xs: { [`${property}Top`]: spacing.xs } as Style,
    sm: { [`${property}Top`]: spacing.sm } as Style,
    md: { [`${property}Top`]: spacing.md } as Style,
    base: { [`${property}Top`]: spacing.base } as Style,
    lg: { [`${property}Top`]: spacing.lg } as Style,
    xl: { [`${property}Top`]: spacing.xl } as Style,
  },
  b: {
    xs: { [`${property}Bottom`]: spacing.xs } as Style,
    sm: { [`${property}Bottom`]: spacing.sm } as Style,
    md: { [`${property}Bottom`]: spacing.md } as Style,
    base: { [`${property}Bottom`]: spacing.base } as Style,
    lg: { [`${property}Bottom`]: spacing.lg } as Style,
    xl: { [`${property}Bottom`]: spacing.xl } as Style,
  },
  l: {
    xs: { [`${property}Left`]: spacing.xs } as Style,
    sm: { [`${property}Left`]: spacing.sm } as Style,
    md: { [`${property}Left`]: spacing.md } as Style,
    base: { [`${property}Left`]: spacing.base } as Style,
    lg: { [`${property}Left`]: spacing.lg } as Style,
    xl: { [`${property}Left`]: spacing.xl } as Style,
  },
  r: {
    xs: { [`${property}Right`]: spacing.xs } as Style,
    sm: { [`${property}Right`]: spacing.sm } as Style,
    md: { [`${property}Right`]: spacing.md } as Style,
    base: { [`${property}Right`]: spacing.base } as Style,
    lg: { [`${property}Right`]: spacing.lg } as Style,
    xl: { [`${property}Right`]: spacing.xl } as Style,
  },
  h: {
    xs: { [`${property}Horizontal`]: spacing.xs } as Style,
    sm: { [`${property}Horizontal`]: spacing.sm } as Style,
    md: { [`${property}Horizontal`]: spacing.md } as Style,
    base: { [`${property}Horizontal`]: spacing.base } as Style,
    lg: { [`${property}Horizontal`]: spacing.lg } as Style,
    xl: { [`${property}Horizontal`]: spacing.xl } as Style,
  },
  v: {
    xs: { [`${property}Vertical`]: spacing.xs } as Style,
    sm: { [`${property}Vertical`]: spacing.sm } as Style,
    md: { [`${property}Vertical`]: spacing.md } as Style,
    base: { [`${property}Vertical`]: spacing.base } as Style,
    lg: { [`${property}Vertical`]: spacing.lg } as Style,
    xl: { [`${property}Vertical`]: spacing.xl } as Style,
  },
});

export const margin = createSpacingUtility('margin');
export const padding = createSpacingUtility('padding');
