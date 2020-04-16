/*
 * @Author: alkun bigzjk@163.com
 * @Date: 2020-04-16 14:41:00
 * @LastEditTime: 2020-04-16 16:42:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \fastify-api\src\app.ts
 */
// 加载框架并新建实例
import * as fastify from 'fastify';
import controller from './controller'

const app = fastify.default({
  logger: false,
  modifyCoreObjects: true
});

app.register(controller)

app.listen(3000, err => {
  if (err) {
    console.log('❌ Error: ', err);
    process.exit(1)
  }
  console.log('👾 Server Started on port - 3000 👾');
})