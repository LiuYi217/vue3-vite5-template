// test.ts

import * as path from 'path'
import * as fs from 'fs'
import { MockMethod, MockConfig } from 'vite-plugin-mock'
export default [
  {
    url: '/api/get',
    method: 'get',
    response: ({ query }) => {
      return {
        code: 0,
        data: {
          name: 'vben'
        }
      }
    }
  },
  {
    url: '/api/post',
    method: 'post',
    timeout: 2000,
    response: {
      code: 0,
      data: {
        name: 'vben'
      }
    }
  },
  {
    url: '/api/text',
    method: 'get',
    // mock 一个静态资源服务
    rawResponse: async (req, res) => {
      const imagePath = path.join(__dirname, 'scene.jpg')
      console.log(imagePath)
      fs.readFile(imagePath, (err, data) => {
        if (err) {
          res.statusCode = 500
          res.setHeader('Content-Type', 'text/plain')
          res.end('error: unable to read Image')
        } else {
          res.statusCode = 200
          res.setHeader('Content-Type', 'image/jpeg')
          res.end(data)
        }
      })
    }
  }
] as MockMethod[]
