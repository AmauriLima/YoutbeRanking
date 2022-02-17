import { NextPage } from 'next';
import { validateEmailRegex } from 'src/utils/validateEmailRegex';

import { CreateUser } from '@services/AuthService/DTO';

import { InputObjectProps } from '@hooks/DTO/useFormsDTO';
import { useForms } from '@hooks/useForms';

import { PageLayout } from '@components/PageLayout';

const SignIn: NextPage = () => {
  const { createInputs, checkFieldPattern } = useForms<CreateUser>();

  const fieldsObject = {
    email: {
      label: 'E-mail',
      type: 'email',
      validate: {
        required: 'E-mail é obrigatório',
        extraValidations: {
          validateEmail: checkFieldPattern(validateEmailRegex, 'E-mail inválido'),
        },
      },
    },
    password: {
      label: 'Senha',
      type: 'password',
      validate: {
        required: 'Senha é obrigatória',
      },
    },
  } as InputObjectProps<CreateUser>;

  return (
    <PageLayout pageTitle="ListVideo - Login">
      {createInputs(['email', 'password'], fieldsObject)}
    </PageLayout>
  );
};

export default SignIn;
