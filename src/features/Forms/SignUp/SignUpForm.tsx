import { useState, useMemo, useCallback } from 'react';

import { NavLink } from 'react-router-dom';

import FormStyles from '~/features/Forms/FormsStyles.module.scss';
import { Button } from '~/shared/ui/button/Button';
import { InputField } from '~/shared/ui/inputField/InputField';
import { type CreateUserPayload } from '~/store/api/user/user.api';

import { formSchema } from './form.schema';
import { getDefaultFormValues, getFormErrors } from './form.utils';
import { type FormState } from './forms.types';

export const SignUp = ({
  onCreateUser,
  error
}: {
  onCreateUser: (user: CreateUserPayload) => void;
  error?: string;
}) => {
  const [formState, setFormState] = useState<FormState>(getDefaultFormValues);
  const [touchedFields, setTouchedFields] = useState<Set<string>>(
    () => new Set()
  );

  const updateFormValues = useCallback((newFormValue: Partial<FormState>) => {
    setFormState((previousFields) => ({ ...previousFields, ...newFormValue }));
    setTouchedFields(
      (previousFields) =>
        new Set([...previousFields.values(), ...Object.keys(newFormValue)])
    );
  }, []);
  const formErrors = useMemo(() => getFormErrors(formState), [formState]);
  return (
    <form
      className={FormStyles.container}
      onSubmit={(event) => {
        event.preventDefault();
        const { confirmPassword, ...user } = formState;
        onCreateUser(user);
      }}
    >
      <h2>Sign up</h2>
      {error && <span className={FormStyles.error}>{error}</span>}
      {formSchema.map((field) => (
        <InputField
          {...field}
          key={field.name}
          value={formState[field.name]}
          error={
            touchedFields.has(field.name) ? formErrors[field.name] : undefined
          }
          onChange={({ target: { value } }) =>
            updateFormValues({ [field.name]: value })
          }
          shouldFitContainer
        />
      ))}
      <div>
        <Button
          type="submit"
          style={{ width: '100%' }}
        >
          Sign Up
        </Button>
        <p style={{ textAlign: 'center', marginTop: '10px' }}>
          Already have an account? <NavLink to="/auth/sign-in">Sign In</NavLink>
        </p>
      </div>
    </form>
  );
};
