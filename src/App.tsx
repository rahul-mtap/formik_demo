import "./App.css";
import { useFormik } from "formik";
import * as Yup from "yup";

interface FormValues {
  name: string;
  email: string;
  channel: string;
}
const initialValues: FormValues = {
  name: "Rahul",
  email: "",
  channel: "",
};
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
function App() {
  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      console.log("values", values);
    },
    validationSchema: Yup.object<FormValues>({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
      channel: Yup.string().required("Channel is required"),
    }),
  });
  console.log("formik Errors", formik.errors);
  return (
    <div className="App">
      <div>
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={formik.handleChange}
            value={formik.values.name}
            onBlur={formik.handleBlur}
          />
          {formik.errors.name && formik.touched.name ? (
            <div className="error_message">{formik.errors.name}</div>
          ) : (
            ""
          )}

          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.errors.email && formik.touched.email ? (
            <div className="error_message">{formik.errors.email}</div>
          ) : (
            ""
          )}

          <label htmlFor="channel">Channel</label>
          <input
            type="text"
            name="channel"
            id="channel"
            onChange={formik.handleChange}
            value={formik.values.channel}
            onBlur={formik.handleBlur}
          />
          {formik.errors.channel && formik.touched.channel ? (
            <div className="error_message">{formik.errors.channel}</div>
          ) : (
            ""
          )}

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default App;
