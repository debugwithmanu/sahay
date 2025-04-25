import { ReactNode } from 'react';

interface Props {
  type: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  children: ReactNode;
}

export default function Button({ type = 'button', onClick, children }: Props) {
  return <button type={type} onClick={onClick}>{children}</button>;
}
