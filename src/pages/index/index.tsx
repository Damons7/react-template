// // 测试图片显示以及路径别名
// import errorIcon from '@icons/error.png';
// import { Button } from 'antd';
// import { useNavigate } from 'react-router-dom';

// export const Index = () => {
//   const navigate = useNavigate();

//   const handleOnClick = () => {
//     navigate('/mine');
//   };
//   return (
//     <div className="App">
//       首页
//       <img src={errorIcon} alt="" />
//       <Button onClick={handleOnClick}>跳转Mine</Button>
//     </div>
//   );
// };

// export default Index;

import React from 'react';
import { Space } from 'antd';
import { Header, Footer, Content } from '@/layout';
import { Layout } from 'antd';

export const Index: React.FC = () => (
  <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
    <Layout>
      <Header />
      <Content />
      <Footer />
    </Layout>
  </Space>
);

export default Index;
