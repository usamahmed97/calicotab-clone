import React from "react";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import PasswordResetForm from "../../components/PasswordResetForm/PasswordResetForm";

const PasswordReset = () => {
  return (
    <div className="flex items-center justify-center p-4 bg-backgroundGray">
      <div className="bg-white border rounded-md p-4">
        <div className="flex items-center gap-2 py-2">
          🔐
          <div className="font-bold text-xl">Password Reset</div>
        </div>
        <div className="border-b pb-4 text-seaGreen">
          Enter your email address below, and we will email you a password reset
          link.
        </div>
        <PasswordResetForm />
      </div>
    </div>
  );
};

export default PasswordReset;
