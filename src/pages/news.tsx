import styles from '@/global.less';
import { getNews } from '@/services/api';
import { history } from 'umi';
import { List, Skeleton, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import scrollToAnchor from '@/scripts/scrollToAnchor';

export default function NewsShow() {
  const [source, setSource] = useState([<Skeleton active />]);
  useEffect(() => {
    const fetchSource = async () => {
      const data = (await getNews()).map(($key: any) => (
        <a
          onClick={() => {
            history.push('news/' + $key.objectId);
            scrollToAnchor('news-detail', 200);
          }}
        >
          {$key.title}
        </a>
      ));

      setSource(data);
    };

    fetchSource();
  }, []);

  return (
    <Typography id={'news'}>
      <Typography.Title>企业资讯</Typography.Title>
      <List
        itemLayout="vertical"
        size="large"
        dataSource={source}
        pagination={{
          pageSize: 10,
        }}
        renderItem={(item: any) => (
          <List.Item className={styles.paragraph}>{item}</List.Item>
        )}
      />
    </Typography>
  );
}
