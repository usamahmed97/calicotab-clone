import React from "react";
import { Form, Input } from "antd";

const FormInput = ({
  name,
  type = "text",
  rules = [
    {
      required: false,
    },
  ],
  placeholder,
  className = "xs:w-[250px] sm:w-[300px] lg:w-[650px] h-[40px] rounded-lg gap-2",
  disabled = false,
  icon,
  label,
  onChange,
}) => (
  <>
    <Form.Item name={name} type={type} rules={rules} label={label}>
      {type !== "password" ? (
        <Input
          placeholder={placeholder}
          className={className}
          disabled={disabled}
          addonAfter={icon}
          onChange={onChange}
        />
      ) : (
        <Input.Password placeholder={placeholder} className={className} />
      )}
    </Form.Item>
  </>
);

export default FormInput;
