import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { LEVELS } from "../../models/levels.enum";

const taskschema = Yup.object().shape(
    {
        name: Yup.string()
                .min(3, 'Too Short!')
                .max(20, 'Too long!')
                .required('Is required'),
        description: Yup.string()
                .min(5, 'Too short!')
                .max(50, 'Too long!')
                .required('Is required')
    }
);

const Formulario = ({add}) => {
  const initialCredentials = {
    description: "",
    name: "",
    completed: false,
    level: LEVELS.NORMAL
  };

  return (
    <div>
      <h3>Form formik</h3>
      <Formik
        initialValues={initialCredentials}
        //**Yup validation */
        validationSchema={taskschema}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 1000));
          alert(JSON.stringify(values, null, 2));
          //const newTask = new Task(values)
          add(values);
        }}
      >
        {props => {
            const {
                values,
                touched,
                errors,
                isSubmitting
            } = props;
            return (
                <Form>
          <label htmlFor="name">Task</label>
          <Field id="name" name="name" placeholder="Task" />

          {errors.name && touched.name && 
            (
                <p>{errors.name}</p>
            )}

          <label htmlFor="description">Description</label>
          <Field
            id="description"
            name="description"
            placeholder="Description"
            type="text"
          />

            {errors.description && touched.description &&
            (
                <p>{errors.description}</p>
            )}
            
          <button type="submit">Submit</button>
          {isSubmitting ? (<p>Crear Tareas</p>) : null}
        </Form>
            )
        }} 
               
      </Formik>
    </div>
  );
};

export default Formulario;
