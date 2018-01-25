var http = require('http')
var querystring = require('querystring')

var postData = querystring.stringify({
    "content": '一起期待下一期的课程',
    "cid": 348
})

var options = {
    hostname: 'www.imooc.com',
    post: 80,
    path: '/course/document',
    method: 'POST',
    headers:{
        "Accept":"application/json, text/javascript, */*; q=0.01",
        "Accept-Encoding":"gzip, deflate, br",
        "Accept-Language":"zh-CN,zh;q=0.9",
        "Connection":"keep-alive",
        "Content-Length":postData.length,
        "Content-Type":"application/x-www-form-urlencoded; charset=UTF-8",
        "Cookie":"imooc_uuid=786f9474-c5d2-4b1c-a4d2-073c125f7e5b; imooc_isnew_ct=1516598838; last_login_username=linxiaoxng%40qq.com; PHPSESSID=lstppuc1kk2ohvgc2jchcakuf7; imooc_isnew=2; IMCDNS=0; loginstate=1; apsid=YyNGRlMDM2OTk4MmNlMWNjMzRiMjYwMjM4OGU1ZDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANTAwOTcwNAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABsaW54aWFveG5nQHFxLmNvbQAAAAAAAAAAAAAAAAAAAGM4NDk0NjllNzVlOTE5YzMyOGExOTEzZGMyMDgzMDA5zYBpWs2AaVo%3DOT; Hm_lvt_f0cfcccd7b1393990c78efdeebff3968=1516608886,1516784965,1516797655,1516863748; Hm_lpvt_f0cfcccd7b1393990c78efdeebff3968=1516863757; cvde=5a684d42e6f17-114",
        "Host":"www.imooc.com",
        "Origin":"https://www.imooc.com",
        "Referer":"https://www.imooc.com/comment/348",
        "User-Agent":"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36",
        "X-Requested-With":"XMLHttpRequest"
    }
}


var req = http.request(options, function (res) {
    console.log('Status Code: ' + res.statusCode)
    console.log('headers: ' + JSON.stringify(res.headers))

    res.on('data', function (chunk) {
        console.log(chunk)
        console.log(Buffer.isBuffer(chunk))
        console.log(typeof chunk)
    })

    res.on('end', function () {
        console.log('评论完毕!')
    })

})

req.on('error', function (err) {
    console.log('Error: ' + err.message)
})
req.write(postData)
req.end()