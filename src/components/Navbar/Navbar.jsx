import React, { useState } from "react";
import { Avatar } from "antd";
import { Header } from "antd/es/layout/layout";
import { navbarItems } from "../../enums";
import { MenuOutlined } from "@ant-design/icons";
import MobileDrawer from "../MobileDrawer/MobileDrawer";

const Navbar = () => {
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  return (
    <div>
      <Header className="top-0 z-10 w-full bg-white border-b flex items-center">
        <div className="flex items-center gap-2 mr-2">
          <Avatar />
          <div>IODC24</div>
        </div>
        <div className="xs:hidden lg:flex gap-3">
          {navbarItems.map((item) => (
            <div
              key={item.key}
              className="text-md text-stone-400 hover:text-purple-500 cursor-pointer"
            >
              {item.label}
            </div>
          ))}
        </div>
        <div className="xs:hidden lg:block text-gray-400 hover:text-purple-500 cursor-pointer ml-auto">
          Login
        </div>
        <div
          className="xs:block lg:hidden text-gray-400 hover:text-purple-500 cursor-pointer ml-auto"
          onClick={() => setIsMenuClicked(!isMenuClicked)}
        >
          <MenuOutlined />
        </div>
      </Header>
      {isMenuClicked && (
        <MobileDrawer
          isMenuClicked={isMenuClicked}
          setIsMenuClicked={setIsMenuClicked}
        />
      )}
    </div>
  );
};

export default Navbar;
