import { type FormField } from '~/features/Forms/ResetPassword/form.types';

export const formSchema: FormField[] = [
  {
    label: 'Email',
    placeholder: 'Enter email',
    name: 'email',
    type: 'email',
    required: true
  },
  {
    label: 'Password',
    placeholder: 'Enter password',
    name: 'new_password',
    type: 'password',
    required: true
  },
  {
    label: 'Confirm password',
    placeholder: 'Repeat password',
    name: 'confirmPassword',
    type: 'password',
    required: true
  }
];
