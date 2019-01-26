import React from 'react'
import { Menu } from 'antd'

const books = ["历史", "言情", "穿越"]
export const booksMenu = () => {
  return (
    <Menu>
      {
        books.map((book, index) => {
          return <Menu.Item key={index}>{book}</Menu.Item>
        })
      }
    </Menu>
  )
}

const users = [
  {
    name: '退出登录',
    command: 'loginOut'
  },
  {
    name: '我收藏的',
    command: 'collect'
  }
]
export const usersMenu = () => {
  return (
    <Menu>
      {
        users.map((user, index) => {
          return (
            <Menu.Item key={index}>
              <a href="">{user.name}</a>
            </Menu.Item>
          )
        })
      }
    </Menu>
  )
}
