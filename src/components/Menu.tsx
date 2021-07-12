import React from 'react';
import { Menu as AntMenu } from 'antd';
import { ReactComponent as Logo } from '../assets/logo.svg';
import styles from '@/styles/layout.less';
import { history } from 'umi';
import { Drawer, NavBar, Icon, List } from 'antd-mobile';
import scrollToAnchor from '@/scripts/scrollToAnchor';

const menu = require('@/config/menu.json');

class MobileComponent extends React.Component<any, any> {
  render() {
    let menu_list = Object.keys(menu).map(($val: any) => (
      <List.Item key={$val}>
        <a
          onClick={() => {
            history.push(menu[$val].url);
            scrollToAnchor(menu[$val].hash);
          }}
        >
          {menu[$val].title}
        </a>
      </List.Item>
    ));

    // TODO: 适配移动端菜单
    return <div/>;
  }
}

class DesktopComponent extends React.Component<any, any> {
  render() {
    let menu_list = Object.keys(menu).map(($val: any) => (
      <AntMenu.Item key={$val} id={`menu_${$val}`}>
        <a
          onClick={() => {
            history.push(menu[$val].url);
            scrollToAnchor(menu[$val].hash);
          }}
        >
          {menu[$val].title}
        </a>
      </AntMenu.Item>
    ));

    return (
      <div className={styles.box}>
        <Logo className={styles.logo} />
        <AntMenu mode={'horizontal'} className={styles.menu}>
          {menu_list}
        </AntMenu>
      </div>
    );
  }
}

export default class Menu extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      screen_width: window.innerWidth,
      breakpoint: 1024,
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleWindowResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowResize);
  }

  handleWindowResize = () => {
    this.setState({
      screen_width: window.innerWidth,
    });
  };

  render() {
    return this.state.screen_width < this.state.breakpoint ? (
      <MobileComponent />
    ) : (
      <DesktopComponent />
    );
  }
}
