import { FormikHelpers } from 'formik';
import * as Yup from 'yup';

import { LoginDetails } from '../LoginScreen';

export const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Please enter your email address'),
  password: Yup.string().min(8, 'Password must be at least 8 characters').required('Please enter your password'),
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const onSubmit = (values: LoginDetails, { setSubmitting }: FormikHelpers<LoginDetails>) => {
  //TODO: Initiate this later [SFE-26]
};
