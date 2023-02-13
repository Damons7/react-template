import { BrowserRouter, Routes, Navigate, Route } from 'react-router-dom';

import { routers } from './routers';
function App() {
  // router配置
  const routerConfigs = routers.map((item: any) => {
    const { path, element } = item;
    return <Route key={path} path={path} element={element} />;
  });
  
  return (
    <BrowserRouter>
      <Routes>
        {routerConfigs}
        <Route path="/" element={<Navigate replace to="/index" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
