import { useFormik } from "formik";
// import * as yup from "yup"
import { object, string } from "yup";

// import React, { useState } from 'react';

const SignUp = () => {

  
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },

    validationSchema: object({
      name: string().min(2, "Name must have 2 characters").required(),
      email: string().email().required(),
      password: string().min(6, "Password must have 6 character").required(),
    }),

    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm({ values: "" }); //er mane input golo ekbar submit korar por r kono data thakbe na input box e
    },
  });

  // const [user, setUser] = useState({name: "", email: "", pass: ""})
  // const {name, email, pass} = user

  // const nameChangeHandle = (e) =>{
  //     setUser({...user, [e.target.name]:e.target.value})
  // }

  // const submitHandler = (e) =>{
  //     e.preventDefault()
  //     console.log(user)
  // }

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="name">Name : </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
          ></input>
        </div>
        {formik.touched.name && formik.errors.name && (
          <span style={{ color: "red" }}>{formik.errors.name}</span>
        )}<br/>

        <div>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="email"
            value={formik.values.email}
            name="email"
            onChange={formik.handleChange}
          ></input>
        </div>
        {formik.touched.email && formik.errors.email && (
          <span style={{ color: "red" }}>{formik.errors.email}</span>
        )}<br/>

        <div>
          <label htmlFor="password">Password : </label>
          <input
            type="text"
            id="password"
            value={formik.values.password}
            name="password"
            onChange={formik.handleChange}
          ></input>
        </div>
        {formik.touched.password && formik.errors.password && (
          <span style={{ color: "red" }}>{formik.errors.password}</span>
        )}<br/><br/>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SignUp;
