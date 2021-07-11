import { Result, Button } from 'antd';
import { Link } from 'umi';

export default function Page404() {
  return (
    <Result
      status="404"
      title="404"
      subTitle="对不起，你访问的页面不存在"
      extra={
        <Button type="primary">
          <Link to={'/'}>返回首页</Link>
        </Button>
      }
    />
  );
}
