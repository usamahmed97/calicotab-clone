import React from "react";
import { RightOutlined } from "@ant-design/icons";

const MenuTab = ({ text = "Enter text", icon }) => {
  return (
    <div className="border py-3 bg-white hover:bg-backgroundGray cursor-pointer">
      <div className="flex items-center justify-between px-3">
        <div className="flex gap-2">
          <div className="text-purple-800">{icon}</div>
          <div className="text-purple-800 hover:text-black font-light">
            {text}
          </div>
        </div>
        <RightOutlined className="text-purple-800" />
      </div>
    </div>
  );
};

export default MenuTab;
