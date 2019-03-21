import ApiPath from './apiPath.json'
import Mock from 'mockjs'
Mock.mock(ApiPath.user.getUserInfo, "get", {
    "code": 0,
    "data": {
      "fullName": "@CNAME", // 随机生成中文人名
      "userId": 1000234234001,
      "username": "zhangsan"
    },
    "msg": "success"
})
