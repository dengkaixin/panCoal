/*
 * @Author: dengkaixin
 * @Descripttion: dengkaixin的代码
 * @Date: 2024-04-13 16:54:30
 * @LastEditors: dengkaixin
 * @LastEditTime: 2024-04-13 17:54:46
 */
import _ from 'lodash'
import React, { ReactNode, useEffect, useMemo, useRef } from 'react'
import './index.css'
import { createPortal } from 'react-dom'
interface ModalProps{
  title:string,
  // type: 2 | 3 | 4  //决定使用容纳多少个图表的背景
  children:unknown,
  visible:boolean
  hidden?:boolean
  onClose : ()=> void
}

const Modal = (props:ModalProps)=>{
  const {children,title,visible =false,hidden=false,onClose} = props
  const type = 2;
  const idNameRef = useRef("")

  let modalBar:unknown = null
  let modalContent:unknown = null

  const node = useMemo(()=> {
    const divNode =  document.createElement("div");
    const id = _.uniqueId("chart-modal")
    idNameRef.current = id

    const existCover = document.getElementsByClassName("chart-modal-cover")?.length>0 //已存在弹窗背景

    divNode.classList.add(`chart-modal-cover`)
    existCover && divNode.classList.add(`${existCover ? "no-bg" : ""}`)
    
    divNode.setAttribute("id",id)
    document.body.appendChild(divNode);
    return divNode
  },[])

  useEffect(()=>{
    if(!idNameRef.current) return;
    const dom  = document.getElementById(idNameRef.current)
    if(!dom) return;
    
    dom.style.display = hidden? "none" : "flex"
    dom.style.opacity = hidden? "0" : "1"
  },[hidden])

  useEffect(()=>{
    console.log("remove")
    return ()=>{
      node && document.body.removeChild(node)
    }
  },[])

  if(!visible) return null

  const getPanel = (typeName: string, ele: unknown) => {
    switch (typeName) {
      case 'modalBar': {
        if (!modalBar) {
          modalBar = ele;
        }
        break;
      }
      case 'modalContent': {
        if (!modalContent) {
          modalContent = ele;
        }
        break;
      }
      default: {
        break;
      }
    }
  };

  if (!_.isArray(children)) {
    if (_.isObjectLike(children)) {
      if (children?.type && children?.type?.displayName) {
        getPanel(children?.type?.displayName, children);
      }
    }
  } else {
    _.each(children, (item) => {
      if (_.isObjectLike(item)) {
        if (item?.type && item?.type?.displayName) {
          getPanel(item?.type?.displayName, item?.props?.children);
        }
      }
    });
  }

  return createPortal(
    <>
    <div className={`chart-modal bg-${type} `} id={`${idNameRef.current}-chart-modal`}>
      <div className='modal-title'>{title}</div>
      <div className='modal-inner'>
        <div className='modal-bar'>{modalBar as ReactNode}</div>
        <div className="modal-content">{
           _.isArray(modalContent) && (modalContent as ReactNode[])?.map(i => {
            if(!React.isValidElement(i)) return null
            return (
              <div className={`content-item  num-${type}`}>{i}</div>
            )
          })
        }</div>
      </div>
      <div className='close-btn' onClick={onClose}>x</div>
    </div>
    </>,node
  )
}

const Bar = ({ children })=> <>{children}</>
Bar.displayName = "modalBar"
const Content = ({ children })=> <>{children}</>
Content.displayName = "modalContent"

Modal.Bar = Bar
Modal.Content = Content

export default Modal


// export const BackToFront = ({onBack})=>{
//   return (
//     <div onClick={onBack} className='back-to-front'>
//       <img className='back-icon' src={require('../../../../assets/images/mapCenter/back-icon.png')} alt="" />
//       返回
//     </div>
//   )
// }