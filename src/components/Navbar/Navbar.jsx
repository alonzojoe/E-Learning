import React from "react";
import { IoMdMenu } from "react-icons/io";

const menus = [
  {
    id: 1,
    title: "Home",
    path: "/",
  },
  {
    id: 2,
    title: "Services",
    path: "#services",
  },
  {
    id: 3,
    title: "About Us",
    path: "#about",
  },
  {
    id: 4,
    title: "Our Team",
    path: "#team",
  },
  {
    id: 5,
    title: "Contact Us",
    path: "#contact",
  },
];

const Navbar = () => {
  return (
    <nav>
      <div className="container py-10 flex justify-between items-center">
        {/* App Logo */}
        <div>
          <h1 className="font-bold text-2xl">The E-Learning</h1>
        </div>
        {/* Menus */}
        <div className="hidden lg:block">
          <ul className="flex gap-4">
            {menus.map((menu) => (
              <li key={menu.id}>
                <a
                  href={menu.path}
                  className="inline-block py-2 px-3 hover:text-secondary relative group"
                >
                  <div className="h-2 w-2 absolute bg-secondary mt-2 left-1/2 -translate-x-1/2 top-1/2 bottom-0 hidden group-hover:block rounded"></div>
                  {menu.title}
                </a>
              </li>
            ))}
            <button className="primary-btn ">Sign In</button>
          </ul>
        </div>
        {/* Mobile Menu */}
        <div className="lg:hidden">
          <IoMdMenu className="text-4xl" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
