import { getCaptcha, getProduct } from '@/services/api';
import React, { useEffect, useState } from 'react';
import {
  Button,
  Cascader,
  Form,
  Image,
  Input,
  Typography,
  Modal,
  Select,
} from 'antd';
import styles from '@/global.less';

// @ts-ignore
import { getLocation } from '@/scripts/getLocation';

function submit() {
  alert('ok');
}

const onFinish = (values: any) => {
  Modal.success({
    content: '提交成功 :)',
  });
};

const onFinishFailed = (errorInfo: any) => {
  Modal.error({
    title: '提交失败 :(',
    content: errorInfo,
  });
};

export default function TryPage() {
  const [captcha, setCaptcha] = useState('');
  const [product, setProduct] = useState();
  useEffect(() => {
    const fetchCaptcha = async () => {
      const data = await getCaptcha();
      setCaptcha(data.url);
    };

    fetchCaptcha();
  }, []);

  useEffect(() => {
    const fetchProduct = async () => {
      const data = (await getProduct()).map(($keys: any) => (
        <Select.Option key={$keys.objectId} value={$keys.objectId}>
          {$keys.title}
        </Select.Option>
      ));

      setProduct(data);
    };

    fetchProduct();
  }, []);

  // TODO: 完成提交逻辑
  return (
    <Typography id={'try'}>
      <Typography.Title>申请试喝</Typography.Title>
      <Form
        name={'form'}
        layout={'vertical'}
        className={styles.form}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
      >
        <Form.Item name={'name'} label={'姓名'} rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item
          name={'phoneNumber'}
          label={'手机号'}
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item name={'flavor'} label={'口味'} rules={[{ required: true }]}>
          <Select>{product}</Select>
        </Form.Item>
        <Form.Item name={'address'} label={'地址'} rules={[{ required: true }]}>
          <Input.Group compact>
            <Cascader options={getLocation()} style={{ width: '30%' }} />
            <Input style={{ width: '70%' }} />
          </Input.Group>
        </Form.Item>
        <Form.Item
          name={'CAPTCHA'}
          label={'验证码'}
          rules={[{ required: true }]}
        >
          <Input style={{ width: '30%' }} />
          <Image src={captcha} width={'100px'} style={{ display: 'block' }} />
        </Form.Item>
        <Form.Item style={{ textAlign: 'right' }}>
          <Button type="primary" htmlType="submit" onClick={submit}>
            提交
          </Button>
        </Form.Item>
      </Form>
    </Typography>
  );
}
