import styles from '@/global.less';

// @ts-ignore
import { getLocation } from '@/scripts/getLocation';
import transPostalCode from '@/scripts/transPostalCode';
import { getCaptcha, getProduct, postTry } from '@/services/api';
import {
  Button,
  Cascader,
  Col,
  Form,
  FormInstance,
  Input,
  Modal,
  Row,
  Select,
  Typography,
} from 'antd';
import React from 'react';

export default class TryPage extends React.Component<any, any> {
  formRef = React.createRef<FormInstance>();

  constructor(props: any) {
    super(props);
    this.state = {
      captcha: {},
      productOption: undefined,
    };
  }

  genNewCaptcha = async () => {
    const captcha = await getCaptcha();
    this.setState({ captcha: captcha });
  };

  async componentDidMount() {
    await this.genNewCaptcha();

    const product = await getProduct();
    const productOption = product.map(($keys: any) => (
      <Select.Option key={$keys.objectId} value={$keys.objectId}>
        {$keys.title}
      </Select.Option>
    ));

    this.setState({ productOption: productOption });
  }

  onFinish = async (values: any) => {
    this.state.captcha
      .verify(values.captcha)
      .then(async () => {
        try {
          const productName = (await getProduct(values['flavor']))['title'];
          const address = await transPostalCode(values['address1']);

          postTry({
            name: values['name'],
            phoneNumber: parseInt(values['phoneNumber']),
            flavor: productName,
            address1: address,
            address2: values['address2'],
          }).then(
            ($obj: any) => {
              Modal.success({
                content: '提交成功 :)',
              });

              this.formRef.current!.resetFields();
              return true;
            },
            ($err) => {
              Modal.error({
                title: '提交失败 :(',
                content: $err,
              });

              return false;
            },
          );
        } catch (e) {
          alert(e);
        }
      })
      .catch(() => {
        Modal.error({
          title: '提交失败 :(',
          content: '验证码错误',
        });

        return false;
      });
  };

  render() {
    return (
      <Typography id={'try'}>
        <Typography.Title>申请试喝</Typography.Title>
        <Form
          name={'form'}
          ref={this.formRef}
          layout={'vertical'}
          className={styles.form}
          onFinish={this.onFinish}
        >
          <Form.Item name={'name'} label={'姓名'} rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item
            name={'phoneNumber'}
            label={'手机号'}
            rules={[
              { required: true },
              {
                pattern: /^1[3-9][0-9]\d{8}$/,
                message: '请输入正确的手机号',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={'flavor'}
            label={'口味'}
            rules={[{ required: true, message: '请选择口味' }]}
          >
            <Select>{this.state.productOption}</Select>
          </Form.Item>
          <Form.Item label={'地址'}>
            <Row>
              <Col span={8}>
                <Form.Item
                  name={'address1'}
                  rules={[{ required: true, message: '请选择行政地址' }]}
                >
                  <Cascader options={getLocation()} />
                </Form.Item>
              </Col>
              <Col span={16}>
                <Form.Item name={'address2'}>
                  <Input />
                </Form.Item>
              </Col>
            </Row>
          </Form.Item>
          <Form.Item label={'验证码'}>
            <Row>
              <Col>
                <Form.Item
                  name={'captcha'}
                  rules={[{ required: true, message: '请输入验证码' }]}
                >
                  <Input autoComplete="off" />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col>
                <img
                  src={this.state.captcha.url}
                  width={'100px'}
                  alt={'captcha'}
                  onClick={this.genNewCaptcha}
                />
              </Col>
            </Row>
          </Form.Item>
          <Form.Item style={{ textAlign: 'right' }}>
            <Button type="primary" htmlType="submit">
              提交
            </Button>
          </Form.Item>
        </Form>
      </Typography>
    );
  }
}
