/*
 * @Author: dengkaixin
 * @Descripttion: dengkaixin的代码
 * @Date: 2024-04-12 09:52:50
 * @LastEditors: dengkaixin
 * @LastEditTime: 2024-04-17 17:45:01
 */
import { ConfigProvider } from 'antd';
import zhCN from 'antd/locale/zh_CN';
import 'dayjs/locale/zh-cn';

import MainPage from './business/mainPage';
import './App.css'
import './assets/font/iconfont.css'

function App() {
  return (
    <ConfigProvider
      locale={zhCN}
      theme={{
        token: {
          colorPrimary: '#1982E4',
          borderRadius: 5,
          colorBgContainer: '#081A36',
          colorBorder: '#0C547E',
          // colorText: '#fff',
        },
        components: {
          Slider: {
            handleSize: 8,
            handleColor: '#1982E4',
            trackBg: '#1982E4',
            railBg: '#003D75',
            colorText: '#fff',
          },
          Table: {
            cellPaddingBlock: 5,
            headerColor: '#A8DFFF',
            headerBg: '#15305B',
            borderColor: 'transparent',
            headerSplitColor: 'transparent',
            colorText: '#fff',
          },
          Modal: {
            titleColor: '#fff',
            colorText: '#fff',
          },
          Form: {
            labelColor: '#fff',
          },
          // DatePicker: {
          //   colorText: '#000'
          // },
          Button: {
            primaryShadow: 'none'
            // defaultColor: 'transparent',
            // defaultBg: "transparent",
            // ghostBg: 'transparent',
            // defaultBorderColor: 'transparent'
            /* 这里是你的组件 token */
          },
        },
      }}>
      <MainPage/>
    </ConfigProvider>
  )
}

export default App
