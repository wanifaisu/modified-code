"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

function OTPForm() {
  const router = useRouter();
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [num3, setNum3] = useState("");
  const [num4, setNum4] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);

    const otp = num1 + num2 + num3 + num4;

    fetch("https://tast-pwvf.onrender.com/user/confirmcode", {
      method: "POST",
      body: JSON.stringify({ code: otp }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((res) =>
      res.json().then((data) => {
        console.log(data);

        if (data.status && data.status_code === 200) {
          setIsSubmitting(false);
          router.push("/success-signup");
        } else {
          setErrMsg(data.message);
          setIsSubmitting(false);
        }
      })
    );
  };

  return (
    <form>
      {errMsg && <p className="mb-2 text-red-500">{errMsg}</p>}
      <div className="flex justify-center  sm:gap-x-6 2xl:gap-x-[3.063rem] max-w-[714px] mx-auto">
        <input
          name="num1"
          type="number"
          className="rounded-40 py-4 px-6 text-xl font-extrabold focus:bg-[#CDEEFF80] focus:border-[#0077B6] bg-[#2F2F2F1A] w-[70px] 2xl:w-[120px] 2xl:py-10 text-center rounded-xl focus:outline-none focus:border remove-arrow"
          onChange={(e) => setNum1(e.target.value)}
        />

        <input
          name="num2"
          type="number"
          className="rounded-40 py-4 px-6 text-xl font-extrabold focus:bg-[#CDEEFF80] focus:border-[#0077B6] bg-[#2F2F2F1A] w-[70px] 2xl:w-[120px] 2xl:py-10 text-center rounded-xl focus:outline-none focus:border remove-arrow"
          onChange={(e) => setNum2(e.target.value)}
        />
        <input
          name="num3"
          type="number"
          className="rounded-40 py-4 px-6 text-xl font-extrabold focus:bg-[#CDEEFF80] focus:border-[#0077B6] bg-[#2F2F2F1A] w-[70px] 2xl:w-[120px] 2xl:py-10 text-center rounded-xl focus:outline-none focus:borderremove-arrow remove-arrow"
          onChange={(e) => setNum3(e.target.value)}
        />
        <input
          name="num4"
          type="number"
          className="rounded-40 py-4 px-6 text-xl font-extrabold focus:bg-[#CDEEFF80] focus:border-[#0077B6] bg-[#2F2F2F1A] w-[70px] 2xl:w-[120px] 2xl:py-10 text-center rounded-xl focus:outline-none focus:border remove-arrow"
          onChange={(e) => setNum4(e.target.value)}
        />
      </div>

      <div className="flex flex-col items-center gap-y-2 justify-center 2xl:mt-[6.063rem] mt-12">
        <button
          type="submit"
          onClick={handleSubmit}
          className="w-full z-10 text-black bg-[#ffb200] hover:bg-yellow-500 rounded-2xl 2xl:px-[5.813rem] 2xl:py-[0.46rem] 2xl:text-2xl text-xl px-10 py-2 2xl:leading-[3.429rem] font-extrabold mt-10 inline-block transition duration-300"
        >
          {isSubmitting ? "Verifying" : "Verify"}
        </button>
      </div>
    </form>
  );
}

export default OTPForm;
