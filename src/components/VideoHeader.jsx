import React from 'react';
import VideoImgHeader from '../images/header-video.webp';
import { Col, Row } from 'antd';

const VideoHeader = () => {
  return (
    <>
        <div>
            <img src={VideoImgHeader} alt="Último video subido" />
        </div>    
    </>
  )
}

export default VideoHeader