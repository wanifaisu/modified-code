"use client";

import { useEffect, useState } from "react";
import OTPForm from "./components/otp-form";

function Verification() {
  const [email, setEmail] = useState("");

  useEffect(() => {
    let value;
    // Get the value from local storage if it exists
    value = localStorage.getItem("email") || "()";
    setEmail(value);
  }, []);

  return (
    <section className="text-left text-black">
      <header className="mb-10">
        <h1 className="text-xl font-extrabold lg:text-4xl 2xl:text-[80px] 2xl:leading-[97.52px] mb-[13px]">
          Enter Verification Code!
        </h1>
        <p className="sm:text-[18px] 2xl:text-[25px]">
          We have sent a 4 digit verification code on{" "}
          <span className="font-bold flex justify-center items-center gap-x-2">
            {email}
            
          </span>
        </p>
      </header>

      <main>
        <OTPForm />
      </main>
    </section>
  );
}

export default Verification;
