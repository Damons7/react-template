import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import './index.less'

export const Mine = () => {
  const navigate = useNavigate();
  const handleOnClick = () => {
    navigate(-1);
  };
  return (
    <div className="mine">
      我的页面
      <Button onClick={handleOnClick}>返回上一页</Button>
    </div>
  );
};

export default Mine;
