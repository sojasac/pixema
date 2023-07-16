import { type FormState, type FormErrors } from './forms.types';
export function getDefaultFormValues(): FormState {
  return {
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  };
}

const MIN_NAME_LENGTH = 3;
const MIN_PASSWORD_LENGTH = 5;

function isValidName(name: FormState['username']): boolean {
  return name.trim().length >= MIN_NAME_LENGTH;
}
function isValidEmail(email: FormState['email']): boolean {
  return /\S+@\S+\.\S+/.test(email);
}
function isValidPassword(password: FormState['password']): boolean {
  return password.trim().length >= MIN_PASSWORD_LENGTH;
}

export const getFormErrors = (form: FormState) => {
  const errors: FormErrors = {};
  if (!isValidName(form.username)) {
    errors.username = 'Name should be more than 2 symbols';
  }
  if (!isValidEmail(form.email)) {
    errors.email = 'Email should be email';
  }
  if (!isValidPassword(form.password)) {
    errors.password = 'Password should be more than 4 symbols';
  }
  if (form.password !== form.confirmPassword) {
    errors.confirmPassword = 'Password and Confirm Password must match';
  }
  return errors;
};
