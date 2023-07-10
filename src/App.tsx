import "./App.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import DisplayFormErrors from "./DisplayFormErrors";

interface FormValues {
  name: string;
  email: string;
  channel: string;
  comments: string;
  address: string;
  social: {
    facebook: string;
    twitter: string;
  };
  role: string;
  color: string;
}

function App() {
  const handleSubmit = (values: FormValues) => {
    console.log("values", values);
  };
  const initialValues: FormValues = {
    name: "Rahul",
    email: "",
    channel: "",
    comments: "",
    address: "",
    social: {
      facebook: "",
      twitter: "",
    },
    role: "",
    color: "",
  };
  const validationSchema = Yup.object<FormValues>({
    name: Yup.string()
      .min(3, "Please add atleast 3 characters")
      .required("Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    channel: Yup.string().required("Channel is required"),
    address: Yup.string().required("Address is required"),
    role: Yup.string().required("Please choose either one"),
    comments: Yup.string()
      .min(10, "Please add atleast 10 characters")
      .required("Comment is required"),
    color: Yup.string().required("Please chose a color"),
  });
  return (
    <div className="App">
      <div>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <Form>
            <div className="form-control">
              <label htmlFor="name">Name</label>
              <Field type="text" name="name" id="name" />
              <ErrorMessage name="name" component={DisplayFormErrors} />
            </div>
            <div className="form-control">
              <label htmlFor="email">Email</label>
              <Field type="email" name="email" id="email" />
              <ErrorMessage name="email" component={DisplayFormErrors} />
            </div>
            <div className="form-control">
              <label htmlFor="channel">Channel</label>
              <Field
                type="text"
                name="channel"
                id="channel"
                placeholder="Your channel name"
              />
              <ErrorMessage name="channel" component={DisplayFormErrors} />
            </div>
            <div className="form-control">
              <Field name="color" as="select">
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
              </Field>
              <ErrorMessage name="color" component={DisplayFormErrors} />
            </div>
            <div className="form-control">
              <label htmlFor="address">Address</label>
              <Field
                type="text"
                name="address"
                id="address"
                placeholder="Address"
              />
              <ErrorMessage name="address" component={DisplayFormErrors} />
            </div>
            <div className="form-control">
              <label>Social Profiles</label>
              <Field
                type="text"
                name="social.facebook"
                id="facebook"
                placeholder={"Facebook"}
              />
              <Field
                type="text"
                name="social.twitter"
                id="twitter"
                placeholder={"Twitter"}
              />
            </div>
            <div className="form-control">
              <div role="group" aria-labelledby="my-radio-group">
                <label>
                  <Field type="radio" name="role" value="One" />
                  Driver
                </label>
                <label>
                  <Field type="radio" name="role" value="Two" />
                  Vendor
                </label>
              </div>
              <ErrorMessage name="role" component={DisplayFormErrors} />
            </div>
            <div className="form-control">
              <label htmlFor="comments">Comments</label>
              <Field as="textarea" id="comments" name="comments" />
              <ErrorMessage name="comments" component={DisplayFormErrors} />
            </div>
            <button type="submit">Submit</button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default App;
