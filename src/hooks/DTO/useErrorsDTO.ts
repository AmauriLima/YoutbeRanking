import { FieldName } from './useFormsDTO';

export type Error = {
  errorName: string;
  message: string;
}

export type Errors<T> = {
  [field in FieldName<T>]: Error;
};
