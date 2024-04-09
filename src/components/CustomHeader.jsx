import React from 'react'
import { UserOutlined , NotificationOutlined } from '@ant-design/icons'
import { Avatar, Flex, Typography } from 'antd'
import Search from 'antd/es/input/Search'

const CustomHeader = ({}) => {
  return (
    <Flex align='center'  gap='25rem'>
        <Typography.Title level={3} type='secondary'>
            TANTRA SHIVAITA APLICADO            
        </Typography.Title>
        <Flex align='center' gap='3rem'>
            <Search 
                placeholder='¿Qué estás buscando?'
                allowClear
            />
            <Flex align='center' gap='10px'>
                <NotificationOutlined className='header-icon' />
                <Avatar icon={<UserOutlined /> } />
            </Flex>
        </Flex>
    </Flex>
  )
}

export default CustomHeader