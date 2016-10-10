'use strict';
/**
 * db config
 * @type {Object}
 */
export default {
    type: 'mongo',//数据库类型
    log_sql: true, //是否记录执行的 sql 语句
    log_connect: true, //是否记录数据库连接信息
    cache: { // 数据库查询缓存配置
        on: true,
        type: "",
        timeout: 3600
    },
    adapter: {
        mysql: {},
        mongo: {
            host: '127.0.0.1',//数据库host
            port: '27017',//端口
            name: 'test101',//数据库
            user: 'king',//帐号
            password: '',//密码
            prefix: '',//前缀
            encoding: 'utf8',//编码
        }
    }
};