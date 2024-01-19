import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchUserData } from "../redux/slices/Slice";
import { deleteData } from "../redux/slices/Slice";
import { Formik, Form, Field } from "formik";
import { v4 as uuidv4 } from "uuid";
import { postData } from "../redux/slices/Slice";
import { Helmet } from "react-helmet";
import * as Yup from "yup";
const Add = () => {
  const dispatch = useDispatch();
  let [type, setType] = useState("");
  let [search, setSearch] = useState("");

  let { data, loading, error, wishlist, basket } = useSelector(
    (state) => state.pastries
  );
  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);
  console.log(data);
  let sorted = () => {
    if (type == "price") {
      return [...data].sort((a, b) => a.price - b.price);
    } else if (type == "az") {
      return [...data].sort((a, b) => a.name.localeCompare(b.name));
    } else if (type == "za") {
      return [...data].sort((a, b) => b.name.localeCompare(a.name));
    }
    return data;
  };
  console.log("haha");
  // const SignupSchema = Yup.object().shape({
  //   firstName: Yup.string()
  //     .min(2, "Too Short!")
  //     .max(50, "Too Long!")
  //     .required("Required"),
  //   lastName: Yup.string()
  //     .min(2, "Too Short!")
  //     .max(50, "Too Long!")
  //     .required("Required"),
  //   email: Yup.string().email("Invalid email").required("Required"),
  // });
  return (
    <>
      <div className="application">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Add</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        ...
      </div>
      <div className="buttonsort">
        <button className="price" onClick={() => setType("price")}>
          price
        </button>
        <button className="az" onClick={() => setType("az")}>
          A to Z
        </button>
        <button className="za" onClick={() => setType("za")}>
          Z to A
        </button>
      </div>
      <div className="input">
        <input
          type="text"
          placeholder="type smthng.."
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="post">
        {" "}
        <Formik
          initialValues={{
            id: uuidv4(),
            name: "",
            desc: "",
            price: "",
            imgSrc:
              "https://preview.colorlib.com/theme/cakeshop/assets/img/gallery/items3.jpg",
          }}
          // validationSchema={SignupSchema}
          onSubmit={(values) => {
            dispatch(postData(values));
            // same shape as initial values
            console.log(values);
          }}
        >
          {({ errors, touched, handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
              <Field name="name" placeholder="name" />
              {errors.name && touched.name ? <div>{errors.name}</div> : null}
              <Field name="desc" placeholder="description" />
              {errors.desc && touched.desc ? <div>{errors.desc}</div> : null}
              <Field name="price" placeholder="price" />
              {errors.price && touched.price ? <div>{errors.price}</div> : null}
              <button type="submit">Submit</button>
            </Form>
          )}
        </Formik>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sorted()
              .filter((elem) =>
                elem.name.toLowerCase().includes(search.toLowerCase())
              )
              .map((row, i) => (
                <TableRow
                  key={i}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.desc}</TableCell>
                  <TableCell>{row.price}</TableCell>
                  <TableCell>
                    <button
                      className="delete"
                      onClick={() => dispatch(deleteData(row.id))}
                    >
                      delete
                    </button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Add;
