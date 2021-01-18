import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Menu } from "antd";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Menu.Item onClick={() => loginWithRedirect()}>Student? Log In</Menu.Item>
  );
};

export default LoginButton;
