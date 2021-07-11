import { showData } from '@/services/api';
import React, { useEffect, useState } from 'react';
import { Typography, Form, Input, Cascader, Select, Button, Image } from 'antd';
import ReactMarkdown from 'react-markdown';
//import gfm from "remark-gfm";

// @ts-ignore
import { getLocation } from '@/scripts/getLocation';

export default function JoinPage() {
  const [source, setSource] = useState('Loading...');
  useEffect(() => {
    const fetchSource = async () => {
      // @ts-ignore
      setSource((await showData('join'))['content']);
    };

    fetchSource();
    console.log(source);
  }, []);

  return (
    <Typography id={'join'}>
      <Typography.Title>加入我们</Typography.Title>
      <ReactMarkdown children={source} />

      <Typography.Title>在线投递</Typography.Title>
      <Form layout={'vertical'} style={{ width: '70%', margin: '0 auto' }}>
        <Form.Item name="name" label={'姓名'}>
          <Input />
        </Form.Item>
        <Form.Item name="phoneNumber" label={'手机号'}>
          <Input />
        </Form.Item>
        <Form.Item name="job" label={'岗位'}>
          <Select defaultValue={'partner'}>
            <Select.Option value={'partner'}>羊奶合伙人</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item name="address" label={'地址'}>
          <Cascader options={getLocation()} />
        </Form.Item>
        <Form.Item name="CAPTCHA" label={'验证码'}>
          <Image />
          <Input />
        </Form.Item>
        <Form.Item style={{ textAlign: 'right' }}>
          <Button>提交</Button>
        </Form.Item>
      </Form>
    </Typography>
  );
}
