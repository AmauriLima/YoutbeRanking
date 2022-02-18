import { ChangeEvent, useState } from 'react';

import { FormGroup } from '@components/FormGroup';
import { Input } from '@components/Input';

import { FieldName, InputObjectProps, ValidateOptions } from './DTO/useFormsDTO';
import { useErrors } from './useErrors';

export function useForms<T>() {
  const [values, setValues] = useState<T>({} as T);

  const {
    getErrorMessageByFieldName,
    handleRequiredFieldChange,
    handleExtraValidations,
    errors,
    clearErrors,
  } = useErrors<T>();

  function handleFieldsChange(validate: Partial<ValidateOptions> | undefined) {
    return (event: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      setValues((prevState) => ({
        ...prevState,
        [name]: value,
      }));

      if (validate) {
        if (validate.required) {
          handleRequiredFieldChange(name as FieldName<T>, validate.required, event);
        }
        if (validate.extraValidations) {
          if (Object.keys(validate.extraValidations).length) {
            handleExtraValidations(
              name as FieldName<T>,
              validate.extraValidations,
              event,
            );
          }
        }
      }
    };
  }

  function createInputs(fields: FieldName<T>[], fieldsObject: InputObjectProps<T>) {
    return fields.map((field) => {
      const {
        label, type, validate,
      } = fieldsObject[field];

      return (
        <FormGroup key={field as string} error={getErrorMessageByFieldName(field)}>
          {label && <label htmlFor={field as string}>{label}</label>}
          <Input
            type={type || 'text'}
            name={field as string}
            id={field as string}
            value={values[field] as any ?? ''}
            error={getErrorMessageByFieldName(field)}
            onChange={handleFieldsChange(validate)}
          />
        </FormGroup>
      );
    });
  }

  function checkFieldPattern(pattern: RegExp, errorMessage: string) {
    return (value: string) => {
      if (!pattern.test(value)) {
        return errorMessage;
      }
    };
  }

  function compareFields(
    field: FieldName<T>,
    fieldToCompare: FieldName<T>,
    errorMessage: string,
  ) {
    return (value: string, errorName: string) => {
      if (value !== values[fieldToCompare] as unknown) {
        return errorMessage;
      }
      clearErrors([{ field, errorName }, { field: fieldToCompare, errorName }]);
    };
  }

  return {
    values,
    errors,
    handleFieldsChange,
    createInputs,
    checkFieldPattern,
    compareFields,
  };
}
