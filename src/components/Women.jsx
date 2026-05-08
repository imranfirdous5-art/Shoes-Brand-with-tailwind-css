import React from "react";
import { Link, NavLink } from "react-router-dom";

const Women = () => {

  const liStyle="border-b-2 border-transparent hover:border-b-blue-400 transition-all duration-300";

  return (
    <>
      <div className="bg-blue-100 flex flex-row items-center">
        <nav className="mx-105">
          <ul className="flex flex-col text-sm gap-1 mx-auto capitalize bor">
            
            <li className={liStyle}>
              <Link to="/WomenSneakers">
                  casual sneakers
              </Link>
            </li>
            <li className={liStyle}>
              <Link className="" to="/Heels">
                  heels
              </Link>
            </li>
              <li className={liStyle}>
                <Link className="" to="/WomenSandals">
                  sandals
              </Link>
              </li>
              <li className={liStyle}>
                <Link className="" to="/SandalsSlippers">
                  boots
              </Link>
              </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Women;



