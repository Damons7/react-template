// 测试图片显示以及路径别名
import errorIcon from '@icons/error.png';
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';

export const Mine = () => {
  const navigate = useNavigate();
  const handleOnClick = () => {
    navigate(-1);
  };
  return (
    <div className="App">
      我的页面
      <img src={errorIcon} alt="" />
      <Button onClick={handleOnClick}>返回上一页</Button>
    </div>
  );
};

export default Mine;
