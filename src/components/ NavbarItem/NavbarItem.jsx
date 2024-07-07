import React from "react";

const NavbarItem = ({ name = "name", icon, link = null }) => {
  return (
    <a
      className="flex items-center gap-1 cursor-pointer"
      href={link}
      target="_blank"
      rel="noreferrer"
    >
      <div>{icon}</div>
      <div className="underline hover:text-black">{name}</div>
    </a>
  );
};

export default NavbarItem;
