import Link from 'next/link';
import { FormEvent, FormEventHandler } from 'react';

import { Container, Footer } from './styles';

type FormProps = {
  children: React.ReactNode;
  label: string;
  title: string;
  onConfirm: () => void;
  secondaryLink: {
    label: string,
    href: string,
  }
}

export function Form({
  children, title, label, onConfirm, secondaryLink,
}: FormProps) {
  const onSubmit: FormEventHandler<HTMLFormElement> = (event: FormEvent) => {
    event.preventDefault();
    onConfirm();
  };

  return (
    <Container onSubmit={onSubmit}>
      <span className="gradient">
        {title}
      </span>
      {children}
      <Footer>
        <Link href={secondaryLink.href}>{secondaryLink.label}</Link>
        <button type="submit">{label || 'Confirmar'}</button>
      </Footer>
    </Container>
  );
}
