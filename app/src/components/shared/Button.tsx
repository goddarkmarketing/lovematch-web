import type { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import { clsx } from 'clsx';

type Variant = 'primary' | 'secondary' | 'ghost' | 'dark';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  fullWidth?: boolean;
}

export function Button({
  variant = 'primary',
  fullWidth,
  className,
  children,
  ...props
}: PropsWithChildren<ButtonProps>) {
  return (
    <button
      className={clsx('lm-button', `lm-button--${variant}`, fullWidth && 'lm-button--full', className)}
      {...props}
    >
      {children}
    </button>
  );
}
