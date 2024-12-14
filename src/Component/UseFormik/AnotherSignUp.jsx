import { useFormik } from 'formik'
import { object, string } from "yup";
import React from 'react'


const AnotherSignUp = () => {


    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: ""
        },

        validationSchema: object({
            name: string().min(2, "name must have 2 characters").required(),
            email: string().email().required(),
            password: string().min(6, "password must have 6 characters").required()
        }),

        onSubmit: (values, {resetForm}) => {
            console.log(values);
            resetForm({values:""})
        }
    })


  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>
        <label htmlFor="name">Name : </label>
        <input type="text" name="name" value={formik.values.name} id="name" onChange={formik.handleChange}></input>
        </div>
        {formik.touched.name && formik.errors.name && (
            <span style={{ color: "red" }}>{formik.errors.name}</span>
        )}
        
      

        <div>
        <label htmlFor="email">Email : </label>
        <input type="email" name="email" value={formik.values.email} id="email" onChange={formik.handleChange}></input>
        </div>
        {formik.touched.email && formik.errors.email && (
            <span style={{ color: "red" }}>{formik.errors.email}</span>
        )}
       

        <div>
        <label htmlFor="password">Password : </label>
        <input type="text" name="password" value={formik.values.password} id="password" onChange={formik.handleChange}></input>
        </div>
        {formik.touched.password && formik.errors.password && (
            <span style={{ color: "red" }}>{formik.errors.password}</span>
        )}
        <br/><br/>
        
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default AnotherSignUp
