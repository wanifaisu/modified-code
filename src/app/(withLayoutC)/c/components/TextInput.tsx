"use client";

import { FieldConfig, useField } from "formik";
import React, { useState } from "react";

type Props = React.ClassAttributes<HTMLInputElement> &
  React.InputHTMLAttributes<HTMLInputElement> &
  FieldConfig<any> & {
    label: string;
    classname?: string;
    icon?: React.ReactNode;
    placeholder: string;
  };

function TextInput({
  label,
  classname,
  type,
  icon,
  placeholder,
  ...props
}: Props) {
  const [field, meta] = useField(props);
  const [visibility, setVisibility] = useState(false);

  const togglePasswordVisibility = () => {
    setVisibility(!visibility);
  };

  return (
    <div>
      <div className="relative">
        <span className="absolute left-6 top-1/2 -translate-y-1/2">{icon}</span>
        <input
          id={label}
          type={type === "password" && visibility ? "text" : type}
          className="peer h-10 w-full text-gray-900 placeholder-transparent focus:outline-none focus:border-rose-600 px-6 pl-[60px] rounded-[5px] bg-white py-7"
          // bg-[#2F2F2F1A]
          placeholder={placeholder}
          {...field}
          {...props}
        />
        {type === "password" && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute -right-25 top-1/2 -translate-y-1/2 text-[#ffb200]"
          >
            {visibility ? "Hide" : "Show"}
          </button>
        )}
        <label
          htmlFor={label}
          className="absolute left-[59px] -top-2 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-2 peer-focus:text-gray-600 peer-focus:text-sm"
        >
          {label}
        </label>
      </div>

      {meta.touched && meta.error ? (
        <div className="mt-1 text-sm text-red-400">{meta.error}</div>
      ) : null}
    </div>
  );
}

export default TextInput;
