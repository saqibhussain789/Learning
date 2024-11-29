import { AiOutlineClose } from "react-icons/ai";
import { CgNametag } from "react-icons/cg";
import { HiMenuAlt1 } from "react-icons/hi";
import { useState } from "react";

const Nav = () => {
  const [toggle, setToggle] = useState(false);
  const [searchQuery, setSearchQuery] = useState(""); // To track the search input

  function openMenu() {
    setToggle(true);
  }

  function closeMenu() {
    setToggle(false);
  }

  const handleSearch = (event) => {
    event.preventDefault();
    // Implement your search functionality here
    console.log("Search query:", searchQuery);
  };

  const navItems = [
    { name: "Home", link: "#hero" },
    { name: "Services", link: "#services" },
    { name: "Tutorials", link: "#portfolio" },
    { name: "About", link: "#about" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <>
      <nav className="flex items-center justify-between p-5 lg:p-10 bg-teal-500 text-white shadow-md">
        {/* Logo */}
        <a
          href="#hero"
          className="text-2xl lg:text-3xl font-mono tracking-wider flex items-center text-white hover:text-teal-200 transition-all"
        >
          <CgNametag className="mr-2" /> SyntixDesigner
        </a>

        {/* Desktop Links and Search */}
        <div className="hidden lg:flex items-center space-x-6">
          {/* Navigation Links */}
          {navItems.map((item) => (
            <a
              href={item.link}
              key={item.name}
              className="text-lg text-white hover:text-teal-200 px-4 py-2 rounded-full transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search..."
              className="py-2 px-4 rounded-lg border border-teal-200 focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all bg-white text-teal-700 placeholder-teal-400"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-teal-500 hover:text-teal-700 transition-colors"
            >
              🔍
            </button>
          </form>
        </div>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden">
          {toggle ? (
            <AiOutlineClose
              onClick={closeMenu}
              size={30}
              className="text-teal-200 cursor-pointer transition-transform duration-300 z-50"
            />
          ) : (
            <HiMenuAlt1
              onClick={openMenu}
              size={30}
              className="text-teal-200 cursor-pointer transition-transform duration-300 z-50"
            />
          )}
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 bg-teal-500 bg-opacity-90 transform ${
          toggle ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-500 ease-in-out z-40`}
      >
        <div className="absolute top-5 right-5 z-50">
          <AiOutlineClose
            onClick={closeMenu}
            size={30}
            className="text-white cursor-pointer"
          />
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen space-y-8">
          {/* Navigation Links */}
          {navItems.map((item) => (
            <a
              href={item.link}
              key={item.name}
              onClick={closeMenu} // Close menu on clicking a link
              className="text-3xl text-white hover:text-teal-200 transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}

          {/* Search Bar in Mobile Menu */}
          <form onSubmit={handleSearch} className="w-4/5">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search..."
              className="w-full py-2 px-4 rounded-lg border border-teal-200 focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all bg-white text-teal-700 placeholder-teal-400"
            />
            <button
              type="submit"
              className="mt-2 text-teal-500 hover:text-teal-700 transition-colors w-full"
            >
              🔍 Search
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Nav;
