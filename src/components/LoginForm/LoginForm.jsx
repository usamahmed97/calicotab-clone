import React, { useState } from "react";
import { Form, Spin } from "antd";
import FormInput from "../FormInput/FormInput";
import FormSubmitButton from "../FormSubmitButton/FormSubmitButton";
import { FormRule } from "../../enums/formRules";
import { Link } from "react-router-dom";
import { PASSWORD_RESET } from "../../routes/routes";

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const handleLogin = (values) => {
    console.log(values);
  };
  return (
    <div className="py-4">
      <Form
        name="basic"
        className="flex flex-col items-center"
        onFinish={handleLogin}
        layout="vertical"
      >
        <p className="text-white text-2xl mb-5 mr-auto">Sign In</p>
        <FormInput
          name="email"
          type="email"
          label="Email"
          rules={FormRule.EMAIL}
          placeholder="Email"
        />
        <FormInput
          name="password"
          type="password"
          label="Password"
          rules={FormRule.PASSWORD}
          placeholder="Password"
        />

        <FormSubmitButton
          type="primary"
          className="xs:w-64 sm:w-72 lg:w-[650px] bg-button rounded-md gap-2 bg-seaGreen hover:!bg-green-800"
          disabled={isLoading}
          label={
            isLoading ? (
              <div className="flex items-center justify-center">
                <Spin />
              </div>
            ) : (
              "Login In"
            )
          }
        />
      </Form>
      <Link
        to={PASSWORD_RESET}
        className="text-purple-700 text-xs flex items-center justify-center hover:underline"
      >
        I forgot my password
      </Link>
    </div>
  );
};

export default LoginForm;
