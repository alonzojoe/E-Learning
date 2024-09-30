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
        <div className="font-bold text-2xl">
          <h1>The E-Learning</h1>
        </div>
        <div className="hidden lg:block">
          <ul className="flex gap-4">
            {menus.map((menu) => (
              <li key={menu.id}>
                <a
                  href={menu.path}
                  className="inline-block py-2 px-3 hover:text-secondary relative group"
                >
                  {menu.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* Menus */}
        {/* Mobile Menu */}
      </div>
    </nav>
  );
};

export default Navbar;
