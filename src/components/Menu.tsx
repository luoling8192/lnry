import { ReactComponent as Logo } from '@/assets/logo.svg';
import scrollToAnchor from '@/scripts/scrollToAnchor';
import styles from '@/styles/layout.less';
import mobileStyles from '@/styles/mobileMenu.less';
import { Menu as AntMenu } from 'antd';
import { Icon, NavBar } from 'antd-mobile';
import React from 'react';
import { history } from 'umi';

const menu = require('@/config/menu.json');

class MobileComponent extends React.Component<any, any> {
  state = {
    open: false,
  };

  onOpenChange = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    let menu_list = Object.keys(menu).map(($val: any) => (
      <AntMenu.Item key={$val}>
        <a
          key={$val}
          onClick={() => {
            history.push(menu[$val].url);
            scrollToAnchor(menu[$val].hash);
            this.onOpenChange();
          }}
        >
          {menu[$val].title}
        </a>
      </AntMenu.Item>
    ));

    return (
      <div>
        <NavBar
          mode="light"
          icon={<Icon type="ellipsis" onClick={this.onOpenChange} />}
          className={mobileStyles.navbar}
        >
          岭南乳业
        </NavBar>
        <div
          className={mobileStyles.drawer}
          style={{ display: this.state.open ? 'block' : 'none' }}
        >
          <AntMenu>{menu_list}</AntMenu>
        </div>
      </div>
    );
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
