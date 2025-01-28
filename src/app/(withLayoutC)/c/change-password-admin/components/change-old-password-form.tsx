"use client";

import { Formik } from "formik";
import { useState } from "react";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { ChangeOldPasswordFormValidationSchema } from "../lib/validate";
import TextInput from "./TextInput";

function ChangeOldPassword() {
  const [errMsg, setErrMsg] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <div className="w-screen flex items-center justify-center rounded-lg p-6">
      <Formik
        initialValues={{
          currentpassword: "",
          newpassword: "",
          confirmpassword: "",
        }}
        validationSchema={toFormikValidationSchema(
          ChangeOldPasswordFormValidationSchema
        )}
        onSubmit={async (values) => {
          setIsSubmitting(true);
          try {
            // Add your API submission logic here
            console.log(values);
          } catch (error) {
            setErrMsg("An error occurred. Please try again.");
          } finally {
            setIsSubmitting(false);
          }
        }}
      >
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit} className="space-y-6">
            {errMsg && <p className="text-red-500 text-sm">{errMsg}</p>}

            {/* Inputs */}
            <div className="space-y-4">
              <TextInput
                label="Old Password"
                name="currentpassword"
                type="password"
                icon="/icons/lock.svg"
                placeholder="Old Password"
                mainClassName="rounded-md border focus:ring focus:ring-blue-300"
              />
              <TextInput
                label="New Password"
                name="newpassword"
                type="password"
                icon="/icons/lock.svg"
                placeholder="New Password"
                mainClassName="rounded-md border focus:ring focus:ring-blue-300"
              />
              <TextInput
                label="Confirm Password"
                name="confirmpassword"
                type="password"
                icon="/icons/lock.svg"
                placeholder="Confirm Password"
                mainClassName="rounded-md border focus:ring focus:ring-blue-300"
              />
              <small>Passwords should be at least 8 characters long.</small>
            </div>

            {/* Continue Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-yellow-500 text-black px-4 py-3 text-lg font-semibold rounded-md shadow-md hover:bg-yellow-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Submitting..." : "Continue"}
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default ChangeOldPassword;
