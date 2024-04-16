/*
 * @Author: dengkaixin
 * @Descripttion: dengkaixin的代码
 * @Date: 2024-04-12 09:52:50
 * @LastEditors: dengkaixin
 * @LastEditTime: 2024-04-16 17:31:45
 */
import { ConfigProvider } from 'antd';
import MainPage from './business/mainPage';
import './App.css'

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#1982E4',
          borderRadius: 5,
          colorBgContainer: '#081A36',
          colorBorder: '#0C547E',
          colorText: '#fff',
        },
        components: {
          Slider: {
            handleSize: 8,
            handleColor: '#1982E4',
            trackBg: '#1982E4',
            railBg: '#003D75',
            /* 这里是你的组件 token */
          },
          Table: {
            cellPaddingBlock: 5,
            headerColor: '#A8DFFF',
            headerBg: '#15305B',
            borderColor: 'transparent',
            headerSplitColor: 'transparent',
          },
        },
      }}>
      <MainPage/>
    </ConfigProvider>
  )
}

export default App
