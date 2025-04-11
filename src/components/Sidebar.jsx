import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import Users from "../Users";
import Notes from "../Notes";
import Uploads from "../Uploads";
import Usermodal from "./Usermodal";

const { Header, Sider, Content } = Layout;

const Sidebar = () => {
  const [value, setValue] = useState(false);
  const [collapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const getSelectedKey = () => {
    const path = window.location.pathname;
    if (path === "/") return "1";
    if (path === "/notes") return "2";
    if (path === "/uploads") return "3";
    return "";
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "64px",
          }}
        >
          <img
            src="https://img.icons8.com/ios/452/brain.png"
            alt="logo"
            className="relative w-8 h-8 md:w-9 md:h-9 filter invert"
          />
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          onClick={({ key }) => {
            if (key === "1") {
              window.location.href = "/";
            } else if (key === "2") {
              window.location.href = "/notes";
            } else if (key === "3") {
              window.location.href = "/uploads";
            }
          }}
          selectedKeys={[getSelectedKey()]}
          items={[
            {
              key: "1",
              icon: <UserOutlined />,
              label: "Users",
            },
            {
              key: "2",
              icon: <VideoCameraOutlined />,
              label: "Notes",
            },
            {
              key: "3",
              icon: <UploadOutlined />,
              label: "Uploads",
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <div className="flex items-center gap-2 justify-end mt-4">
            <Button
              type="primary"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 rounded"
              onClick={handleLogout}
            >
              LOGOUT
            </Button>
            <Usermodal setValue={setValue} />
          </div>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {/* Render the content based on the selected menu item */}
          {getSelectedKey() === "1" && <Users value={value} />}
          {getSelectedKey() === "2" && <Notes />}
          {getSelectedKey() === "3" && <Uploads />}
        </Content>
      </Layout>
    </Layout>
  );
};
export default Sidebar;
