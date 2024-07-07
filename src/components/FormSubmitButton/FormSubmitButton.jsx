import React from "react";
import { Button, Form } from "antd";

function FormSubmitButton({
  label,
  type = "primary",
  className = "",
  loading,
  disabled = false,
}) {
  return (
    <>
      <Form.Item>
        <Button
          disabled={disabled}
          type={type}
          htmlType="submit"
          className={className}
          loading={loading}
        >
          {label}
        </Button>
      </Form.Item>
    </>
  );
}

export default FormSubmitButton;
