import React from 'react';
import { IButtonProps } from './Button.types';
import * as S from './Button.styles';

const Button: React.FC<IButtonProps> = ({
  variant,
  size,
  disabled,
  ...props
}) => {
  return (
    <S.Button $variant={variant} $size={size} disabled {...props}>
      Click
    </S.Button>
  );
};

export default Button;
