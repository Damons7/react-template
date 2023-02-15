import React from 'react';
import { Layout } from 'antd';
import  './index.less'

const { Header: AntdHeader } = Layout;

export const Header: React.FC = () => (
  <AntdHeader className="layout-header">Header</AntdHeader>
);

export default Header;
