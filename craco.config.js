/************************* craco相关插件 start *************************/
// craco-less 配置less module
const CracoLessPlugin = require('craco-less');
// // craco-antd 配置antd按需加载
// const CracoAntDesignPlugin = require('craco-antd');
/************************* craco相关插件 end *************************/

/************************* webpack相关插件 end *************************/
// 打包进度条显示
const SimpleProgressWebpackPlugin = require('simple-progress-webpack-plugin');
/************************* webpack相关插件 end *************************/

const path = require('path')

module.exports = {
  plugins: [
    { plugin: CracoLessPlugin },
    // {
    //   plugin: CracoAntDesignPlugin,
    //   options: {
    //     // 自定义主题
    //     customizeTheme: {
    //       // '@primary-color': '#1DA57A'
    //     }
    //   }
    // }
  ],
  babel: {
    plugins: [
      // 配置 babel-plugin-import
      [
        'import',
        {
          libraryName: 'antd',
          libraryDirectory: 'es',
          style: true  // 设置为true则支持less
        },
        'antd'
      ]
    ]
  },
  webpack: {
    // 设置别名
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      '@images': path.resolve(__dirname, ".", 'src/assets/images'),
      '@icons': path.resolve(__dirname,  ".",'src/assets/images/icons'),
    },
    extensions: ['.ts', '.js'],
    // webpack插件
    plugins: {
      add: [new SimpleProgressWebpackPlugin()]
    }
  },
  devServer: {}
};
