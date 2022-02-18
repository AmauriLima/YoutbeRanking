export type User = {
  id: string;
  name: string;
  avatar: string;
}

export type UserLogin = {
  email: string;
  password: string;
}

export type CreateUser = {
  email: string;
  confirmEmail: string;
  password: string;
  confirmPassword: string;
}
