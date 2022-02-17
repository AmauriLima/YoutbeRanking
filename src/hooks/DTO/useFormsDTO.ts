export type FieldName<T> = keyof T & string;

export type ExtraValidation = {
  [field: string]: (value: string) => string
};

export type ValidateOptions = {
  required: string;
  extraValidations: ExtraValidation;
}

export type InputProps = {
  label: string;
  type?: string,
  validate?: Partial<ValidateOptions>;
}

export type InputObjectProps<T> = {
  [field in FieldName<T>]: InputProps;
}
