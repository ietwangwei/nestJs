import React, { Component } from 'react'
import PageHeader from '@/components/header'
import { Row, Col, Card } from 'antd'
const data = [
  {
    name: '庆余年',
    type: '历史',
    content: '庆余年庆余年庆余年庆余年庆余年'
  },
  {
    name: '庆余年',
    type: '历史',
    content: '庆余年庆余年庆余年庆余年庆余年'
  },
  {
    name: '庆余年',
    type: '历史',
    content: '庆余年庆余年庆余年庆余年庆余年'
  },
  {
    name: '庆余年',
    type: '历史',
    content: '庆余年庆余年庆余年庆余年庆余年'
  },
  {
    name: '庆余年',
    type: '历史',
    content: '庆余年庆余年庆余年庆余年庆余年'
  },
  {
    name: '庆余年',
    type: '历史',
    content: '庆余年庆余年庆余年庆余年庆余年'
  }
]

class Home extends Component {
  render() {
    return (
      <div className="home">
        <PageHeader></PageHeader>
        <Row className="home-container">
          {/* <Col span={4} className="left-bar">left-bar</Col> */}
          <Col span={24} className="main">
            {
              data.map((item, index) => {
                return (
                  <Card
                    hoverable
                    title={item.name}
                    key={index}
                    className="ant-col-5 margin-bottom24 margin-right12"
                  >
                    {item.content}
                  </Card>
                )
              })
            }
          </Col>
        </Row>
      </div>
    )
  }
}
export default Home