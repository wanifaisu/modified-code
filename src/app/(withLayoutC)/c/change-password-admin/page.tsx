import ChangeOldPassword from "./components/change-old-password-form";

function ChangePasswordAdmin() {
  return (
    <div className=" flex flex-col items-center justify-center w-full h-full ">
      <header className="mb-6 text-center">
        <h1 className="text-2xl font-bold text-gray-800 mt-5">
          Change Password
        </h1>
      </header>
      <main>
        <ChangeOldPassword />
      </main>
    </div>
  );
}

export default ChangePasswordAdmin;
