/*
 * @Author: dengkaixin
 * @Descripttion: dengkaixin的代码
 * @Date: 2024-04-13 16:59:13
 * @LastEditors: dengkaixin
 * @LastEditTime: 2024-04-17 17:28:30
 */
import { useState } from 'react';
import PdcxModal from './pdcxModal';
import './index.css'
import { Modal } from 'antd';
function Top() {
  const [openPdcx, setOpenPdcx] = useState(false);

  return <div className='mainPage-header'>
    <div className='title'></div>
    <div className='header-btn-group'>
      <div>
        <div className='header-btn' style={{cursor: 'default'}}>盘煤仪管理</div>
        <div className='header-btn' style={{ marginLeft: '32rem' }} onClick={() => {
            Modal.confirm({
              title: <span style={{color: '#fff'}}>确定全局盘煤?</span>,
              okText: '确定',
              cancelText: '取消',
              onOk: () => {
                console.log('确定')
              }
            });
          }}>全局盘煤</div>
      </div>
      <div>
        <div className='header-btn' onClick={() => {}}>区域盘煤</div>
        <div className='header-btn' style={{ marginLeft: '32rem' }} onClick={() => setOpenPdcx(true)}>盘点查询</div>
      </div>
    </div>
    <PdcxModal open={openPdcx} onClose={() => setOpenPdcx(false)}/>
  </div >
}

export default Top