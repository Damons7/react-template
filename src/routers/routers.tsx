import { Index, Mine } from '@/pages';

//路由配置
const routers = [
  /* *************** 我的 ************* */
  {
    path: '/mine',
    name: 'mine',
    element:<Mine/>
  },

  /* ***************首页************* */
  {
    path: '/index',
    name: 'index',
    element:<Index />
  }
];

export default routers;
