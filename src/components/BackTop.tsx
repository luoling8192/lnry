import React from 'react';
import { BackTop as AntBackTop } from 'antd';
import styles from '@/styles/layout.less';

export default class BackTop extends React.Component {
  render = () => (
    <AntBackTop duration={0}>
      <div className={styles.backTop}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
          <title>回到顶部</title>
          <rect width="48" height="48" rx="24" ry="24" fill="#ef4136" />
          <path
            d="M31.71,26.3l-7-7a1,1,0,0,0-1.4,0l-7,7a1,1,0,0,0,1.4,1.4L24,21.39l6.31,6.31a1,1,0,0,0,1.4-1.4Z"
            fill="#fff"
            fillRule="evenodd"
          ></path>
        </svg>
      </div>
    </AntBackTop>
  );
}
