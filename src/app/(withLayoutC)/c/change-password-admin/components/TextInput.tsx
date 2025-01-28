"use client";

import { FieldConfig, useField } from "formik";
import Image from "next/image";
import { useState } from "react";

type Props = React.ClassAttributes<HTMLInputElement> &
  React.InputHTMLAttributes<HTMLInputElement> &
  FieldConfig<any> & {
    label: string;
    classname?: string;
    icon: string;
    placeholder: string;
    mainClassName?: string;
  };

function TextInput({
  label,
  classname,
  type,
  icon,
  placeholder,
  mainClassName,
  ...props
}: Props) {
  const [field, meta] = useField(props);
  const [visibility, setVisibility] = useState(false);

  const togglePasswordVisibility = () => {
    setVisibility(!visibility);
  };

  return (
    <div>
      <div className={`relative ${mainClassName}`}>
        {/* Left Icon */}
        <span className="absolute left-6 top-1/2 -translate-y-1/2">
          <Image alt="Icon" src={icon} width={20} height={20} />
        </span>

        {/* Input Field */}
        <input
          id={label}
          type={visibility ? "text" : type}
          className="peer h-10 w-full text-gray-900 placeholder-transparent focus:outline-none focus:border-blue-500 py-7 pl-[60px] pr-[50px] rounded-md bg-[#F5F5F5]"
          placeholder={placeholder}
          {...field}
          {...props}
        />

        {/* Password Visibility Toggle */}
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-500 focus:outline-none"
        >
          {visibility ? (
            <p className="text-[#FFB200] text-[20px] leading-[30px]">Hide</p>
          ) : (
            <p className="text-[#FFB200] text-[20px] leading-[30px]">Show</p>
          )}
        </button>

        {/* Floating Label */}
        <label
          htmlFor={label}
          className="absolute left-[59px] -top-2 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-2 peer-focus:text-gray-600 peer-focus:text-sm"
        >
          {label}
        </label>
      </div>

      {/* Error Message */}
      {meta.touched && meta.error ? (
        <div className="mt-1 text-sm text-red-400">{meta.error}</div>
      ) : null}
    </div>
  );
}

export default TextInput;
