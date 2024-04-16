/*
 * @Author: dengkaixin
 * @Descripttion: dengkaixin的代码
 * @Date: 2024-04-13 10:31:32
 * @LastEditors: dengkaixin
 * @LastEditTime: 2024-04-13 10:46:11
 */
import React, { memo, ReactNode, useCallback, useEffect, useMemo, useState } from 'react';
import debounce from 'lodash/debounce';
import styled from 'styled-components';

interface FullScreenProps {
  width?: number | string;
  height?: number | string;
  className?: string;
  children?: ReactNode;
}
const FullScreen: React.FC<FullScreenProps> = (props: FullScreenProps) => {
  const { width = 1920, height = 1080, className } = props;

  const [show, setShow] = useState(false);

  /** 缩放比 */
  const [scaleNum, setScaleNum] = useState<any>();

  /** 屏幕样式 */
  const screenStyle = useMemo(() => ({
    width: `${width}px`,
    height: `${height}px`,
    transformOrigin: '0 0',
    // top: '50%',
    left: '50%',
    background:' #191919',
    transform: `scale(${scaleNum},${scaleNum}) translate(-50%)`,
    '-webkit-transform': `scale(${scaleNum},${scaleNum}) translate(-50%)`,
    '-moz-transform': `scale(${scaleNum},${scaleNum}) translate(-50%)`,
    '-o-transform': `scale(${scaleNum},${scaleNum}) translate(-50%)`,
    '-ms-transform': `scale(${scaleNum},${scaleNum}) translate(-50%)`,
    // transition: '0.3s',
    position: 'absolute',
  } as React.CSSProperties), [scaleNum, width, height]);

  //计算   缩放比例
  const resizeWindow = useCallback(debounce(() => {
    // const isFullScreen = document.fullscreenElement;
    // console.log("是否为全屏", isFullScreen);
    const w_width = Number(document.documentElement.clientWidth / Number(width));
    const w_height = Number(document.documentElement.clientHeight / Number(height));
    const scale: any = w_width > w_height ? w_height : w_width;
    setScaleNum(scale);
    window.localStorage.setItem('scaleNum', scale)// 存储当前缩放比例
    console.log("缩放比例", scale, w_width, w_height);
    setShow(true);
  }, 300), [width, height])

  useEffect(() => {
    resizeWindow();
    // 监听浏览器缩放，实时改变大屏宽高
    window.addEventListener("resize", resizeWindow);
    return () => window.removeEventListener("resize", resizeWindow);
  }, []);
  return (
    <div className={`full-screen ${className}`} style={screenStyle}>
      {show && props?.children}
    </div>
  )
}

export const ScreenLarge = styled(FullScreen)`
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export default memo(FullScreen)