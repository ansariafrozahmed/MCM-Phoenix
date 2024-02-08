"use client";
import React from "react";
import { FaMosque } from "react-icons/fa";
import {
  Navbar,
  Collapse,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const donateItems = [
  {
    title: "MCM Donation",
    link: "/mcm-donation",
  },
  {
    title: "Zakat",
    link: "/zakat",
  },
  {
    title: "Sadaqah",
    link: "/sadaqah",
  },
];

function NavListMenu4() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const renderItems = donateItems.map((item, index) => (
    <Link href={item.link} key={index}>
      <MenuItem className="flex items-center gap-3 rounded-lg">
        <div>
          <h2>{item.title}</h2>
        </div>
      </MenuItem>
    </Link>
  ));

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <h2>
            <ListItem
              className="flex items-center gap-2 py-2 pr-4 font-medium text-black"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Donate & Pledge
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </h2>
        </MenuHandler>
        <MenuList className="hidden max-w-full rounded-xl lg:block">
          <ul className=" gap-y-2 outline-none outline-0">{renderItems}</ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}

function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row  text-black font-medium lg:p-1 text-sm">
      <h2>
        <Link href={"/under-construction"}>
          <ListItem className="py-2 pr-4">New Construction</ListItem>
        </Link>
      </h2>
      <h2>
        <Link href={"/gallery"}>
          <ListItem className="py-2 pr-4">Gallery</ListItem>
        </Link>
      </h2>
      <h2>
        <Link href={"/mcm-learning-center"}>
          <ListItem className="py-2 pr-4">MCM Learning Center</ListItem>
        </Link>
      </h2>
      <NavListMenu4 />
      <h2>
        <Link href={"/about-us"}>
          <ListItem className="py-2 pr-4">About</ListItem>
        </Link>
      </h2>
      <h2>
        <Link href={"/contact-us"}>
          <ListItem className="py-2 pr-4">Contact</ListItem>
        </Link>
      </h2>
    </List>
  );
}

export default function Header() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <Navbar
      className="mx-auto max-w-full shadow-md bg-gray-100 rounded-none px-5 lg:px-12 py-4"
      style={{
        backgroundImage: 'url("/mcm-pattern.png")',
      }}
    >
      <div className="flex items-center justify-between text-blue-gray-900">
        {/* <Link href={"/"}>MCM Phoenix</Link> */}
        <Link href={"/"}>
          <img src="/logo.svg" alt="" className="h-[20px] md:h-[30px]" />
        </Link>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <div className="">
          <Link href={"/about-us"}>
            <button class="px-5 md:px-8 py-2 md:py-3 bg-gradient-to-r from-aqua to-[#05774c] text-base md:text-xl text-white font-medium rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg">
              Donate Us
            </button>
          </Link>
        </div>
        <IconButton
          variant="text"
          color="blue-gray"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}
