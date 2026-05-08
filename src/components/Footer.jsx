// import React from "react";

// const Footer = () => {
//     return(
//         <>
//             <div className="text-2xl font-bold border bg-amber-300 p-4">
//                 <h1 className="border mx-auto w-28">footer</h1>
//             </div>
//         </>
//     )
// }

// export default Footer;



import React from "react";

const Footer = () => {
  return (
    <>
      <div className="bg-blue-100 text-black p-6 shadow-inner">
        
        {/* <h1 className="text-center text-2xl font-bold mb-4 tracking-wide">
          Footer
        </h1> */}

        <div className="flex flex-col sm:flex-row justify-between items-center text-sm gap-4">
          
          {/* Left */}
          <p className="text-center sm:text-left text-black">
            © 2026 YourStore. All rights reserved.
          </p>

          {/* Center Links */}
          <div className="flex gap-5 font-medium">
            <span className="hover:text-blue-200 cursor-pointer transition">
              Home
            </span>
            <span className="hover:text-blue-200 cursor-pointer transition">
              Products
            </span>
            <span className="hover:text-blue-200 cursor-pointer transition">
              Contact
            </span>
          </div>

          {/* Right */}
          <p className="text-center sm:text-right text-black">
            Follow us: Instagram | Twitter | Facebook
          </p>

        </div>

      </div>
    </>
  );
};

export default Footer;