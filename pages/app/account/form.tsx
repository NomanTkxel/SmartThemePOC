import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";

import { MyPage } from "components/types";
import { trpc } from "components/trpc";

const AccountsForm: MyPage = (props) => {
  const [message, setMessage] = useState("");
  const [profImage, setProfImage]: any = useState({});

  // Setting Up TRPC Instance
  const userData: any = trpc.user.useMutation();

  const formik = useFormik({
    initialValues: {
      email: "",
      firstname: "",
      lastname: "",
      password: "",
    },
    onSubmit: (values) => {
      // Converting File to Buffer
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result;
        userData.mutate({
          ...values,
          profileImage: base64String,
        });
      };
      reader.readAsDataURL(profImage);
      setMessage("Form Submitted");
    },
    validationSchema: yup.object({
      firstname: yup.string().trim().required("First Name is required"),
      lastname: yup.string().trim().required("Second Name is required"),
      email: yup
        .string()
        .email("Must be a valid email")
        .required("Email is required"),
      password: yup
        .string()
        .required("Password is required")
        .min(8, "Password is too short - should be 8 chars minimum."),
    }),
  });

  // Handling Image
  const handleFileChange = (e: any) => {
    setProfImage(e.target.files[0]);
  };
  return (
    <>
      {message && (
        <div className="text-center text-green-300 text-2xl mt-8" role="alert">
          {message}
        </div>
      )}
      <form
        className="w-full max-w-lg ml-auto mr-auto mt-10"
        onSubmit={formik.handleSubmit}
      >
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <div className="mb-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="firstname"
              >
                First Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                type="text"
                placeholder="First Name"
                name="firstname"
                value={formik.values.firstname}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.firstname && (
                <div className="text-red-600">{formik.errors.firstname}</div>
              )}
            </div>
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <div className="mb-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="lastname"
              >
                Last Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                type="text"
                placeholder="Last Name"
                name="lastname"
                value={formik.values.lastname}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.lastname && (
                <div className="text-red-600">{formik.errors.lastname}</div>
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <div className="mb-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                type="email"
                placeholder="Email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.email && (
                <div className="text-red-600">{formik.errors.email}</div>
              )}
            </div>
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <div className="mb-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                type="password"
                placeholder="Password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.password && (
                <div className="text-red-600">{formik.errors.password}</div>
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full  px-3 mb-6 md:mb-0">
            <div className="mb-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="profileImage"
              >
                Profile Image
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                type="file"
                onChange={handleFileChange}
              />
              {/* {formik.errors.email && (
                <div className="text-red-600">{formik.errors.email}</div>
              )} */}
            </div>
          </div>
          <button type="submit" className="btn w-40 ml-3 mt-6">
            Send
          </button>
        </div>
      </form>
    </>
  );
};

export default AccountsForm;
