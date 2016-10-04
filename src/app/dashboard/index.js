import React from 'react'
import { NavBar, Icon } from 'antd-mobile'

module.exports = class extends React.Component {
  render() {
    return <div>
      <header>
        <NavBar iconName="home" rightContent={[<Icon key="1" type="search" />]}>
          首页
        </NavBar>
      </header>
      <section>
        首页
      </section>
    </div>
  }
}
