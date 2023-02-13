// 测试图片显示以及路径别名
import errorIcon from '@icons/error.png';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

export const Index = () => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate('/mine');
  };
  return (
    <div className="App">
      首页
      <img src={errorIcon} alt="" />
      <Button onClick={handleOnClick}>跳转Mine</Button>
    </div>
  );
};

export default Index;
