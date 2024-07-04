import { Avatar, Menu } from "antd";
import { Header } from "antd/es/layout/layout";
import React from "react";
import { navbarItems } from "../../enums";

const Navbar = () => {
  return (
    <div className="">
      <Header className="top-0 z-10 w-full bg-white border-b flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Avatar />
          <div>IODC24</div>
        </div>
        <Menu mode="horizontal" items={navbarItems} className="w-full" />
        <div className="text-gray-400">Login</div>
      </Header>
    </div>
  );
};

export default Navbar;

//  items={new Array(3).fill(null).map((_, index) => ({
//           key: String(index + 1),
//           label: `nav ${index + 1}`,
//         }))}
