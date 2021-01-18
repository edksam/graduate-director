import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Menu } from "antd";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <Menu.Item onClick={() => logout({ returnTo: window.location.origin })}>
      Log Out
    </Menu.Item>
  );
};

export default LogoutButton;
