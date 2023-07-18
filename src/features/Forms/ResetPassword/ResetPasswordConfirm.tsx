import { useCallback, useMemo, useState } from 'react';

import { useNavigate, useParams } from 'react-router-dom';

import { type FetchError } from '~/entities/entities';
import { Button } from '~/shared/ui/button/Button';
import { InputField } from '~/shared/ui/inputField/InputField';
import { Loader } from '~/shared/ui/loader/Loader';
import { isFetchBaseQueryErrorType } from '~/shared/utils/utils';
import { useResetPasswordConfirmMutation } from '~/store/api/user/user.api';

import { formSchema } from './form.schema';
import { type FormState } from './form.types';
import { getDefaultFormValues, getFormErrors } from './form.utils';
import FormStyles from '../FormsStyles.module.scss';

export const ResetPasswordConfirm = () => {
  const tokens = useParams<'uid' | 'token'>();
  const [
    confirmPassword,
    { isSuccess, isUninitialized, isLoading, isError, error }
  ] = useResetPasswordConfirmMutation();
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
  const navigate = useNavigate();
  if (isUninitialized) {
    return (
      <form
        className={FormStyles.container}
        onSubmit={(event) => {
          event.preventDefault();
          void confirmPassword({
            ...formState,
            ...(tokens as { uid: string; token: string })
          });
        }}
      >
        <h2>Reset password</h2>
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
            Reset
          </Button>
        </div>
      </form>
    );
  }
  if (isLoading) {
    return <Loader />;
  }
  if (isError && isFetchBaseQueryErrorType(error) && error.status === 400) {
    return (
      <form
        className={FormStyles.container}
        onSubmit={(event) => {
          event.preventDefault();
          void confirmPassword({
            ...formState,
            ...(tokens as { uid: string; token: string })
          });
        }}
      >
        <h2>Reset password</h2>
        {error && (
          <span className={FormStyles.error}>
            {(error.data as FetchError).message}
          </span>
        )}
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
            Reset
          </Button>
        </div>
      </form>
    );
  }
  if (isSuccess) {
    navigate('/auth/sign-in');
  }
};
