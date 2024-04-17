/*
 * @Author: dengkaixin
 * @Descripttion: dengkaixin的代码
 * @Date: 2024-04-13 17:59:13
 * @LastEditors: dengkaixin
 * @LastEditTime: 2024-04-17 17:48:46
 */
import { useState, useEffect } from 'react';
import { Table, Modal, Button, Form, DatePicker, Row } from 'antd';
import moment from 'moment';

function PdcxModal(props: {
  open: boolean,
  onClose: () => void
}) {
  const [form] = Form.useForm();
  const { open, onClose } = props;
  const [searchParams, setSearchParams] = useState({ startDate: moment().format('YYYY-MM-DD') })
  const [dataSource, setDataSource] = useState<unknown[]>([]);
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
      render: () => <span className="icon iconfont icon-xiangji"></span>
    },
    {
      title: '操作',
      dataIndex: 'age',
    },
  ];

  useEffect(() => {
    fetchData()
  }, [searchParams])
  /**请求数据 */
  const fetchData = () => {
    console.log('searchParams---', searchParams)
    const data = [
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
    ]
    setDataSource(data)
  }
  return (
    <Modal
      title={'盘点报告'}
      open={open}
      width={1000}
      onCancel={onClose}
      footer={[<Button key={'back'} onClick={onClose}>关闭</Button>]}
    >
      <Form
        form={form}
        layout="vertical"
        initialValues={{
          ...searchParams,
          startDate: moment(searchParams.startDate)
        }}
      >
        <Row>
          <Form.Item name='startDate' label="报告日期">
            <DatePicker style={{ width: 220 }}/>
          </Form.Item>
          <Form.Item label={' '}>
            <Button type='primary' style={{ marginLeft: 30 }} htmlType="submit" onClick={() => {
              const values = form.getFieldsValue();
              values.startDate = moment(values.startDate).format('YYYY-MM-DD')
              setSearchParams(values);
            }}>查询</Button>
          </Form.Item>
        </Row>
      </Form>
      <Table dataSource={dataSource} columns={columns} pagination={false} />
    </Modal>
  )
}
export default PdcxModal