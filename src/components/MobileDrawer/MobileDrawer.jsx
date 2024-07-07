import React from "react";
import { Drawer } from "antd";
import { navbarItems } from "../../enums";

const MobileDrawer = ({ isMenuClicked, setIsMenuClicked }) => {
  return (
    <Drawer
      title="IODC24"
      placement="left"
      closable={false}
      open={isMenuClicked}
      onClose={() => setIsMenuClicked(false)}
    >
      <div className="flex flex-col gap-3 text-md text-stone-400 hover:text-purple-500 cursor-pointer">
        {navbarItems.map((item) => (
          <div
            key={item.key}
            className="text-md text-stone-400 hover:text-purple-500 cursor-pointer"
          >
            {item.label}
          </div>
        ))}
        <div className="flex flex-col gap-3 text-md text-stone-400 hover:text-purple-500 cursor-pointer">
          Login
        </div>
      </div>
    </Drawer>
  );
};

export default MobileDrawer;
