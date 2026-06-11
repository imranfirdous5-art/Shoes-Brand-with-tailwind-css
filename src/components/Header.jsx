// import React from "react";
// import { Link, NavLink } from "react-router-dom";
// import Logo from "../assets/images/Logo.png";
// import { IoMdArrowDropdown } from "react-icons/io";

// const Header = () => {
//   const navStyle =
//     "bg-blue-100 px-4 py-2 flex flex-col md:flex-row items-center justify-between";
//   const liStyle =
//     "border-b-2 border-transparent hover:border-blue-400 cursor-pointer relative group";
//   const srchhWrapStyle =
//     "flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto";
//   const srchStyle =
//     "w-full sm:w-56 px-4 py-2 text-sm rounded-full border border-gray-300 bg-white/80 backdrop-blur shadow-sm focus:ring-1 focus:ring-blue-400 focus:border-blue-400 outline-none transition-all duration-200 placeholder-gray-400";
//   const signupStyle =
//     "px-5 py-2 rounded-full text-sm font-medium text-white bg-blue-500 hover:from-blue-500 hover:to-blue-600 active:scale-95 shadow-md hover:shadow-lg transition-all duration-200";

//   return (
//     <>
//     <div>

//       <nav className={navStyle}>
//       {/* Logo */}
//       <div className="w-20 md:w-20 mb-2 md:mb-0">
//         {/* <img
//           src="https://png.pngtree.com/png-vector/20231115/ourmid/pngtree-demo-icon-website-png-image_10473862.png"
//           src="https://e7.pngegg.com/pngimages/720/666/png-clipart-logo-shoe-brand-font-design-white-logo.png"
//           alt="logo" className="rounded-3xl"
//         /> */}
//         <img src={Logo} alt="logo" className="rounded-3xl" />
//       </div>

      

//       {/* Search + Signup */}
//       <div className={srchhWrapStyle}>
//         <label htmlFor="search" className="sr-only">
//           Search
//         </label>
//         <input
//           id="search"
//           type="text"
//           placeholder="Search..."
//           className={srchStyle}
//         />
//         <Link to="/Signup" className={signupStyle}>
//           Signup
//         </Link>
//         <Link to="/Login" className={signupStyle}>
//           Login
//         </Link>
//       </div>
//     </nav>


//       {/* Menu */}
//       <nav className="bg-blue-100">
//         <ul className="flex flex-wrap justify-center gap-4 md:gap-5 capitalize text-sm md:text-base">
//           <li className={liStyle}>
//             <Link to="/">home</Link>
//           </li>

//           <li className={liStyle}>
//             <Link to="/Products">products</Link>
//           </li>
//           {/* <li className={liStyle}>
//             <Link to="/Brand"> brand</Link>
//           </li> */}

//           {/* men */}
//           <li className={liStyle}>
//             <span className="flex items-center">
//               men <IoMdArrowDropdown />
//             </span>
//             <div className="absolute left-0 mt-2 w-44 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 bg-white rounded">
//               <p className="hover:bg-blue-100 px-3 py-2">
//                 <Link to="/CasualSneakers">casual sneakers</Link>
//               </p>
//               <p className="hover:bg-blue-100 px-3 py-2">
//                 <Link to="/FormalShoes">formal shoes</Link>
//               </p>
//               <p className="hover:bg-blue-100 px-3 py-2">
//                 <Link to="/Loafers">loafers</Link>
//               </p>
//               <p className="hover:bg-blue-100 px-3 py-2">
//                 <Link to="/SandalsSlippers">Sandals & Slippers</Link>
//               </p>
//             </div>
//           </li>

//           {/* women */}
//           <li className={liStyle}>
//             <span className="flex items-center">
//               women <IoMdArrowDropdown />
//             </span>
//             <div className="absolute left-0 mt-2 w-44 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 bg-white rounded">
//               <p className="hover:bg-blue-100 px-3 py-2">
//                 <Link to="/WomenSneakers">casual sneakers</Link>
//               </p>
//               <p className="hover:bg-blue-100 px-3 py-2">
//                 <Link to="/Heels">heels</Link>
//               </p>
//               <p className="hover:bg-blue-100 px-3 py-2">
//                 <Link to="/WomenSandals">Women Sandals</Link>
//               </p>
//               <p className="hover:bg-blue-100 px-3 py-2">
//                 <Link to="/WomenBoots">women boots</Link>
//               </p>
//             </div>
//           </li>

//           {/* kids */}
//           <li className={liStyle}>
//             <span className="flex items-center">
//               kids <IoMdArrowDropdown />
//             </span>
//             <div className="absolute left-0 mt-2 w-44 bg-white rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-100">
//               <p className="hover:bg-blue-100 px-3 py-2">
//                 <Link to="/KidsSneakers">sneakers</Link>
//               </p>
//               <p className="hover:bg-blue-100 px-3 py-2">
//                 <Link to="/KidsSandals">sandals</Link>
//               </p>
//               <p className="hover:bg-blue-100 px-3 py-2">
//                 <Link to="/KidsSchoolShoes">school shoes</Link>
//               </p>
//               <p className="hover:bg-blue-100 px-3 py-2">
//                 <Link to="/KidsBoots">Kids Boots</Link>
//               </p>
//             </div>
//           </li>

//           {/* contact us */}
//           <li className={liStyle}>
//             <Link to="/ContactUs">contact us</Link>
//           </li>

//           {/* FAQ */}
//           <li className="hover:border-b-2 border-blue-400 cursor-pointer">
//              <Link to="/FAQ">FAQ</Link>
//           </li>
//         </ul>
//       </nav>

//     </div>
    
//     </>
    
//   );
// };

// export default Header;



// using hamburger-----------

import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/images/Logo.png";
import { IoMdArrowDropdown } from "react-icons/io";
import { HiMenu, HiX } from "react-icons/hi";

const Header = () => {
  const navStyle =
    "bg-blue-100 px-4 py-2 flex flex-col md:flex-row items-center justify-between";
  const liStyle =
    "border-b-2 border-transparent hover:border-blue-400 cursor-pointer relative group";
  const srchhWrapStyle =
    "flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto";
  const srchStyle =
    "w-56 sm:w-56 px-4 py-2 text-sm rounded-full border border-gray-300 bg-white/80 backdrop-blur shadow-sm focus:ring-1 focus:ring-blue-400 focus:border-blue-400 outline-none transition-all duration-200 placeholder-gray-400";
  const signupStyle =
    "px-5 py-2 rounded-full text-sm font-medium text-white bg-blue-500 hover:from-blue-500 hover:to-blue-600 active:scale-95 shadow-md hover:shadow-lg transition-all duration-200";


    const [menuOpen, setMenuOpen] = useState(false);



  return (
    <>
    <div>

      <nav className={navStyle}>
      {/* Logo */}
      <div className="w-20 md:w-20 mb-2 md:mb-0">
        {/* <img
          src="https://png.pngtree.com/png-vector/20231115/ourmid/pngtree-demo-icon-website-png-image_10473862.png"
          src="https://e7.pngegg.com/pngimages/720/666/png-clipart-logo-shoe-brand-font-design-white-logo.png"
          alt="logo" className="rounded-3xl"
        /> */}
        <img src={Logo} alt="logo" className="rounded-3xl" />
      </div>

      
      {/* Search + Signup */}
      <div className={srchhWrapStyle}>
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <input
          id="search"
          type="text"
          placeholder="Search..."
          className={srchStyle}
        />
        <div className="flex flex-row gap-2">
        <Link to="/Signup" className={signupStyle}>
          Signup
        </Link>
        <Link to="/Login" className={signupStyle}>
          Login
        </Link>
        </div>
      </div>

    </nav>

{/* Hamburger */}
          <div className="bg-blue-100">
            <button
          className="md:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
          </div>
        

      {/* Menu */}
        <nav
          className={`bg-blue-100 ${
            menuOpen ? "block" : "hidden"
          } md:block`}
        >
        <ul className="flex flex-wrap justify-center flex-col md:flex-row items-center gap-4 md:gap-5 capitalize text-sm md:text-base">
          <li className={liStyle}>
            <Link to="/">home</Link>
          </li>

          <li className={liStyle}>
           <Link to="/Products">products</Link>
          </li>
          {/* <li className={liStyle}>
            <Link to="/Brand"> brand</Link>
          </li> */}

          {/* men */}
          <li className={liStyle}>
            <span className="flex items-center">
              men <IoMdArrowDropdown />
            </span>
            <div className="absolute left-0 mt-2 w-46 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 bg-white rounded p-1">
              <p className="hover:bg-blue-100 px-3 py-2 hover:border hover:border-blue-300 hover:rounded">
                <Link to="/CasualSneakers">casual sneakers</Link>
              </p>
              <p className="hover:bg-blue-100 px-3 py-2 hover:border hover:border-blue-300 hover:rounded">
                <Link to="/FormalShoes">formal shoes</Link>
              </p>
              <p className="hover:bg-blue-100 px-3 py-2 hover:border hover:border-blue-300 hover:rounded">
                <Link to="/Loafers">loafers</Link>
              </p>
              <p className="hover:bg-blue-100 px-3 py-2 hover:border hover:border-blue-300 hover:rounded">
                <Link to="/SandalsSlippers">Sandals & Slippers</Link>
              </p>
            </div>
          </li>

          
          {/* women */}
          <li className={liStyle}>
            <span className="flex items-center">
              women <IoMdArrowDropdown />
            </span>
            <div className="absolute left-0 mt-2 w-46 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 bg-white rounded p-1">
              <p className="hover:bg-blue-100 px-3 py-2 hover:border hover:border-blue-300 hover:rounded">
                <Link to="/WomenSneakers">casual sneakers</Link>
              </p>
              <p className="hover:bg-blue-100 px-3 py-2 hover:border hover:border-blue-300 hover:rounded">
                <Link to="/Heels">heels</Link>
              </p>
              <p className="hover:bg-blue-100 px-3 py-2 hover:border hover:border-blue-300 hover:rounded">
                <Link to="/WomenSandals">Women Sandals</Link>
              </p>
              <p className="hover:bg-blue-100 px-3 py-2 hover:border hover:border-blue-300 hover:rounded">
                <Link to="/WomenBoots">women boots</Link>
              </p>
            </div>
          </li>

          {/* kids */}
          <li className={liStyle}>
            <span className="flex items-center">
              kids <IoMdArrowDropdown />
            </span>
            <div className="absolute left-0 mt-2 w-46 bg-white rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-100 p-1">
              <p className="hover:bg-blue-100 px-3 py-2 hover:border hover:border-blue-300 hover:rounded">
                <Link to="/KidsSneakers">sneakers</Link>
              </p>
              <p className="hover:bg-blue-100 px-3 py-2 hover:border hover:border-blue-300 hover:rounded">
                <Link to="/KidsSandals">sandals</Link>
              </p>
              <p className="hover:bg-blue-100 px-3 py-2 hover:border hover:border-blue-300 hover:rounded">
                <Link to="/KidsSchoolShoes">school shoes</Link>
              </p>
              <p className="hover:bg-blue-100 px-3 py-2 hover:border hover:border-blue-300 hover:rounded">
                <Link to="/KidsBoots">Kids Boots</Link>
              </p>
            </div>
          </li>

          {/* contact us */}
          <li className={liStyle}>
            <Link to="/ContactUs">contact us</Link>
          </li>

          {/* FAQ */}
          <li className="hover:border-b-2 border-blue-400 cursor-pointer">
             <Link to="/FAQ">FAQ</Link>
          </li>
        </ul>
      </nav>

    </div>
    
    </>
    
  );
};

export default Header;
