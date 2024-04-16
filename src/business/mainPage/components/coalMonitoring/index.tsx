/*
 * @Author: dengkaixin
 * @Descripttion: dengkaixin的代码
 * @Date: 2024-04-12 14:34:52
 * @LastEditors: dengkaixin
 * @LastEditTime: 2024-04-13 16:51:27
 */
// import { useState } from 'react';
import img1 from '../../assets/视角1.png';
import img2 from '../../assets/视角2.png';
import img3 from '../../assets/视角3.png';
import img4 from '../../assets/视角4.png';
import img5 from '../../assets/视角5.png';
import img6 from '../../assets/视角6.png';

import './index.css'
function CoalMonitoring() {
  // const [iframeSrc, setIframeSrc] = useState('');
  return <div className='mainPage-content-center'>
    <div className='chart-wrapper'>
      <iframe src={''} width={'100%'} height={"100%"} frameBorder="0" />
    </div>
    <div className='operation-btns'>
      <span className='tips'>视角<br />选择</span>
      <img src={img1} />
      <img src={img2} />
      <img src={img3} />
      <img src={img4} />
      <img src={img5} />
      <img src={img6} />
    </div>
  </div>
}

export default CoalMonitoring;