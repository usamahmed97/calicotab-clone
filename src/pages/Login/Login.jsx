import React from "react";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import LoginForm from "../../components/LoginForm/LoginForm";

const Login = () => {
  return (
    <div className="flex items-center justify-center p-4 bg-backgroundGray">
      <div className="bg-white border rounded-md p-4">
        <div className="flex items-center gap-2 border-b py-4">
          <LockOutlinedIcon />
          <div className="font-bold text-xl">Log in to Tabbycat</div>
        </div>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
