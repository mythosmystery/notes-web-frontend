import { ErrorMessage, Field, Form, Formik, FormikHelpers } from 'formik';
import { FC } from 'react';
import { useRouter } from 'next/dist/client/router';
import { useLoginMutation } from '../../generated/graphql';
import TextInput from '../ui-components/TextInput';
import ErrorCard from '../ErrorCard';

interface FormValues {
   email: string;
   password: string;
}

const LoginForm: FC = () => {
   const router = useRouter();
   const [, login] = useLoginMutation();

   const onSubmit = async (values: FormValues, { setSubmitting, setErrors }: FormikHelpers<FormValues>) => {
      const res = await login(values);
      if (res.data?.login) {
         setSubmitting(false);
         router.push('/notes');
      }
      if (!res.data?.login) {
         setErrors({ password: 'Incorrect email or password' });
      }
   };

   return (
      <Formik initialValues={{ email: '', password: '' } as FormValues} onSubmit={onSubmit}>
         {({ isSubmitting }) => (
            <Form>
               <div className="flex flex-col dark:bg-background-secondary bg-white shadow-md p-2">
                  <Field as={TextInput} type="email" name="email" placeholder="email..." />
                  <Field as={TextInput} type="password" name="password" placeholder="password..." />
                  <ErrorMessage component={ErrorCard} name="password" />
                  <button
                     type="submit"
                     disabled={isSubmitting}
                     className="p-1 disabled:cursor-wait dark:disabled:hover:text-disabled dark:hover:text-accent hover:text-background dark:text-foreground text-lg "
                  >
                     Login
                  </button>
               </div>
            </Form>
         )}
      </Formik>
   );
};
export default LoginForm;
