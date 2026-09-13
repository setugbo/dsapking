/**
 * D KING SAP ACADEMY LTD — Design tokens.
 * Built on the classic SAP corporate colour palette.
 * Centralized so branding can be adjusted in a single place.
 */
export const theme = {
  colors: {
    primary: {
      50: '#EBF5FB',
      100: '#D1E8F6',
      200: '#A6D0EE',
      300: '#74B3DF',
      400: '#3D92CD',
      500: '#006BB8',
      600: '#005C9E',
      700: '#004B81',
      800: '#003966',
      900: '#01264B',
      950: '#011449',
    },
    gold: {
      50: '#FFF8E6',
      100: '#FFEFC2',
      200: '#FFE089',
      300: '#FFCC45',
      400: '#FFBE1A',
      500: '#F0AB00',
      600: '#D18F00',
      700: '#A96F00',
      800: '#7A5200',
      900: '#5B3C00',
    },
    navy: {
      50: '#E9EDF6',
      100: '#C7D0E8',
      200: '#93A3CE',
      300: '#5B6FAE',
      400: '#2C3F85',
      500: '#12224F',
      600: '#011449',
      700: '#0D1138',
      800: '#0A0F2E',
      900: '#070C22',
    },
    surface: '#F5F6F7',
    muted: '#5B738B',
  },
  fonts: {
    heading: 'Manrope, sans-serif',
    body: 'Inter, sans-serif',
  },
  borderRadius: {
    sm: '0.375rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem',
    '2xl': '1.25rem',
    full: '9999px',
  },
  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
    '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
    premium: '0 8px 30px rgb(0 0 0 / 0.08)',
  },
  spacing: {
    section: '6rem',
    'section-sm': '4rem',
    container: '1280px',
  },
  animation: {
    fadeIn: 'fadeIn 0.6s ease-out forwards',
    slideUp: 'slideUp 0.6s ease-out forwards',
    slideDown: 'slideDown 0.4s ease-out forwards',
    scaleIn: 'scaleIn 0.4s ease-out forwards',
    shimmer: 'shimmer 2s infinite',
  },
} as const;

export type Theme = typeof theme;