import scrollToAnchor from '@/scripts/scrollToAnchor';
import { getNews } from '@/services/api';
import { app } from '@/services/leancloud';
import styles from '@/styles/news.less';
import { history } from '@@/core/history';
import { CalendarOutlined, EyeOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Skeleton, Typography } from 'antd';
import React from 'react';
import ReactMarkdown from 'react-markdown';
// @ts-ignore
import Valine from 'valine';

export default class News extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      id: 1,
      title: <Skeleton active />,
      date: <Skeleton active />,
      author: <Skeleton active />,
      content: <Skeleton active />,
    };
  }

  async componentDidMount() {
    const data: any = await getNews(this.props.match.params.id);
    this.setState({
      id: data.objectId,
      title: data.title,
      date: data.createdAt.split('T')[0],
      author: data.author,
      content: <ReactMarkdown children={data.content} />,
    });

    // 开启评论功能
    new Valine({
      el: '#comments',
      appId: app.appId,
      appKey: app.appKey,
      visitor: true,
    });
  }

  render() {
    return (
      <div id={'news-detail'} style={{ position: 'relative' }}>
        <Breadcrumb className={styles.breadcrumb}>
          <Breadcrumb.Item>
            <a
              onClick={() => {
                history.push('/news');
                scrollToAnchor('news');
              }}
            >
              企业资讯
            </a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>{this.state.title}</Breadcrumb.Item>
        </Breadcrumb>
        <Typography className={styles.typography}>
          <Typography.Title>{this.state.title}</Typography.Title>
          <Typography.Text className={styles.explain}>
            <CalendarOutlined /> {this.state.date} &emsp;
            <UserOutlined /> {this.state.author} &emsp;
            <span
              id={window.location.pathname}
              className="leancloud_visitors"
              data-flag-title={this.state.title}
            >
              <EyeOutlined /> 阅读量：{' '}
              <span className="leancloud-visitors-count">200</span>
            </span>
          </Typography.Text>
          <Typography.Paragraph>{this.state.content}</Typography.Paragraph>
        </Typography>

        <div
          id={'comments'}
          style={{
            width: '80%',
            margin: '20% auto 0 auto',
          }}
        />
      </div>
    );
  }
}
