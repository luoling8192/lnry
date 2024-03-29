import ProductViewer from '@/components/ProductViewer';
import { getProduct } from '@/services/api';
import productStyles from '@/styles/productView.less';
import { Carousel, Col, Image, Pagination, Row, Typography } from 'antd';
import React from 'react';

class MobileProductShow extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      list: [],
    };
  }

  async componentDidMount() {
    this.setState({
      list: await getProduct(),
    });
  }

  render() {
    return (
      <Typography id={'show'}>
        <Typography.Title>产品展示</Typography.Title>
        <Carousel autoplay>
          {this.state.list &&
            this.state.list.length > 0 &&
            this.state.list.map(($data: any) => (
              <img key={$data.id} src={$data.url} alt={$data.title} />
            ))}
        </Carousel>
      </Typography>
    );
  }
}

class DesktopProductShow extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    const pageSize = 4;
    this.state = {
      current: 1,
      pageSize: pageSize,
      minValue: 0,
      maxValue: pageSize,
      showList: [],
    };
  }

  async componentDidMount() {
    // @ts-ignore
    const pageSize = Math.floor(
      document.getElementById('container').offsetWidth / 320,
    );
    this.setState({ pageSize: pageSize, maxValue: pageSize });

    const data = await getProduct();
    this.setState({
      showList: data,
    });
  }

  handleChange = ($value: number) => {
    if ($value <= 1) {
      this.setState({
        minValue: 0,
        maxValue: this.state.pageSize,
      });
    } else {
      this.setState({
        minValue: ($value - 1) * this.state.pageSize,
        maxValue: $value * this.state.pageSize,
      });
    }
  };

  render() {
    return (
      <Typography id={'show'}>
        <Typography.Title>产品展示</Typography.Title>
        <Row
          className={productStyles.productView}
          id={'container'}
          justify="center"
        >
          <Image.PreviewGroup>
            {this.state.showList &&
              this.state.showList.length > 0 &&
              this.state.showList
                .slice(this.state.minValue, this.state.maxValue)
                .map(($data: any) => (
                  <Col span={6}>
                    <ProductViewer
                      key={$data.objectId}
                      filename={$data.url}
                      description={$data.title}
                    />
                  </Col>
                ))}
          </Image.PreviewGroup>
        </Row>

        <Pagination
          defaultCurrent={this.state.current}
          pageSize={this.state.pageSize}
          total={this.state.showList.length}
          hideOnSinglePage={true}
          onChange={this.handleChange}
        />
      </Typography>
    );
  }
}

export default class ProductShow extends React.Component<any, any> {
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
      <MobileProductShow />
    ) : (
      <DesktopProductShow />
    );
  }
}
