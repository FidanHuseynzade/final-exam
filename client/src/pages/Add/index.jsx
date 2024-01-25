import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from "axios";
import "./index.scss";
import { Helmet } from "react-helmet";


const validationSchema = yup.object({
  name: yup.string().min(2).max(50).required(),
  image: yup.string().required(),
  price: yup.number().min(1).positive().required(),
});

const Add = () => {

    const [rows, setRows] = useState([])
    useEffect(()=>{
        async function fetchData(){
            const getData = await axios.get("http://localhost:3030/flower")
            setRows(getData.rows)
        }
        fetchData()
    },[])
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
    <>
    <Helmet>
        <meta charSet="utf-8" />
        <title>Add</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
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
          <Button
            className="addbtn"
            color="secondary"
            variant="contained"
            fullWidth
            type="submit"
          >
            Add
          </Button>
        </form>
      </div>
      <div className="table">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">Image</TableCell>
                <TableCell align="center">Price</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows && rows.map((row) => (
                <TableRow
                  key={row._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="center">{row.name}</TableCell>
                  <TableCell align="center"><img src={row.image} alt="" /></TableCell>
                  <TableCell align="center">{row.price}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
};

export default Add;
