// // pages/index.tsx
// import Head from 'next/head';

// const LoginPage = () => {
//   return (
//     // <div className="min-h-screen flex items-center justify-center bg-[#E1D7F5] relative overflow-hidden">
//       <>
//       <Head>
//         <title>Sign In</title>
//       </Head>

//       {/* Background Circles */}
//       {/* <div className="absolute top-[-150px] left-[-150px] w-[300px] h-[300px] bg-gradient-to-br from-[#FFB84D] to-[#E49029] rounded-full z-0"></div>
//       <div className="absolute bottom-[-150px] right-[-150px] w-[300px] h-[300px] bg-gradient-to-br from-[#FFB84D] to-[#E49029] rounded-full z-0"></div> */}
//       {/* <div className="absolute top-[-200px] left-[-200px] w-[400px] h-[400px] bg-gradient-to-br from-[#FFB84D] to-[#E49029] rounded-full z-0"></div> */}
//       <div className="absolute top-[-50px] left-[-50px] w-[150px] h-[150px] bg-gradient-to-br from-[#FFB84D] to-[#E49029] rounded-full z-0"></div>
//       <div className="absolute bottom-[-150px] right-[-150px] w-[300px] h-[300px] bg-gradient-to-br from-[#FFB84D] to-[#E49029] rounded-full z-0"></div>

//       {/* Login Card */}
//       <div className="relative z-10 w-[400px] bg-white rounded-2xl shadow-md p-8">
//         <h1 className="text-2xl font-bold mb-6 text-center">Sign in</h1>

//         <form>
//           {/* Email Field */}
//           <div className="mb-4">
//             <label htmlFor="email" className="block text-sm font-medium mb-1">
//               Email
//             </label>
//             <div className="relative">
//               <input
//                 type="email"
//                 id="email"
//                 placeholder="Email"
//                 className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
//               />
//             </div>
//           </div>

//           {/* Password Field */}
//           <div className="mb-4">
//             <label htmlFor="password" className="block text-sm font-medium mb-1">
//               Password
//             </label>
//             <div className="relative">
//               <input
//                 type="password"
//                 id="password"
//                 placeholder="Password"
//                 className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
//               />
//               <button
//                 type="button"
//                 className="absolute inset-y-0 right-3 text-sm font-medium text-yellow-500 hover:underline"
//               >
//                 Show
//               </button>
//             </div>
//           </div>

//           {/* Remember Me and Forgot Password */}
//           <div className="flex items-center justify-between mb-6">
//             <label className="flex items-center text-sm">
//               <input type="checkbox" className="mr-2" /> Remember me
//             </label>
//             <a href="#" className="text-sm text-yellow-500 hover:underline">
//               Forgot Password?
//             </a>
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full bg-yellow-500 text-white py-3 rounded-md font-medium hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
//           >
//             Sign in
//           </button>
//         </form>
//       </div>
//      </>
//   );
// };

// export default LoginPage;








// const LoginPage = () => {
//   return (
//     <div >
//     {/* className="min-h-screen flex items-center justify-center bg-[#E1D7F5] relative overflow-hidden"> */}
      

//       {/* Background Blobs */}
//       <div className="">
//       <div className="absolute top-[-70px] left-[-190px] w-[500px] h-[500px] bg-gradient-to-br from-[#FFB84D] to-[#E49029] rounded-full z-0"></div>
//       <div className="absolute bottom-[155px] left-[140px] w-[90px] h-[90px] bg-gradient-to-br from-[#FFB84D] to-[#E49029] rounded-full z-0"></div>
//       <div className="absolute top-[400px] left-[-80px] w-[250px] h-[250px] bg-gradient-to-br from-[#FFB84D] to-[#E49029] rounded-full z-0"></div>
      
//       </div>
      
//       <div className="absolute top-[390px] right-[-100px] w-[250px] h-[250px] bg-gradient-to-br from-[#FFB84D] to-[#E49029] rounded-full z-0"></div>

//       {/* Login Card */}
//       <div className="relative z-10 w-[400px] bg-white rounded-2xl shadow-md p-8">
//         <h1 className="text-2xl font-bold mb-6 text-center">Sign in</h1>

//         <form>
//           {/* Email Field */}
//           <div className="mb-4">
//             <label htmlFor="email" className="block text-sm font-medium mb-1">
//               Email
//             </label>
//             <div className="relative">
//               <input
//                 type="email"
//                 id="email"
//                 placeholder="Email"
//                 className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
//               />
//             </div>
//           </div>

//           {/* Password Field */}
//           <div className="mb-4">
//             <label htmlFor="password" className="block text-sm font-medium mb-1">
//               Password
//             </label>
//             <div className="relative">
//               <input
//                 type="password"
//                 id="password"
//                 placeholder="Password"
//                 className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
//               />
//               <button
//                 type="button"
//                 className="absolute inset-y-0 right-3 text-sm font-medium text-yellow-500 hover:underline"
//               >
//                 Show
//               </button>
//             </div>
//           </div>

//           {/* Remember Me and Forgot Password */}
//           <div className="flex items-center justify-between mb-6">
//             <label className="flex items-center text-sm">
//               <input type="checkbox" className="mr-2" /> Remember me
//             </label>
//             <a href="#" className="text-sm text-yellow-500 hover:underline">
//               Forgot Password?
//             </a>
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full bg-yellow-500 text-white py-3 rounded-md font-medium hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
//           >
//             Sign in
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;

const LoginPage = () => {
  return (
      <div className="max-h-screen max-w-screen overflow-hidden">
            <div style={{background: "linear-gradient(147.77deg, #DE9F0C 40.22%, #FFC72C 78.06%)"}} className="absolute top-[-70px] left-[-290px] w-[729px] h-[729px] rounded-full z-0"></div>
      <div style={{background: "linear-gradient(147.77deg, #DE9F0C 34.81%, #FFB200 85.62%)"}} className="absolute bottom-[200px] left-[250px] w-[192px] h-[193px] rounded-full z-0"></div>
      <div style={{background: "linear-gradient(147.77deg, #DE9F0C 38.78%, #FFB200 85.62%)"}} className="absolute bottom-[-40px] left-[-80px] w-[354px] h-[354px] rounded-full z-0"></div>
      <div style={{background: "linear-gradient(147.77deg, #DE9F0C 38.78%, #FFB200 85.62%)"}} className="absolute bottom-[-150px] right-[-150px] w-[354px] h-[354px] rounded-full z-0"></div>

      {/* Login Card */}
      <div className="relative z-10 w-[400px] bg-white rounded-2xl shadow-md p-8">
        <h1 className="text-2xl font-bold mb-6 text-center">Sign in</h1>

        <form>
          {/* Email Field */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <div className="relative">
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium mb-1">
              Password
            </label>
            <div className="relative">
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-3 text-sm font-medium text-yellow-500 hover:underline"
              >
                Show
              </button>
            </div>
          </div>

          {/* Remember Me and Forgot Password */}
          <div className="flex items-center justify-between mb-6">
            <label className="flex items-center text-sm">
              <input type="checkbox" className="mr-2" /> Remember me
            </label>
            <a href="#" className="text-sm text-yellow-500 hover:underline">
              Forgot Password?
            </a>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-yellow-500 text-white py-3 rounded-md font-medium hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;






// pages/index.tsx
// import Head from 'next/head';

// const LoginPage = () => {
//   return (
//     <div>
//     {/* className="min-h-screen flex items-center justify-center bg-[#E1D7F5] relative overflow-hidden"> */}
      

//       {/* Background Blobs */}
        // <div className="absolute top-[-100px] left-[-150px] w-[400px] h-[400px] bg-gradient-to-br from-[#FFB84D] to-[#E49029] rounded-full z-0"></div>
        // <div className="absolute top-[150px] left-[-50px] w-[250px] h-[250px] bg-gradient-to-br from-[#FFB84D] to-[#E49029] rounded-full z-0"></div>
        // <div className="absolute top-[200px] left-[80px] w-[120px] h-[120px] bg-gradient-to-br from-[#FFB84D] to-[#E49029] rounded-full z-0"></div>

//       {/* Login Card */}
//       <div className="relative z-10 w-[400px] bg-white rounded-2xl shadow-md p-8">
//         <h1 className="text-2xl font-bold mb-6 text-center">Sign in</h1>

//         <form>
//           {/* Email Field */}
//           <div className="mb-4">
//             <label htmlFor="email" className="block text-sm font-medium mb-1">
//               Email
//             </label>
//             <div className="relative">
//               <input
//                 type="email"
//                 id="email"
//                 placeholder="Email"
//                 className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
//               />
//             </div>
//           </div>

//           {/* Password Field */}
//           <div className="mb-4">
//             <label htmlFor="password" className="block text-sm font-medium mb-1">
//               Password
//             </label>
//             <div className="relative">
//               <input
//                 type="password"
//                 id="password"
//                 placeholder="Password"
//                 className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
//               />
//               <button
//                 type="button"
//                 className="absolute inset-y-0 right-3 text-sm font-medium text-yellow-500 hover:underline"
//               >
//                 Show
//               </button>
//             </div>
//           </div>

//           {/* Remember Me and Forgot Password */}
//           <div className="flex items-center justify-between mb-6">
//             <label className="flex items-center text-sm">
//               <input type="checkbox" className="mr-2" /> Remember me
//             </label>
//             <a href="#" className="text-sm text-yellow-500 hover:underline">
//               Forgot Password?
//             </a>
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full bg-yellow-500 text-white py-3 rounded-md font-medium hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
//           >
//             Sign in
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;
