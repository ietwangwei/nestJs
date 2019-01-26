import React, { Component } from 'react'
import { Row, Col ,Menu, Input, Icon, Dropdown } from 'antd'
import { booksMenu, usersMenu } from './dictionary'

const Search = Input.Search

class Header extends Component {

  search = (value) => {
    console.log(value)
  }

  render() {
    return (
      <div className="header">
        <Row>
          <Col span={6}>
            <div className="title">
              <h2>图书管理系统</h2>
            </div>
          </Col>
          <Col span={4}>
            <div className="search-bar">
            <Search
              placeholder="请输入书名"
              onSearch={this.search}
              style={{ width: 200 }}
            />
            </div>
          </Col>
          <Col span={14}>
            <Menu
              mode="horizontal"
            >
              <Menu.Item>
                <Dropdown overlay={booksMenu}>
                  <span>
                    <span>所有书籍</span>
                    <Icon type="down"></Icon>
                  </span>
                </Dropdown>
              </Menu.Item>
              <Menu.Item>
                <Dropdown overlay={usersMenu}>
                  <span>
                    <span>个人中心</span>
                    <Icon type="down"></Icon>
                  </span>
                </Dropdown>
              </Menu.Item>
            </Menu>
          </Col>
        </Row> 
      </div>
    )
  }
}

export default Header
