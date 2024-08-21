import React from 'react';
import { Layout, Menu, Button } from 'antd';
import { Link } from 'react-router-dom';
import { NotificationOutlined, HomeOutlined, ContactsOutlined, ProfileOutlined, GlobalOutlined, ToolOutlined } from '@ant-design/icons';
import logo from '../../assets/logo.png';
import './navbar.css';

const { Header } = Layout;

const Navbar = () => {
  return (
    <Header className='navbar-header'>
      <div className='navbar-container'>
        <div className="logo">
          <img src={logo} alt='Logo' />
        </div>
        <div className='nav-items'>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['sub1']}>
            <Menu.Item key="sub1" icon={<HomeOutlined />}>
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="sub2" icon={<GlobalOutlined />}>
              <Link to="/aboutus">About Us</Link>
            </Menu.Item>
            <Menu.Item key="sub3" icon={<ToolOutlined />}>
              <Link to="/services">Services</Link>
            </Menu.Item>
            <Menu.Item key="sub4" icon={<ProfileOutlined />}>
              <Link to="/packages">Packages</Link>
            </Menu.Item>
            <Menu.Item key="sub5" icon={<NotificationOutlined />}>
              <Link to="/news">News</Link>
            </Menu.Item>
            <Menu.Item key="sub6" icon={<ContactsOutlined />}>
              <Link to="/contact">Contact Us</Link>
            </Menu.Item>
          </Menu>
        </div>
        <Button type="primary" className='navbar-login-button' htmlType="submit"><Link to="/login">Sign in</Link></Button>
      </div>
    </Header>
  );
};

export default Navbar;
