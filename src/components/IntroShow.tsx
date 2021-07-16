import styles from '@/global.less';
import { showData } from '@/services/api';
import { Skeleton, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

export default function IntroShow($props: any) {
  const [title, setTitle] = useState(<Skeleton.Input active />);
  const [source, setSource] = useState(<Skeleton active />);
  useEffect(() => {
    const fetchSource = async () => {
      const data = await showData($props.type);
      console.log(data);
      setTitle(data['title']);
      setSource(<ReactMarkdown children={data['content']} />);
    };

    fetchSource();
  }, []);

  return (
    <Typography id={$props.type}>
      <Typography.Title>{title}</Typography.Title>
      <Typography.Paragraph
        style={{ textAlign: 'justify' }}
        className={styles.paragraph}
      >
        {source}
      </Typography.Paragraph>
    </Typography>
  );
}
