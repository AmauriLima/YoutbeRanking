import { ChangeEvent, useState } from 'react';

import { Error, Errors } from './DTO/useErrorsDTO';
import { ExtraValidation, FieldName } from './DTO/useFormsDTO';

export function useErrors<T>() {
  const [errors, setErrors] = useState<Errors<T>>({} as Errors<T>);

  function setError(field: FieldName<T>, { message, errorName }: Error) {
    setErrors((prevState) => ({ ...prevState, [field]: { message, errorName } }));
  }

  function removeError(fieldName: FieldName<T>) {
    setErrors((prevstate) => {
      const newErrorsObject = prevstate;
      delete newErrorsObject[fieldName];
      return newErrorsObject;
    });
  }

  function getErrorMessageByFieldName(field: FieldName<T>) {
    return errors[field]?.message;
  }

  function handleRequiredFieldChange(
    name: FieldName<T>,
    errorMessage: string,
    event: ChangeEvent<HTMLInputElement>,
  ) {
    if (!event.target.value) {
      setError(name, { errorName: 'required', message: errorMessage });
    } else {
      removeError(name);
    }
  }

  function handleExtraValidations(
    name: FieldName<T>,
    validations: ExtraValidation,
    event: ChangeEvent<HTMLInputElement>,
  ) {
    Object.keys(validations).forEach((validationName) => {
      if (!event.target.value) return;

      const messageIfHasError = validations[validationName](event.target.value);

      if (messageIfHasError) {
        setError(name, { errorName: validationName, message: messageIfHasError });
      } else {
        removeError(name);
      }
    });
  }

  return {
    errors,
    setError,
    removeError,
    getErrorMessageByFieldName,
    handleRequiredFieldChange,
    handleExtraValidations,
  };
}
