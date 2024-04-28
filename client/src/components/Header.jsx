import React from "react";
import { Link } from "react-router-dom";
import { Button, Navbar, TextInput } from "flowbite-react";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa6";
import { useLocation } from "react-router-dom";

export default function Header() {
  const path = useLocation().pathname;
  console.log(path);

  return (
    <Navbar className="border-b-2">
      <Link
        to="/"
        className="font-semibold self-center text-sm sm:text-xl whitespace-nowrap dark:text-white "
      >
        <span className="text-indigo-900 bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-200 p-1.5 rounded sm:p-1.5">
          myBLOG
        </span>
      </Link>
      <form>
        <TextInput
          type="text"
          placeholder="Search"
          rightIcon={AiOutlineSearch}
          className="hidden md:inline"
        />
      </form>
      <Button className="w-9 h-9 md:hidden" color="gray" pill>
        <AiOutlineSearch />
      </Button>
      <div className="flex gap-2 md:order-2">
        <Button className="w-9 h-9 max-sm:hidden " color="gray" pill>
          <FaMoon />
        </Button>
        <Link to="sign-in">
          <Button outline gradientDuoTone="purpleToBlue">
            Sigh In
          </Button>
        </Link>
        <Navbar.Toggle />
      </div>

      <Navbar.Collapse>
        <Navbar.Link active={path === "/"} as={"div"}>
          <Link to="/home">Home</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/about"} as={"div"}>
          <Link to="/about">About</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/projects"} as={"div"}>
          <Link to="/projects">Projects</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
