/*
 * @Author: your name
 * @Date: 2020-04-16 15:53:31
 * @LastEditTime: 2020-04-16 16:46:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \fastify-api\src\controller\index.ts
 */
import fs from 'fs'
function routes(fastify, options) {
    const opts = {
        schema: {
            response: {
                200: {
                    type: 'object',
                    properties: {
                        hello: { type: 'string' }
                    }
                }
            }
        }
    }

    fastify.get('/', opts, async (request, reply) => {
        console.log(request.ip)
        console.log(request.ips)
        console.log(request.hostname)
        return { hello: 'world' }
    })

}

export default routes