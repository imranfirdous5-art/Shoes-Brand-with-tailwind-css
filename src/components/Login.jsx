import React from "react";

const Login = () => {

    const formStyle="w-full max-w-sm bg-white/80 backdrop-blur-md shadow-xl rounded-3xl p-6 flex flex-col gap-5";
    const nameStyle="px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition";
    const emailStyle="px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition";
    const passwordStyle="px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition";
    const buttonStyle="mt-2 w-full py-2 rounded-xl text-white font-medium bg-blue-500 hover:from-blue-500 hover:to-blue-600 active:scale-95 shadow-md hover:shadow-lg transition-all duration-200";


    return(
        <>
            <div className="flex justify-center items-center bg-blue-100 py-25">
                <form className={formStyle}>
                        <h1 className="text-2xl font-semibold text-center text-gray-800">
                        Login
                        </h1>

                    <div className="flex flex-col gap-4">
                        
                    <div className="flex flex-col gap-1">
                        <label className="text-sm text-gray-600">Email</label>
                        <input type="email" placeholder="Enter your email" className={emailStyle}/>
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className="text-sm text-gray-600">Password</label>
                        <input type="password" placeholder="Enter your password" className={passwordStyle}/>
                    </div>
                    </div>
                        <button type="submit" className={buttonStyle}>Login</button>
                </form>
            </div>
        </>
    )
}

export default Login;