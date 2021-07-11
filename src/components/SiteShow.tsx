import styles from '@/global.less';
import { Typography, Skeleton } from 'antd';
import React, { useEffect, useState } from 'react';
import { showData } from '@/services/api';
import ReactMarkdown from 'react-markdown';

export default function SiteShow() {
  const [source, setSource] = useState(<Skeleton active />);
  useEffect(() => {
    const fetchSource = async () => {
      const data = (await showData('site'))['content'];
      setSource(<ReactMarkdown children={data} />);
    };

    fetchSource();
  }, []);

  return (
    <Typography id={'site'}>
      <Typography.Title>配送站点</Typography.Title>
      <Typography.Paragraph
        style={{ textAlign: 'justify' }}
        className={styles.paragraph}
      >
        {source}
      </Typography.Paragraph>
    </Typography>
  );
}
