/* eslint-disable @typescript-eslint/no-empty-function */
import { NextPage } from 'next';
import { validateEmailRegex } from 'src/utils/validateEmailRegex';

import { CreateUser } from '@services/AuthService/DTO';

import { InputObjectProps } from '@hooks/DTO/useFormsDTO';
import { useForms } from '@hooks/useForms';

import { Form } from '@components/Form';
import { PageLayout } from '@components/PageLayout';

const Register: NextPage = () => {
  const { createInputs, checkFieldPattern, compareFields } = useForms<CreateUser>();

  const fieldsObject = {
    email: {
      label: 'E-mail',
      type: 'email',
      validate: {
        required: 'E-mail é obrigatório',
        extraValidations: {
          validateEmail: checkFieldPattern(validateEmailRegex, 'E-mail inválido'),
          compareEmails: compareFields('email', 'confirmEmail', 'E-mails não conferem'),
        },
      },
    },
    confirmEmail: {
      label: 'E-mail',
      type: 'email',
      validate: {
        required: 'E-mail é obrigatório',
        extraValidations: {
          validateEmail: checkFieldPattern(validateEmailRegex, 'E-mail inválido'),
          compareEmails: compareFields('confirmEmail', 'email', 'E-mails não conferem'),
        },
      },
    },
    password: {
      label: 'Senha',
      type: 'password',
      validate: {
        required: 'Senha é obrigatória',
        extraValidations: {
          comparePasswords: compareFields('password', 'confirmPassword', 'Senhas não conferem'),
        },
      },
    },
    confirmPassword: {
      label: 'Senha',
      type: 'password',
      validate: {
        required: 'Senha é obrigatória',
        extraValidations: {
          comparePasswords: compareFields('confirmPassword', 'password', 'Senhas não conferem'),
        },
      },
    },
  } as InputObjectProps<CreateUser>;

  return (
    <PageLayout pageTitle="ListVideo - Login">
      <Form
        title="Fazer login"
        label="Entrar"
        secondaryLink={{ href: '/', label: 'Cadastre-se' }}
        onConfirm={() => { }}
      >
        {createInputs(['email', 'confirmEmail', 'password', 'confirmPassword'], fieldsObject)}
      </Form>
    </PageLayout>
  );
};

export default Register;
