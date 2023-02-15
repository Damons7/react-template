import React from 'react';
import { Layout } from 'antd';

import  './index.less'

const {  Footer:AntdFooter} = Layout;

export const Footer: React.FC = () => (
  <AntdFooter className="layout-footer">Footer</AntdFooter>
);

export default Footer;
