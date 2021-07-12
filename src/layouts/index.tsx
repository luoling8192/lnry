import BackTop from '@/components/BackTop';
import Banner from '@/components/Banner';
import Menu from '@/components/Menu';
import initLeanCloud from '@/services/leancloud';
import styles from '@/styles/layout.less';
import { ConfigProvider } from 'antd';
import 'antd/es/config-provider/style';
import zh_CN from 'antd/es/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import React from 'react';

moment.locale('zh-cn');

window.onscroll = () => {
  const $ = require('jquery');
  let t = document.documentElement.scrollTop || document.body.scrollTop;
  if (t > 0) {
    $(`.${styles.box}`).addClass(styles.boxScroll);
  } else {
    $(`.${styles.box}`).removeClass(styles.boxScroll);
  }
};

export default class Layout extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    initLeanCloud(); // TODO: 修复重复调用bug
  }

  render() {
    return (
      <ConfigProvider locale={zh_CN}>
        <div className={'layout'}>
          <header className={styles.header}>
            <Menu />
          </header>

          <div id={'index'} />

          <Banner />

          <BackTop />

          <div className={styles.content}>{this.props.children}</div>

          <footer className={styles.footer}>
            <span>©2021 岭南乳业 版权所有</span>
            <span>热线电话：0769-86293169</span>
            <span id="busuanzi_container_site_pv">
              本站总访问量
              <a id="busuanzi_value_site_pv">2124</a>次
            </span>
          </footer>
        </div>
      </ConfigProvider>
    );
  }
}
