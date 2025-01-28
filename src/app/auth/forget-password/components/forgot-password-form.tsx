"use client";

import { Form, Formik } from "formik";
import TextInput from "../../../(withLayoutC)/c/components/TextInput";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { ForgotPasswordFormValidationSchema } from "../lib/validate";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image"; // Import Image from Next.js
import icon1 from "../../../../../public/icons/message.png"; // Image import

function ForgotPasswordForm() {
  const router = useRouter();
  const [errMsg, setErrMsg] = useState("");

  return (
    <Formik
      initialValues={{
        email: "",
      }}
      validationSchema={toFormikValidationSchema(
        ForgotPasswordFormValidationSchema
      )}
      onSubmit={async (values, { setSubmitting }) => {
        try {
          localStorage.setItem("email", values.email);
          const response = await fetch(
            "https://tast-pwvf.onrender.com/user/forgot/password",
            {
              method: "POST",
              body: JSON.stringify(values),
              headers: {
                "Content-Type": "application/json; charset=UTF-8",
              },
            }
          );
          const data = await response.json();

          if (data.status && data.status_code === 200) {
            router.push("/auth/otp-verify");
          } else {
            setErrMsg(data.message || "Something went wrong. Please try again.");
          }
        } catch (error) {
          console.error("Error during form submission:", error);
          setErrMsg("An unexpected error occurred. Please try again.");
        }
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <div className="flex flex-col gap-y-[3.063rem]">
            {/* Render TextInput with styled label and icon */}
            <div className="relative">
              <label
                htmlFor="email"
                className="block mb-2 text-lg font-semibold text-gray-700"
              >
                Email
              </label>
              <div className="flex items-center rounded-2xl border border-gray-300 px-4 py-2 bg-white focus-within:border-yellow-500">
                <Image
                  src={icon1}
                  alt="Email Icon"
                  width={30}
                  height={30}
                  className="mr-3"
                />
                <TextInput
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  type="email"
                  className="w-full focus:outline-none" label={""} icon={undefined}                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full z-10 text-black bg-[#ffb200] hover:bg-yellow-500 rounded-2xl 2xl:px-[5.813rem] 2xl:py-[0.46rem] 2xl:text-2xl text-xl px-10 py-2 2xl:leading-[3.429rem] font-extrabold mt-10 inline-block transition duration-300"
          >
            {isSubmitting ? "Processing..." : "Reset"}
          </button>

          {/* Error Message */}
          {errMsg && (
            <div className="text-red-600 text-center mt-4">
              {errMsg}
            </div>
          )}
        </Form>
      )}
    </Formik>
  );
}

export default ForgotPasswordForm;
