import { createTheme } from '@mui/material/styles';
declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    'btn-primary': true;
    'btn-secondary': true;
    'btn-contained': true;
  }
}
declare module '@mui/material/styles' {
  interface TypographyVariants {
    'header-banner': React.CSSProperties;
    'label-input': React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    'header-banner'?: React.CSSProperties;
    'label-input'?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    'header-banner': true;
    'label-input': true;
  }
}

const palette = {
  primary: {
    main: '#000',
  },
  secondary: {
    main: '#7070700D',
  },
  darkopa: {
    main: '#7070700D',
  },
};

export const theme = createTheme({
  palette: palette,
  typography: {
    fontFamily: ['Prompt', 'sans-serif'].join(','), // ทำให้ component Typography ใช้ font Prompt
    /* Custom Typography */
    'header-banner': {
      position: 'relative',
      fontSize: 120,
      fontWeight: 600,
      color: palette.primary.main,
      fontFamily: ['Prompt', 'sans-serif'].join(','),
      paddingBottom: 30,
    },
    'label-input': {
      fontSize: '.95rem',
      fontWeight: 600,
      fontFamily: ['Prompt', 'sans-serif'].join(','),
      color: 'white',
    },
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'btn-primary' },
          style: {
            backgroundColor: palette.primary.main,
            borderRadius: 100,
            '&:hover': {
              backgroundColor: palette.primary.main,
            },
          },
        },
        {
          props: { variant: 'btn-secondary' },
          style: {
            backgroundColor: 'white',
            borderRadius: 100,
            '&:hover': {
              backgroundColor: 'white',
            },
          },
        },
        {
          props: { variant: 'btn-contained' },
          style: {
            backgroundColor: palette.primary.main,
            borderRadius: 8,
            minWidth: '180px',
            padding: '3px 16px',
            '&:hover': {
              backgroundColor: palette.primary.main,
            },
          },
        },
      ],
    },
    MuiInput: {},
  },
});
