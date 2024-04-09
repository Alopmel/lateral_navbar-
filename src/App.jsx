import React, { useState } from 'react';
import { Button, Flex, Layout, theme } from 'antd';
import SideBar from './components/SideBar';
import ToggleThemButton from './components/ToggleThemButton';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import CustomHeader from './components/CustomHeader';
import MainContent from './components/MainContent';
import SideContent from './components/SideContent';
import BgHeader from './assets/fondo.avif';
import './App.css'

const {Header, Sider , Content} = Layout;
const App = () => {
  const [darkTheme, setDarkTheme] = useState(true);
  const [ collapsed, setCollapsed ] = useState(false);

  const url = './assests/fondo.avif'
  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  }

  const{
    token: { colorBgContainer },
  } = theme.useToken();

  return (    
  <>
    <Layout>
      <Sider
        collapsed={collapsed} 
        collapsible
        trigger={null}
        theme={darkTheme ? 'dark' : 'light'} 
        className='sider'> 
        <SideBar
          darkTheme={darkTheme}
          collapsed={collapsed}
        />
        <ToggleThemButton  
          toggleTheme={toggleTheme}
          darkTheme={darkTheme}/>
      </Sider>
      <Layout>
        <Header 
          className='header'
        >
          <Flex >
            <Button
                type='text'
                className='toggle'
                onClick={() => setCollapsed(!collapsed)} 
                icon={collapsed ?
                  <MenuUnfoldOutlined /> :
                  <MenuFoldOutlined />}             
            />
            <CustomHeader />                     
          </Flex>                
        </Header>
        <Content 
          className='content'
          style={{
            color: 'white',
            position: 'relative',
            overflow: 'hidden',
            backgroundSize: 'cover',
          }}
        >
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(30, 40, 53, 0.8)' }}></div> {/* Capa de sombra */}

          <Flex gap='large'>
            <MainContent />
          </Flex>
        </Content> 
      </Layout>
    </Layout>
    
  </>
  )
}

export default App



