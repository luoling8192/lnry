import { getBanner } from '@/services/api';
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
      screen_width: window.innerWidth,
      breakpoint: 1024,
    };
  }

  async componentDidMount() {
    window.addEventListener('resize', this.handleWindowResize);
    const data = await getBanner(
      this.state.screen_width < this.state.breakpoint,
    );
    this.setState({ banner_url: data });
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
