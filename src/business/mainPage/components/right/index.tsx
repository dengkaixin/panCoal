/*
 * @Author: dengkaixin
 * @Descripttion: dengkaixin的代码
 * @Date: 2024-04-12 16:10:08
 * @LastEditors: dengkaixin
 * @LastEditTime: 2024-04-13 18:06:45
 */
import dspm from '../../assets/定时盘煤.png'
import spjk from '../../assets/视频监控.png'
import hide from '../../assets/隐藏.png'
import Icon1 from '../../assets/icon-1.png';
import Icon2 from '../../assets/icon-2.png';
import Icon3 from '../../assets/icon-3.png';
import Icon4 from '../../assets/icon-4.png';
import Icon5 from '../../assets/icon-5.png';
import Icon6 from '../../assets/icon-6.png';
import Icon7 from '../../assets/icon-7.png';

import { Slider, Form, Radio, Row, Col, Input } from "antd";
import ModelTitle from '../modelTitle'

import './index.css'
function Waiguan() {
  return <div className='mainPage-content-right'>
    <div className='top-btn-group'>
      <div className='right-btn'>
        <img src={dspm} />定时盘煤
      </div>
      <div className='right-btn'>
        <img src={spjk} />视频监控
      </div>
      <div className='right-btn'>
        <img src={hide} />隐藏
      </div>
    </div>
    <div className='main'>
      <ModelTitle right title={'外观'} />
      <div className='overflowY scrollContainer'>
        <Form layout="vertical">
          <div>
            点数量设定：
            <Row>
              <Col span={15}>
                <Slider defaultValue={30} />
              </Col>
              <Col span={9}>
                <Input
                  min={1}
                  max={20}
                  style={{ margin: '0 16px' }}
                />
              </Col>
            </Row>
          </div>
          <div>
            现场
            <Row>
              <Col span={15}>
                <Slider defaultValue={30} />
              </Col>
              <Col span={9}>
                <Input
                  min={1}
                  max={20}
                  style={{ margin: '0 16px' }}
                />
              </Col>
            </Row>
          </div>
          数据轮廓增强
          <div>
            半径
            <Row>
              <Col span={18}>
                <Slider defaultValue={30} />
              </Col>
              <Col span={6}>
                <Input
                  min={1}
                  max={20}
                  style={{ margin: '0 16px' }}
                />
              </Col>
            </Row>
          </div>
          <div>
            强度：55
            <Row>
              <Col span={18}>
                <Slider defaultValue={30} />
              </Col>
              <Col span={6}>
                <Input
                  min={1}
                  max={20}
                  style={{ margin: '0 16px' }}
                />
              </Col>
            </Row>
          </div>
        </Form>
        <hr />
        <Form layout="vertical">
          <Form.Item label={'背景设置'}>
            <Radio.Group
              options={[
                { label: '蓝天', value: 'blue' },
                { label: '深蓝', value: 'darkBlue' },
              ]}
              value={'blue'}
              optionType="button"
              buttonStyle="solid"
            />
          </Form.Item>
          <Form.Item label={'点云清晰度'}>
            <Radio.Group
              options={[
                { label: '正常', value: 'normal' },
                { label: '高清', value: 'gaoqing' },
              ]}
              value={'normal'}
              optionType="button"
              buttonStyle="solid"
            />
          </Form.Item>
        </Form>
        <hr />
        <Form layout="vertical">
          属性
          <div>
            最小节点尺寸：0
            <Slider defaultValue={30} />
          </div>
        </Form>
        <ModelTitle title={"测量工具"} right />
        <div className='bottom-box'>
          <span><img src={Icon1} /></span>
          <span><img src={Icon2} /></span>
          <span><img src={Icon3} /></span>
          <span><img src={Icon4} /></span>
          <span><img src={Icon5} /></span>
          <span><img src={Icon6} /></span>
          <span><img src={Icon7} /></span>
        </div>
      </div>
    </div>
  </div>
}
export default Waiguan;