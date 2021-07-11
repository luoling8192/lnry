import styles from '@/global.less';
import { Typography, Skeleton } from 'antd';
import React, { useEffect, useState } from 'react';
import { showData } from '@/services/api';
import ReactMarkdown from 'react-markdown';

export default function AboutShow() {
  const [source, setSource] = useState(<Skeleton active />);
  useEffect(() => {
    const fetchSource = async () => {
      const data = (await showData('about'))['content'];
      // @ts-ignore
      setSource(<ReactMarkdown children={data} />);
    };

    fetchSource();
  }, []);

  return (
    <Typography id={'about'}>
      <Typography.Title>关于我们</Typography.Title>
      <Typography.Paragraph
        style={{ textAlign: 'justify' }}
        className={styles.paragraph}
      >
        {source}
      </Typography.Paragraph>
    </Typography>
  );
}
