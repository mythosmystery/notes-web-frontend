import { ErrorMessage, Field, Form, Formik, FormikErrors, FormikHelpers } from 'formik';
import { motion } from 'framer-motion';
import { useRouter } from 'next/dist/client/router';
import { FC } from 'react';
import { useRegisterMutation } from '../../generated/graphql';
import auth from '../../utils/Auth';
import ErrorCard from '../ErrorCard';
import TextInput from '../ui-components/TextInput';

interface FormValues {
   email: string;
   firstName: string;
   lastName: string;
   password: string;
   confirmPassword: string;
}

const RegisterForm: FC = () => {
   const [register] = useRegisterMutation();
   const router = useRouter();

   const validate = (values: FormValues): FormikErrors<FormValues> => {
      const errors = {} as FormikErrors<FormValues>;
      if (values.password != values.confirmPassword) {
         errors.confirmPassword = 'passwords must match';
      }
      return errors;
   };

   const onSubmit = async (values: FormValues, { setSubmitting, setErrors }: FormikHelpers<FormValues>) => {
      const { data } = await register({
         variables: {
            email: values.email,
            firstName: values.firstName,
            lastName: values.firstName,
            password: values.password
         }
      });
      if (data?.register) {
         auth.login(data.register.token);
         router.push('/notes');
         setSubmitting(false);
      } else {
         setErrors({ email: 'Account already exists, please log in' });
      }
   };

   return (
      <Formik
         initialValues={{ email: '', firstName: '', lastName: '', password: '', confirmPassword: '' } as FormValues}
         onSubmit={onSubmit}
         validate={validate}
         validateOnChange={true}
      >
         {({ isSubmitting, isValid }) => (
            <Form>
               <motion.div
                  initial={{ x: -500 }}
                  animate={{ x: 0 }}
                  exit={{ x: 500 }}
                  className='flex flex-col dark:bg-background-secondary bg-white shadow-md p-2'
               >
                  <Field as={TextInput} type='email' name='email' placeholder='email...' />
                  <ErrorMessage component={ErrorCard} name='email' />
                  <Field as={TextInput} type='text' name='firstName' placeholder='first name...' />
                  <Field as={TextInput} type='text' name='lastName' placeholder='last name...' />
                  <Field as={TextInput} type='password' name='password' placeholder='password...' />
                  <Field as={TextInput} type='password' name='confirmPassword' placeholder='confirm password...' />
                  <ErrorMessage name='confirmPassword' component={ErrorCard} />
                  <motion.button
                     whileTap={{ y: 7 }}
                     type='submit'
                     disabled={isSubmitting || !isValid}
                     className='p-1 disabled:cursor-wait dark:disabled:hover:text-disabled disabled:hover:text-disabled dark:hover:text-accent hover:text-background dark:text-foreground text-lg '
                  >
                     Register
                  </motion.button>
               </motion.div>
            </Form>
         )}
      </Formik>
   );
};
export default RegisterForm;
