/*
 * @Author: dengkaixin
 * @Descripttion: dengkaixin的代码
 * @Date: 2024-04-12 11:02:09
 * @LastEditors: dengkaixin
 * @LastEditTime: 2024-04-13 17:02:00
 */
import './index.css'
import Top from './components/top';
import Left from './components/left';
import CoalMonitoring from './components/coalMonitoring';
import Right from './components/right';
// import FullScreen from '../../components/FullScreen';

function MainPage() {
  return <div className='mainPage'>
    {/* <FullScreen> */}
      <Top />
      <div className='content'>
        <Left />
        <CoalMonitoring />
        <Right />
      </div>
      <div className='footer' />
    {/* </FullScreen> */}
  </div>
}

export default MainPage;