import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import axios from 'axios'
import "./index.scss"

const validationSchema = yup.object({
  name: yup.string().min(2).max(50).required(),
  image: yup.string().required(),
  price: yup.number().min(1).positive().required(),
});

const Add = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      image: "",
      price: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      await axios.post("http://localhost:3030/flower", values);
      resetForm();
    },
  });

  return (
    <div className="form">
      <form onSubmit={formik.handleSubmit}>
        <TextField 
        className="inp"
          fullWidth
          id="name"
          name="name"
          label="Name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
        <TextField
        className="inp"
          fullWidth
          id="image"
          name="image"
          label="Image"
          value={formik.values.image}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.image && Boolean(formik.errors.image)}
          helperText={formik.touched.image && formik.errors.image}
        />
        <TextField
        className="inp"
          fullWidth
          id="price"
          name="price"
          label="Price"
          value={formik.values.price}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.price && Boolean(formik.errors.price)}
          helperText={formik.touched.price && formik.errors.price}
        />
        <Button className="addbtn" color="secondary" variant="contained" fullWidth type="submit">
          Add
        </Button>
      </form>
    </div>
  );
};

export default Add;
