// import React from "react";

// const Signup = () => {
//     return (
//         <>
//         <div className="flex justify-center items-center h-screen">

//                 <form action="" className="bg-blue-100 w-80 flex flex-col items-center p-2 gap-5 rounded-2xl">
//                     <h1 className="text-2xl">Signup</h1>
//                     <div className="flex flex-col w-full gap-3">
//                     <div>
//                     <label htmlFor="">Name</label> <br />
//                     <input type="text" placeholder="Enter Here..." className="border rounded p-1 w-full" />
//                     </div>
//                     <div>
//                     <label htmlFor="">Email</label> <br />
//                     <input type="text" placeholder="Enter Here..." className="border rounded p-1 w-full"  />
//                     </div>
//                     <div>
//                     <label htmlFor="">Password</label> <br />
//                     <input type="text" placeholder="Enter Here..." className="border rounded p-1 w-full"  />
//                     </div>
//                     </div>
//                     <button className="border w-20 rounded cursor-pointer" onSubmit={{}}>Submit</button>
//                 </form>

//         </div>

//         </>
//     )
// }

// export default Signup;

import React from "react";

const Signup = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-100 px-4">
      <form className="w-full max-w-sm bg-white/80 backdrop-blur-md shadow-xl rounded-3xl p-6 flex flex-col gap-5">
        <h1 className="text-2xl font-semibold text-center text-gray-800">
          Create Account
        </h1>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-600">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="px-3 py-2 rounded-lg border border-gray-300 
                         focus:ring-2 focus:ring-blue-400 focus:border-blue-400 
                         outline-none transition"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-600">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="px-3 py-2 rounded-lg border border-gray-300 
                         focus:ring-2 focus:ring-blue-400 focus:border-blue-400 
                         outline-none transition"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-600">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="px-3 py-2 rounded-lg border border-gray-300 
                         focus:ring-2 focus:ring-blue-400 focus:border-blue-400 
                         outline-none transition"
            />
          </div>
        </div>

        <button
          type="submit"
          className="mt-2 w-full py-2 rounded-xl text-white font-medium
                     bg-blue-500
                     hover:from-blue-500 hover:to-blue-600
                     active:scale-95
                     shadow-md hover:shadow-lg
                     transition-all duration-200"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
