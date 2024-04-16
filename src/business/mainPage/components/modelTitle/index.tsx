/*
 * @Author: dengkaixin
 * @Descripttion: dengkaixin的代码
 * @Date: 2024-04-13 10:11:09
 * @LastEditors: dengkaixin
 * @LastEditTime: 2024-04-13 11:44:40
 */
import iconTitle from '../../assets/标题icon.png';
import './index.css'
interface PropsType {
  left?: boolean,
  right?: boolean,
  title: string,
}
function ModelTitle({
  left,
  right,
  title,
}: PropsType) {
  return <div className={`model-title ${left ? 'left' : 'right'}`}>
    {left && <img src={iconTitle} />}
    {title}
    {right && <img src={iconTitle} />}
  </div>
}

export default ModelTitle