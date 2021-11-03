import { Field, Form, Formik, FormikHelpers } from 'formik';
import { FC } from 'react';
import { useWriteNoteMutation } from '../../generated/graphql';
import Note from '../ui-components/Note';

interface NoteFormValues {
   title: string;
   body: string;
}

const NoteForm: FC = () => {
   const [, writeNote] = useWriteNoteMutation();

   const onSubmit = async (values: NoteFormValues, { setSubmitting }: FormikHelpers<NoteFormValues>) => {
      const { data } = await writeNote(values);
      console.log(data);
      setSubmitting(false);
   };
   return (
      <Formik initialValues={{ title: '', body: '' } as NoteFormValues} onSubmit={onSubmit}>
         <Note>
            <Form>
               <Note.Save type="submit" />
               <Field as={Note.Title} name="title" />
               <Field as={Note.Textarea} name="body" />
            </Form>
         </Note>
      </Formik>
   );
};
export default NoteForm;
