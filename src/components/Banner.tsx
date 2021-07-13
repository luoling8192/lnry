import { getBanner } from '@/services/api';
import styles from '@/styles/layout.less';
import { Carousel } from 'antd';
import React from 'react';

export default class Banner extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      banner_url: [
        'https://lc-gluttony.s3.amazonaws.com/GaPY9YzdWc2m/T8pQzgDqoJpdaqXcqlz5nVhNmNT8azDk/5820592a7090b.jpg',
      ],
    };
  }

  async componentDidMount() {
    const data = await getBanner();
    this.setState({ banner_url: data });
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
