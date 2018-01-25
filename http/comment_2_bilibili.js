var http = require('http')
var querystring = require('querystring')

var postData = querystring.stringify({
    oid:18604893,
    type:1,
    message: "我什么时候再能像你这样优秀",
    plat:1,
    jsonp:"jsonp",
    csrf:"bc8f9b9db58be2bb9a9e8175d1858eaa"
})

var options = {
    host: 'api.bilibili.com',
    post: 80,
    path: '/x/v2/reply/add',
    method: 'POST',
    headers: {
        "Accept":"application/json, text/javascript, */*; q=0.01",
        "Accept-Encoding":"gzip, deflate, br",
        "Accept-Language":"zh-CN,zh;q=0.9",
        "Connection":"keep-alive",
        "Content-Length":postData.length,
        "Content-Type":"application/x-www-form-urlencoded; charset=UTF-8",
        "Cookie":"finger=49387dad; LIVE_BUVID=AUTO2215168673808063; " +
        "sid=ct3nfyk4; purl_token=bilibili_1516867384; buvid3=14DB1B03-00DB-45E2-B474-36BFEFFE8E1131038infoc; " +
        "UM_distinctid=1612c5779ae286-0e075a3492a7a5-3a760e5d-1fa400-1612c5779af1c7; fts=1516867386; pgv_pvi=347385856; pgv_si=s8693184512;" +
        " DedeUserID=10033472; DedeUserID__ckMd5=24842ce42b784ef7; SESSDATA=1caae6d1%2C1519459440%2Cf05b4ea0; bili_jct=bc8f9b9db58be2bb9a9e8175d1858eaa; " +
        "_dfcaptcha=c83130909bb38717b092a5f30aaa8d1f",
        "Host":"api.bilibili.com",
        "Origin":"https://www.bilibili.com",
        "Referer":"https://www.bilibili.com/video/av18604893/?spm_id_from=333.334.chief_recommend.21",
        "User-Agent":"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36"
    }
}

var req = http.request(options, function (res) {
    console.log('Status Code: ' + res.statusCode)
    console.log('headers: ' + res.headers)
    res.on('data', function (chunk) {
        console.log(typeof chunk)
        console.log(Buffer.isBuffer(chunk))
    })

    res.on('end', function () {
        console.log('评论成功!')
    })
})

req.on('error', function (err) {
    console.log('Error: ' + err.message)
})
setInterval(function () {
    req.write(postData)
}, 5000)