import React from 'react';
import { ConfigProvider } from 'antd';
import styles from '@/styles/layout.less';
import Menu from '@/components/Menu';
import BackTop from '@/components/BackTop';
import zh_CN from 'antd/es/locale/zh_CN';
import moment from 'moment';
import 'antd/es/config-provider/style';
import 'moment/locale/zh-cn';
import Banner from '@/components/Banner';
import initLeanCloud from '@/services/leancloud';

moment.locale('zh-cn');

window.onscroll = () => {
  // TODO: 修复无效bug
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
    initLeanCloud();
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
