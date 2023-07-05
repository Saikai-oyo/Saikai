import { FormikHelpers } from 'formik';
import * as Yup from 'yup';

import { PasswordDetails } from '../types/passowrd';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const onSubmit = (values: PasswordDetails, { setSubmitting }: FormikHelpers<PasswordDetails>) => {
  //TODO: Initiate this later [SFE-26]
};

export const PasswordSchema = Yup.object().shape({
  password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
  confirmPassword: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .oneOf([Yup.ref('password')], 'Password does not match.')
    .required('Confirm password is required'),
});
