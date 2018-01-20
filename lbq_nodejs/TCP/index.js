var net = require('net');
var count = 0,
    users = {};

net.createServer(function (connect) {
    connect.write('\n > welcome to \033[92mnode-chat\033[39m!'
        + '\n > ' + count + ' other people are connected at this time'
        + '\n > please write your name and press enter: '
    );
    count++;
    connect.on('close', function () {
        count--;
        delete users[nickname];
        broadcase('\033[90m > ' + nickname + ' left the room\033[39m\n');
    });
    connect.setEncoding('utf8');

    var nickname;
    connect.on('data', function (data) {
        // process.stdout.write(data);
        data = data.replace('\r\n', '');
        if(!nickname){  ////设置昵称
            if(users[data]){
                connect.write('\033[93m> nickname already in use. try again:\033[39m');
                return;
            }else{
                nickname = data;
                users[nickname] = connect;
            }
            broadcase('\033[90m > '+nickname+' joined the room\033[39m\n');
        }else{
            broadcase('\033[96m > ' + nickname + ':\033[39m ' + data + '\n', true);
        }
    });
    function broadcase(msg, exceptMyself) {
        for(var i in users){
            if(!exceptMyself || i !== nickname){
                users[i].write(msg);
            }
        }
    }
    console.log('\033[90m   new connection!\033[39m');
}).listen(3000, function () {
    console.log('\033[96m   server listening on *:3000\033[39m');
});