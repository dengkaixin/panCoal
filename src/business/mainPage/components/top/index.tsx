/*
 * @Author: dengkaixin
 * @Descripttion: dengkaixin的代码
 * @Date: 2024-04-13 16:59:13
 * @LastEditors: dengkaixin
 * @LastEditTime: 2024-04-16 13:57:52
 */
import { useState } from 'react';
import Pdygl from './pmygl';
import Qjpm from './qjpm';
import Qypm from './qypm';
import Pdcx from './pdcx';
import './index.css'
import Modal from '../../../../components/model';
const titleMap = ['', '盘煤仪管理', '全局盘煤', '区域盘煤', '盘点查询']
function Top() {
  const [visibleType, setVisibleType] = useState<number | null>();
  const onClose = () => {
    setVisibleType(null)
  }
  const renderContent = () => {
    if (visibleType == 1) {
      return <Pdygl />
    }
    if (visibleType == 2) {
      return <Qjpm />
    }
    if (visibleType == 3) {
      return <Qypm />
    }
    if (visibleType == 4) {
      return <Pdcx />
    }
    return <></>
  }
  return <div className='mainPage-header'>
    <div className='title'></div>
    <div className='header-btn-group'>
      <div>
        <div className='header-btn' onClick={() => setVisibleType(1)}>盘煤仪管理</div>
        <div className='header-btn' style={{ marginLeft: '32rem' }} onClick={() => setVisibleType(2)}>全局盘煤</div>
      </div>
      <div>
        <div className='header-btn' onClick={() => setVisibleType(3)}>区域盘煤</div>
        <div className='header-btn' style={{ marginLeft: '32rem' }} onClick={() => setVisibleType(4)}>盘点查询</div>
      </div>
    </div>
    {!!visibleType &&
      <Modal title={visibleType ? titleMap[visibleType] : ''} visible={!!visibleType} onClose={onClose}>
        {renderContent()}
      </Modal>
    }
  </div>
}

export default Top