
/*
 * @Author: dengkaixin
 * @Descripttion: dengkaixin的代码
 * @Date: 2024-04-13 17:07:22
 * @LastEditors: dengkaixin
 * @LastEditTime: 2024-04-16 17:25:52
 */

import { Table } from 'antd';

function Pdygl() {
  const dataSource = [
    {
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号',
    },
    {
      key: '2',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号',
    },
  ];
  const columns = [
    {
      title: '序号',
      dataIndex: 'name',
      render: (text, record, index) => index + 1
    },
    {
      title: '盘点时间',
      dataIndex: 'age',
    },
    {
      title: '盘点人ID',
      dataIndex: 'address',
    },
    {
      title: '报告名称',
      dataIndex: 'age',
    },
    {
      title: '体积测量值',
      dataIndex: 'address',
    },
    {
      title: '体积修改值',
      dataIndex: 'age',
    },
    {
      title: '三维数据查看',
      dataIndex: 'address',
    },
    {
      title: '操作',
      dataIndex: 'age',
    },
  ];

  return (
    <>
      <Table bordered={false} dataSource={dataSource} columns={columns} pagination={false}/>
    </>
  )
}
export default Pdygl