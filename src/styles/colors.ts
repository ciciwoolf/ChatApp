// Base colors
export const colors = {
  // Neutrals
  white: '#FFFFFF',
  black: '#000000',
  gray50: '#F9FAFB',
  gray100: '#F3F4F6',
  gray200: '#E5E7EB',
  gray300: '#D1D5DB',
  gray400: '#9CA3AF',
  gray500: '#6B7280',
  gray600: '#4B5563',
  gray700: '#374151',
  gray800: '#1F2937',
  gray900: '#111827',

  // Primary (Blue)
  primary50: '#EFF6FF',
  primary100: '#DBEAFE',
  primary200: '#BFDBFE',
  primary300: '#93C5FD',
  primary400: '#60A5FA',
  primary500: '#3B82F6',
  primary600: '#2563EB',
  primary700: '#1D4ED8',
  primary800: '#1E40AF',
  primary900: '#1E3A8A',

  // Success (Green)
  success50: '#F0FDF4',
  success100: '#DCFCE7',
  success500: '#22C55E',
  success700: '#15803D',

  // Error (Red)
  error50: '#FEF2F2',
  error100: '#FEE2E2',
  error500: '#EF4444',
  error700: '#B91C1C',

  // Warning (Yellow)
  warning50: '#FFFBEB',
  warning100: '#FEF3C7',
  warning500: '#F59E0B',
  warning700: '#B45309',

  // Info (Cyan)
  info50: '#ECFEFF',
  info100: '#CFFAFE',
  info500: '#06B6D4',
  info700: '#0E7490',
};

// Semantic color mappings for light theme
export const lightTheme = {
  // Backgrounds
  background: colors.white,
  backgroundSecondary: colors.gray50,
  backgroundTertiary: colors.gray100,

  // Text
  textPrimary: colors.gray900,
  textSecondary: colors.gray600,
  textTertiary: colors.gray500,
  textInverse: colors.white,

  // Borders
  border: colors.gray200,
  borderLight: colors.gray100,
  borderDark: colors.gray300,

  // Interactive
  primary: colors.primary600,
  primaryHover: colors.primary700,
  primaryPressed: colors.primary800,
  primaryLight: colors.primary100,

  // Status
  success: colors.success500,
  successLight: colors.success100,
  error: colors.error500,
  errorLight: colors.error100,
  warning: colors.warning500,
  warningLight: colors.warning100,
  info: colors.info500,
  infoLight: colors.info100,

  // Overlays
  overlay: 'rgba(0, 0, 0, 0.5)',
  overlayLight: 'rgba(0, 0, 0, 0.3)',
};

// Dark theme (for future use)
export const darkTheme = {
  // Backgrounds
  background: colors.gray900,
  backgroundSecondary: colors.gray800,
  backgroundTertiary: colors.gray700,

  // Text
  textPrimary: colors.gray50,
  textSecondary: colors.gray300,
  textTertiary: colors.gray400,
  textInverse: colors.gray900,

  // Borders
  border: colors.gray700,
  borderLight: colors.gray800,
  borderDark: colors.gray600,

  // Interactive
  primary: colors.primary500,
  primaryHover: colors.primary400,
  primaryPressed: colors.primary300,
  primaryLight: colors.primary900,

  // Status
  success: colors.success500,
  successLight: colors.success900,
  error: colors.error500,
  errorLight: colors.error900,
  warning: colors.warning500,
  warningLight: colors.warning900,
  info: colors.info500,
  infoLight: colors.info900,

  // Overlays
  overlay: 'rgba(0, 0, 0, 0.7)',
  overlayLight: 'rgba(0, 0, 0, 0.5)',
};

// Default export for current theme (can be switched to darkTheme)
export const theme = lightTheme;
