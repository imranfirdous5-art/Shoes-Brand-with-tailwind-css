import React from "react";

const NavDemo = () => {
    return(
        <>
        <nav>
            <ul className="bg-blue-100 flex gap-3 capitalize">
                <li>home</li>
                <li>about</li>
                <li>contact</li>
                <li>enquiry</li>
                <li className="relative group">
                     <span>services</span>
                    <div className="absolute left-0 mt-2 w-36 p-1 bg-white rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                        <p className="hover:bg-amber-400">acb</p>
                        <p>acb</p>
                        <p>acb</p>
                        <p>acb</p>
                        <p>acb</p>
                        {/* <li>haircut</li>
                        <li>hair routine</li>
                        <li>beardcut</li>
                        <li>hair color</li>
                        <li>hair straightening</li> */}
                    </div>
                </li>
            </ul>
        </nav>
        </>
    )
}

export default NavDemo;