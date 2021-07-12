import styles from '@/styles/layout.less';
import { Carousel } from 'antd';
import React from 'react';

export default class Banner extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      banner_url: [
        'https://lc-gluttony.s3.amazonaws.com/GaPY9YzdWc2m/7dFypF8bugbr7u8qNwwbtejb5bYaPSGX/banner2.jpg',
      ],
    };
  }

  render() {
    const banner = this.state.banner_url.map(($key: any) => {
      return (
        <div key={$key}>
          <img src={$key} alt={'Banner'} />
        </div>
      );
    });

    return (
      <div className={styles.carousel}>
        <Carousel autoplay>{banner}</Carousel>
      </div>
    );
  }
}
