import styled from 'styled-components';
import { TStyledButtonProps } from './Button.types';
import { getSize, getVariant } from './helpers/variantHelper';

export const Button = styled.button<TStyledButtonProps>(
  ({ $variant, $size, $fullWidth, $loading }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    position: 'relative',
    cursor: 'pointer',
    border: 'none',
    boxSizing: 'border-box',
    borderRadius: '8px',

    '&:disabled': {
      cursor: 'default',
    },
    pointerEvents: `$loading`,
    boxShadow: 'rgba(45, 41, 38, 0.2) 0px 10px 28px',
    width: $fullWidth ? '100%' : 'auto',
    minWidth: $fullWidth ? 'auto' : '0px',

    ...getVariant($variant),
    ...getSize($size),
  }),
);

export const Loading = styled.span`
  span,
  span:before,
  span:after {
    background: currentColor;
    border-radius: 50%;
    width: 100px;
    height: ${({ theme }) => theme.spacing.inline['5xs']};
    position: absolute;
    top: 50%;
    left: 50%;
  }
`;
