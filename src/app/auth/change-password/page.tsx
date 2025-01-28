import CreateNewPassword from "./components/create-new-password-form";

function CreatePassword() {
  return (
    <>
      <header className="text-center 2xl:mb-[78px] mb-10">
            <div style={{background: "linear-gradient(147.77deg, #DE9F0C 40.22%, #FFC72C 78.06%)"}} className="absolute top-[-70px] left-[-290px] w-[729px] h-[729px] rounded-full z-0"></div>
      <div style={{background: "linear-gradient(147.77deg, #DE9F0C 34.81%, #FFB200 85.62%)"}} className="absolute bottom-[200px] left-[250px] w-[192px] h-[193px] rounded-full z-0"></div>
      <div style={{background: "linear-gradient(147.77deg, #DE9F0C 38.78%, #FFB200 85.62%)"}} className="absolute bottom-[-40px] left-[-80px] w-[354px] h-[354px] rounded-full z-0"></div>
      <div style={{background: "linear-gradient(147.77deg, #DE9F0C 38.78%, #FFB200 85.62%)"}} className="absolute bottom-[-150px] right-[-150px] w-[354px] h-[354px] rounded-full z-0"></div>

        <h1 className="text-2xl text-left text-black font-extrabold lg:text-2xl 2xl:text-[40px] 2xl:leading-[97.52px] mb-[13px]">
          Enter New Password
        </h1>
        
      </header>

      <main>
        <CreateNewPassword />
      </main>
    </>
  );
}

export default CreatePassword;
