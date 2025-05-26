import { background } from 'storybook/internal/theming';

export const getVariant = (variant?: string) => {
  const variantsOfButton = {
    primary: {
      background: '#D93B3B',
      color: '#F2F2F2',
      '&:hover:not([disabled])': {
        backgroundColor: ' rgba(217, 59, 59, 0.85)',
        boxShadow: 'rgba(45, 41, 38, 0.3) 0px 10px 28px',
      },

      '&:disabled': {
        backgroundColor: 'rgb(250, 121, 121)',
      },
    },
    secondary: {
      background: '#F2F2F2',
      color: '#0D0D0D',
      '&:hover:not([disabled])': {
        backgroundColor: 'rgba(242, 242, 242, 0.84)',
        boxShadow: 'rgba(45, 41, 38, 0.3) 0px 10px 28px',
      },

      '&:disabled': {
        backgroundColor: 'rgb(194, 194, 194)',
      },
    },
    tertiary: {
      background: '#F2C438',
      color: '#0D0D0D',
      '&:hover:not([disabled])': {
        backgroundColor: 'rgb(194, 181, 46)',
        boxShadow: 'rgba(45, 41, 38, 0.3) 0px 10px 28px',
      },

      '&:disabled': {
        backgroundColor: 'rgb(248, 214, 112)',
      },
    },
    outlined: {
      background: 'rgba(47, 56, 64, 0.81)',
      color: '#F2F2F2',
      '&:hover:not([disabled])': {
        backgroundColor: 'rgba(47, 56, 64, 0.60)',
        boxShadow: 'rgba(45, 41, 38, 0.3) 0px 10px 28px',
      },

      '&:disabled': {
        backgroundColor: 'rgb(85, 91, 97)',
      },
    },
  };

  return variantsOfButton[variant || 'primary'];
};

export const getSize = (variant?: string) => {
  const sizesOfButton = {
    large: { padding: '20px 66px' },
    standard: { padding: '15px 56px' },
    small: { padding: '10px 50px' },
  };

  return sizesOfButton[variant || 'standard'];
};
