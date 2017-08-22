const http = require('http')
const fs = require('fs')
const cheerio = require('cheerio')
const request = require('request')

let url = 'xxx' // 入口链接
let count = 0 // 记录扒取的图片数量
let imgName = 0 // 图片名
let i = 0 // 图片位置记号
let imgDirName = '' // 图片存放的目录
let limit = 20 // 用来限制扒取图片数量

function start(url) {

    // 利用http模块发起依次get请求
    http.get(url, (res) => {
        let html = '' // 存放当前页面的html代码
        res.setEncoding('utf-8') // 设置编码

        // 接受到数据时，将收到的数据拼接到上面定义的html变量中，接收完成后即得到该页完整的html代码
        res.on('data', (data) => {
            html += data
        })

        // 等待数据接收完成（html拼接完成）后
        res.on('end', (err) => {
            if (err) {
                console.log(err)
            } else {
                const $ = cheerio.load(html) // 利用cheerio模块将完整的html装载到变量$中

                i++
                // 获取图片的地址和名称
                let imgSrc = $('.post img').eq(i).attr('src')

                console.log(imgSrc)

                // 利用request模块保存图片
                imgName++
                request(imgSrc).pipe(fs.createWriteStream('./img/' + imgName + '.jpg'))
                count++
                console.log('已爬取图片' + count + '张')

                // 获取下一张图片的链接
                let nextLink = 'xxx'
                if (nextLink && (count < limit)) {
                    start(nextLink)
                }
            }
        })
    })
}
start(url)



