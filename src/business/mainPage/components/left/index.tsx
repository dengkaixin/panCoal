/*
 * @Author: dengkaixin
 * @Descripttion: dengkaixin的代码
 * @Date: 2024-04-12 16:10:12
 * @LastEditors: dengkaixin
 * @LastEditTime: 2024-04-13 18:48:55
 */
import { useState } from 'react'
import { Tree, Slider, Form, Select } from "antd";
import { CaretDownOutlined, CarryOutOutlined } from '@ant-design/icons';
import type { TreeDataNode, TreeProps } from 'antd'
import ModelTitle from '../modelTitle'
import './index.css'

function Changejing() {
  const [checkedKeys, setCheckedKeys] = useState<React.Key[]>(['0-0-0']);
  const treeData: TreeDataNode[] = [
    {
      title: '0-0',
      key: '0-0',
      children: [
        {
          title: '0-0-0',
          key: '0-0-0',
          children: [
            { title: '0-0-0-0', key: '0-0-0-0',  icon: <CarryOutOutlined style={{color: ''}} />, },
            { title: '0-0-0-1', key: '0-0-0-1' },
            { title: '0-0-0-2', key: '0-0-0-2' },
          ],
        },
        {
          title: '0-0-1',
          key: '0-0-1',
          children: [
            { title: '0-0-1-0', key: '0-0-1-0' },
            { title: '0-0-1-1', key: '0-0-1-1' },
            { title: '0-0-1-2', key: '0-0-1-2' },
          ],
        },
        {
          title: '0-0-2',
          key: '0-0-2',
        },
      ],
    },
    {
      title: '0-1',
      key: '0-1',
      children: [
        { title: '0-1-0-0', key: '0-1-0-0' },
        { title: '0-1-0-1', key: '0-1-0-1' },
        { title: '0-1-0-2', key: '0-1-0-2' },
      ],
    },
    {
      title: '0-2',
      key: '0-2',
    },
  ];
  const onCheck: TreeProps['onCheck'] = (checkedKeysValue) => {
    console.log('onCheck', checkedKeysValue);
    setCheckedKeys(checkedKeysValue as React.Key[]);
  }

  return <div className='mainPage-content-left'>
    <ModelTitle left title={'场景'} />
    <div className='content scrollContainer'>
      <Form layout="vertical">
        <Tree.DirectoryTree
          showLine
          switcherIcon={<CaretDownOutlined style={{color: '#7795CC'}}/>}
          checkable
          onCheck={onCheck}
          checkedKeys={checkedKeys}
          treeData={treeData}
        />
        <div>
          点尺寸设定：1.00
          <Slider defaultValue={30} />
        </div>
        <Form.Item label={'点类型设定'}>
          <Select />
        </Form.Item>
        <Form.Item label={'点形状'}>
          <Select />
        </Form.Item>
        <div>
          不透明度：1.00
          <Slider defaultValue={30} />
        </div>
      </Form>
      <hr />
      <Form layout="vertical">
        <Form.Item label={'颜色模式'}>
          <Select />
        </Form.Item>
      </Form>
    </div>
  </div>
}
export default Changejing;