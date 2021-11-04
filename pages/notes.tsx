import { Field, Form, Formik, FormikHelpers } from 'formik';
import React from 'react';
import Note from '../components/ui-components/Note';
import { useGetMeQuery, useUpdateNoteMutation, useWriteNoteMutation } from '../generated/graphql';

interface NoteFormValues {
   id?: string;
   title: string;
   body: string;
}

export default function Notes() {
   const [{ data, fetching }] = useGetMeQuery();

   const [, writeNote] = useWriteNoteMutation();

   const [, updateNote] = useUpdateNoteMutation();

   const initialValues: NoteFormValues = { title: '', body: '', id: '' };

   const onSubmit = async (values: NoteFormValues, { setSubmitting }: FormikHelpers<NoteFormValues>) => {
      if (!values.id) {
         console.log('adding note');
         const result = await writeNote(values);
         console.log(result);
      } else {
         console.log('updating note');
         const result = await updateNote({ data: { body: values.body, title: values.title }, id: values.id });
         console.log(result);
      }
      setSubmitting(false);
   };

   if (fetching) {
      return null;
   }
   return (
      <>
         <h1 className="dark:text-foreground text-center py-8 text-4xl">Notes</h1>

         <Formik initialValues={initialValues} onSubmit={onSubmit}>
            {({ isSubmitting, setValues }) => (
               <div className="flex justify-end h-screen">
                  <Note.SidePanel>
                     {data?.me?.notes.map(note => {
                        return (
                           <Note.ListItem
                              key={note.id}
                              onClick={() => {
                                 setValues({ id: note.id, title: note.title, body: note.body });
                              }}
                           >
                              {note.title}
                           </Note.ListItem>
                        );
                     })}
                  </Note.SidePanel>
                  <Note>
                     <Form className="h-full">
                        <div className="flex flex-row justify-center">
                           <Note.New type="reset" />
                           <div className="flex flex-grow justify-end">
                              <Note.Save type="submit" disabled={isSubmitting} />
                           </div>
                        </div>
                        <div className="flex flex-col justify-center h-full">
                           <Field as={Note.Title} name="title" />
                           <Field as={Note.Textarea} name="body" />
                        </div>
                     </Form>
                  </Note>
               </div>
            )}
         </Formik>
      </>
   );
}
