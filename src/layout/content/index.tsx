import React from 'react';
import { Layout } from 'antd';

import  './index.less'

const {  Content:AntdContent } = Layout;

export const Content: React.FC = () => (
  <AntdContent className="layout-content">Content</AntdContent>
);

export default Content;
