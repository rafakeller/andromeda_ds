export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'outlined';
  size: 'small' | 'standard' | 'large';
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
}

export type TStyledButtonProps = {
  $variant?: 'primary' | 'secondary' | 'tertiary' | 'outlined';
  $size: 'small' | 'standard' | 'large';
  $fullWidth?: boolean;
  $loading?: boolean;
};
