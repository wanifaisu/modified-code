"use client";

import { Form, Formik } from "formik";
import TextInput from "../../../(withLayoutC)/c/components/TextInput";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { ChangePasswordFormValidationSchema } from "../lib/validate";
import { useState } from "react";
import { useRouter } from "next/navigation";
import icon1 from "@/../public/icons/message.png";
import icon2 from "@/../public/icons/Group.png";
import Image from "next/image";
function CreateNewPassword() {
  const router = useRouter();
  const [errMsg, setErrMsg] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <Formik
      initialValues={{
        newpassword: "",
        confirmpassword: "",
      }}
      validationSchema={toFormikValidationSchema(
        ChangePasswordFormValidationSchema
      )}
      onSubmit={async (values) => {
        const mail = localStorage.getItem("email");
        const newValues = { ...values, email: mail };

        setIsSubmitting(true);

        await fetch("https://tast-pwvf.onrender.com/user/reset/password", {
          method: "POST",
          body: JSON.stringify(newValues),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }).then((res) =>
          res.json().then((data) => {
            console.log(data);

            if (data.status && data.status_code === 200) {
              router.push("/success-password");
            } else {
              setErrMsg(data.message);
            }

            setIsSubmitting(false);
          })
        );
      }}
    >
      <Form>
        {errMsg && <p className="mb-2 text-red-500">{errMsg}</p>}
        <div className="flex flex-col 2xl:gap-y-[0.063rem] gap-y-4">
          <div className="flex items-center rounded-2xl border border-gray-300 px-4 py-2 bg-white focus-within:border-yellow-500">
            <Image
              src={icon2}
              alt="password Icon"
              width={20}
              height={20}
              className="mr-3"
            />
            <TextInput
              name="newpassword"
              type="password"
              placeholder="New password"
              className="w-full focus:outline-none" label={""} icon={undefined}/>
          </div>
          <div className="flex items-center rounded-2xl border border-gray-300 px-4 py-2 bg-white focus-within:border-yellow-500">
            <Image
              src={icon2}
              alt="password Icon"
              width={20}
              height={20}
              className="mr-3"
            />
            <TextInput
              name="confirmpassword"
              type="password"
              placeholder="Confirm password"
              className="w-full focus:outline-none" label={""} icon={undefined} />
          </div>
        </div>

        {/* <div className="flex justify-center 2xl:mt-[6.063rem] mt-[2rem]"> */}
        <button
          type="submit"
          className="w-full z-10 text-black bg-[#ffb200] hover:bg-yellow-500 rounded-2xl 2xl:px-[5.813rem] 2xl:py-[0.46rem] 2xl:text-2xl text-xl px-1 py-2 2xl:leading-[3.429rem] font-extrabold mt-10 inline-block transition duration-300"
        >
          {isSubmitting ? "Waiting..." : "Continue"}
        </button>
        {/* </div> */}
      </Form>
    </Formik>
  );
}

export default CreateNewPassword;
