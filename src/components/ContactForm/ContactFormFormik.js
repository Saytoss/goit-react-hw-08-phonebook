import React from "react";
import PropTypes from "prop-types";
import { Formik, Field, Form, ErrorMessage } from "formik";
import styles from "./ContactForm.module.css";
import { Button } from "@material-ui/core";
import * as Yup from "yup";

function ContactForm({ addContact }) {
  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      validationSchema={Yup.object({
        name: Yup.string()
          .min(2, "Must be 2 characters or more")
          .max(15, "Must be 15 characters or less")
          .required("Required"),
        number: Yup.string()
          .min(10, "Must be 10 characters or more")
          .max(15, "Must be 15 characters or less")
          .required("Required"),
      })}
      onSubmit={(values) => {
        addContact(values);
      }}
    >
      <Form className={styles.form}>
        <label htmlFor="name" className={styles.label}>
          Name
        </label>
        <Field name="name" type="text" className={styles.input} />
        <ErrorMessage name="name" />
        <label htmlFor="number" className={styles.label}>
          Number
        </label>
        <Field name="number" type="text" className={styles.input} />
        <ErrorMessage name="number" />

        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </Form>
    </Formik>
  );
}

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};

export default ContactForm;
