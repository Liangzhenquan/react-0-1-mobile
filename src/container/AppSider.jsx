import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, withRouter } from 'react-router-dom';
import { Menu } from 'antd';
import { menus } from '@/router';
const { SubMenu } = Menu;
function AppSider({ location }) {
  const { pathname } = location;
  const [openKeys, setOpenKeys] = useState([]);
  const [selectedKeys, setSelectedKeys] = useState([]);
  useEffect(() => {
    handleSubOpen();
    handleSelect();
  }, [pathname]);
  const handleSubOpen = () => {
    const [currentOpen] = menus.filter((menu) => {
      if (menu.sub) {
        return menu.sub.some((sub) => sub.path === pathname);
      }
    });
    if (currentOpen) {
      const currentSelected = currentOpen.sub.find(
        (sub) => sub.path === pathname
      );
      setSelectedKeys([currentSelected.path]);
      setOpenKeys([currentOpen.title]);
    }
  };
  const handleSelect = () => {
    const selected = menus.find((menu) => !menu.sub && menu.path === pathname);
    if (selected) {
      console.log('sss', selected);
      setSelectedKeys([selected.path]);
      setOpenKeys([]);
    }
  };
  const renderItem = (menu) => (
    <Menu.Item key={menu.path}>
      <Link to={menu.path}>{menu.title}</Link>
    </Menu.Item>
  );
  const renderSub = (menus) => (
    <SubMenu title={menus.title} key={menus.title}>
      {menus.sub.map((menu) => renderItem(menu))}
    </SubMenu>
  );
  return (
    <Sider>
      <Logo>
        <span>听</span>
        <span className="name">CP配对系统</span>
      </Logo>
      <Menu
        mode="inline"
        openKeys={openKeys}
        selectedKeys={selectedKeys}
        onOpenChange={setOpenKeys}
      >
        {menus.map((menu) => (menu.sub ? renderSub(menu) : renderItem(menu)))}
      </Menu>
    </Sider>
  );
}
const Sider = styled.div`
  .ant-menu-inline {
    border-right: none;
  }
`;
const Logo = styled.div`
  height: ${(props) => props.theme['@layout-header-height']};
  line-height: ${(props) => props.theme['@layout-header-height']};
  text-align: center;
  background: ${(props) => props.theme['sider-color']};
  .name {
    margin-left: 10px;
    color: #fff;
    cursor: pointer;
  }
  span:first-child {
    font-family: Microsoft JhengHei;
    background: #fff;
    display: inline-block;
    width: 20px;
    height: 20px;
    line-height: 20px;
    border-radius: 2px;
  }
`;
export default withRouter(AppSider);
