/*
 * @Author: dengkaixin
 * @Descripttion: dengkaixin的代码
 * @Date: 2024-04-13 17:59:13
 * @LastEditors: dengkaixin
 * @LastEditTime: 2024-04-16 17:33:16
 */
import { Table } from 'antd';

function Pdcx() {
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
      title: '设备ID',
      dataIndex: 'age',
    },
    {
      title: '设备名称',
      dataIndex: 'address',
    },
    {
      title: '所属区域',
      dataIndex: 'age',
    },
    {
      title: '扫描仪IP',
      dataIndex: 'address',
    },
    {
      title: '扫描仪端口号',
      dataIndex: 'age',
    },
    {
      title: '云台端口号',
      dataIndex: 'address',
    },
    {
      title: '角速度',
      dataIndex: 'age',
    },
    {
      title: '开始角度',
      dataIndex: 'age',
    },
    {
      title: '结束角度',
      dataIndex: 'age',
    },
    {
      title: '删除',
      dataIndex: 'age',
    },
  ];

  return (
    <>
      <Table dataSource={dataSource} columns={columns} pagination={false}/>
    </>
  )
}
export default Pdcx