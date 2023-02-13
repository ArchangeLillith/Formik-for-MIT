import React from 'react';
import { useFormik } from 'formik';

function App(){
  const formik = useFormik({
    initialValues: {
      email: '',
      password:'',
    },
    onSubmit: values => {
      alert("login succesful!");
    },
    validate: (values) => {
      let errors = {};
      if (!values.email) errors.email - "field required";
      if (!values.password) errors.password = "field required";
      if (!(values.email.includes("@") && values.email.includes("."))) errors.emailFormat = "Please use an email" 
      return errors
    },
  });

  return (
  <div>
    <form onSubmit={formik.handleSubmit}>
      <div>Email:</div>
      <input
        id="emailField"
        name="email"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.firstName}
      />
      < br/>
      {formik.errors.email ? (
        <div id="emailError" style = {{color: "red"}}>
          {formik.errors.email}
        </div>
      ) : null}
      {formik.errors.emailFormat ? (
        <div id="emailError" style = {{color: "red"}}>
          {formik.errors.emailFormat}
        </div>
      ) : null}
      <div>Password:</div>
      <input
        id="pswField"
        name="password"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.lastName}
      />
      < br/>
      {formik.errors.password ? (
        <div id="pswError" style = {{color: 'red'}}>
          {formik.errors.password}
        </div>
      ) : null}
      <button type="submit">Submit</button>
    </form>
    </div>
  );
};

export default App;