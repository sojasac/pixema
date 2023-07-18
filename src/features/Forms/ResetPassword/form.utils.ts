import { type FormState, type FormErrors } from './form.types';
export function getDefaultFormValues(): FormState {
  return {
    email: '',
    new_password: '',
    confirmPassword: ''
  };
}

const MIN_PASSWORD_LENGTH = 8;

function isValidEmail(email: FormState['email']): boolean {
  return /\S+@\S+\.\S+/.test(email);
}
function isValidPassword(password: FormState['new_password']): boolean {
  return password.trim().length >= MIN_PASSWORD_LENGTH;
}

export const getFormErrors = (form: FormState) => {
  const errors: FormErrors = {};
  if (!isValidEmail(form.email)) {
    errors.email = 'Email should be email';
  }
  if (!isValidPassword(form.new_password)) {
    errors.new_password = 'Password should be more than 4 symbols';
  }
  if (form.new_password !== form.confirmPassword) {
    errors.confirmPassword = 'Password and Confirm Password must match';
  }
  return errors;
};
