import "./App.css";
import { useFormik } from "formik";
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
    validate: (values) => {
      let errors: FormValues = {
        name: "",
        email: "",
        channel: "",
      };
      if (!values.name) {
        errors.name = "Name is required";
      }
      if (values.name.trim().length < 1) {
        errors.name = "Please write at least 2 characters";
      }
      if (!values.email) {
        errors.email = "Email is required";
      } else if (!emailRegex.test(values.email)) {
        errors.email = "Invalid email format";
      }
      if (!values.channel) {
        errors.channel = "Channel is required";
      }
      return errors;
    },
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
