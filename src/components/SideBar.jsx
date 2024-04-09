import React from 'react';
import {  Flex, Menu } from 'antd';
import {
  HomeOutlined,
  ReadOutlined,
  FireOutlined,
  UserOutlined,
  DesktopOutlined,
  ThunderboltOutlined,
  FundViewOutlined
} from '@ant-design/icons';
import '../App.css'
import Logo from './Logo';
const { SubMenu } = Menu;

const SideBar = ({ darkTheme , collapsed }) => {
  return (
    <>
    <Flex align='center' justify='center' >
        <Logo 
            darkTheme={darkTheme} 
            collapsed={collapsed}
            />
    </Flex>
    <Menu 
        theme={darkTheme ? 'dark' : 'light'} 
        className='menu-bar'> 
        <SubMenu 
                key="Empieza por aquí"
                icon={<HomeOutlined />} 
                title="Empieza por aquí"
            >
                <Menu.Item 
                    key='Fechas conferencias y recursos'>
                        Fechas conferencias y recursos
                </Menu.Item>
                <Menu.Item 
                    key='Conceptos importantes y prácticas básicas'>
                        Conceptos importantes y prácticas básicas
                </Menu.Item>
        </SubMenu>
        <SubMenu 
                key="Enseñanza de la vía"
                icon={<ReadOutlined />} 
                title="Enseñanza de la vía"
            >
                <SubMenu 
                    key='Comentarios de sutras'
                    title="Comentarios de sutras">
                    <SubMenu 
                        key='Shiva Sutras: La Cosmovisión'
                        title="Shiva Sutras: La Cosmovisión">
                        <Menu.Item 
                            key='1 Despertar'>
                             1 Despertar
                        </Menu.Item>
                        <Menu.Item 
                            key='2 Despertar'>
                             2 Despertar
                        </Menu.Item> 
                        <Menu.Item 
                            key='3 Despertar'>
                             3 Despertar
                        </Menu.Item>         
                    </SubMenu>
                    <Menu.Item 
                        key='Vijñana Bhairava: La Práctica'>
                             Vijñana Bhairava: La Práctica
                    </Menu.Item>
                    <Menu.Item 
                        key='Los 36 Tattvas'>
                             Los 36 Tattvas
                    </Menu.Item>
                    <Menu.Item 
                        key='Spandakarika'>
                             Spandakarika
                    </Menu.Item>
                    <Menu.Item 
                        key='Pratiabhidjaridayam'>
                             Pratiabhidjaridayam
                    </Menu.Item>
                </SubMenu>
                <Menu.Item 
                    key='Conceptos de apoyo'>
                        Conceptos de apoyo
                </Menu.Item>
                <Menu.Item 
                    key='Sat Sang'>
                        Sat Sang
                </Menu.Item>
                <Menu.Item 
                    key='Textos en PDF'>
                        Textos en PDF
                </Menu.Item>
                <Menu.Item 
                    key='Libros Recomendados'>
                         Libros Recomendados
                </Menu.Item>
                <Menu.Item 
                    key='Pruebas'>
                         Pruebas
                </Menu.Item>
        </SubMenu>
        <SubMenu
            key="Aplicación en tu vida"
            icon={<FireOutlined />}
            title="Aplicación en tu vida"
        >
            <Menu.Item key='Preguntas y respuestas'>Preguntas y respuestas</Menu.Item>
            <Menu.Item key='Conferencias por Temas'>Conferencias por Temas</Menu.Item>
        </SubMenu>
        <SubMenu
            key="Prácticas en diferido"
            icon={<DesktopOutlined /> }
            title="Prácticas en diferido"
        >
            <Menu.Item key='Tandava con Juanjo y Mar'>Tandava con Juanjo y Mar</Menu.Item>
            <Menu.Item key='Yutkis'> Yutkis</Menu.Item>
            <Menu.Item key='Otras prácticas'>Otras prácticas</Menu.Item>
            <SubMenu
                key="Visualizaciones"
                title="Visualizaciones"
            >
                <Menu.Item key='Kali'>Kali</Menu.Item>
                <Menu.Item key='Masyendra'>Masyendra</Menu.Item>
            </SubMenu>
        </SubMenu>
        <Menu.Item key='Chamanismo' icon={<ThunderboltOutlined />}>Chamanismo</Menu.Item>
        <Menu.Item key='Últimos videos subidos' icon={<FundViewOutlined />}>Últimos videos subidos</Menu.Item>
    </Menu>    
    </>
    
  )
}

export default SideBar;
