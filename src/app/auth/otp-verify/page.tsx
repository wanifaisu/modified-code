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
    <section className="text-center">
            <div style={{background: "linear-gradient(147.77deg, #DE9F0C 40.22%, #FFC72C 78.06%)"}} className="absolute top-[-70px] left-[-290px] w-[729px] h-[729px] rounded-full z-0"></div>
      <div style={{background: "linear-gradient(147.77deg, #DE9F0C 34.81%, #FFB200 85.62%)"}} className="absolute bottom-[200px] left-[250px] w-[192px] h-[193px] rounded-full z-0"></div>
      <div style={{background: "linear-gradient(147.77deg, #DE9F0C 38.78%, #FFB200 85.62%)"}} className="absolute bottom-[-40px] left-[-80px] w-[354px] h-[354px] rounded-full z-0"></div>
      <div style={{background: "linear-gradient(147.77deg, #DE9F0C 38.78%, #FFB200 85.62%)"}} className="absolute bottom-[-150px] right-[-150px] w-[354px] h-[354px] rounded-full z-0"></div>

      <header className="mb-10 text-black">
        <h1 className="text-xl text-left font-extrabold lg:text-4xl 2xl:text-[80px] 2xl:leading-[97.52px] mb-[13px]">
          Verification 
        </h1>
        <p className="text-sm text-left">
          We have sent a 4 digit verification code on{" "}
          <span className="font-bold text-left flex justify-center items-center gap-x-2">
           ( {email} )
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
