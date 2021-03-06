var fs = require('fs');
var stdin = process.stdin,
    stdout = process.stdout;
fs.readdir(process.cwd(), function (err, files) {
    console.log('');

    if(!files.length){
        return console.log('    \033[31m No files to show!\033[39m\n');
    }

    console.log('   Select which files or directory you want to see\n');
    var stats = [];
    function file(i) {
        var filename = files[i];

        fs.stat(__dirname + '/' + filename, function (err, stat) {
            stats[i] = stat;

            if(!stat.isDirectory()){
                console.log('   '+i+'   \033[36m'+filename+'\033[39m');
            }else{
                console.log('   '+i+'   \033[90m'+filename+'\033[39m');
            }

            i++;
            if(i === files.length){
                read();
            }else{
                file(i);
            }
        });
    }
    function read() {
        console.log('');
        stdout.write('  \033[33mEnter your choice：\033[39m');
        stdin.resume();
        stdin.setEncoding('utf8');
        stdin.on('data', option);
    }
    function option(data) {
        if(!files[Number(data)]){
            stdout.write('  \033[31mEnter your choice: \033[39m');
        }else{
            stdin.pause();
            if(stats[Number(data)].isDirectory){
                fs.readdir(__dirname+'/'+ files[Number(data)], function (err, files) {
                    console.log('');
                    console.log('   ('+files.length+' files)');
                    files.forEach(function (file) {
                        console.log('   - '+file);
                    });
                    console.log('');
                });
            }else{
                fs.readFile('./'+files[Number(data)],'utf8', function (err, data) {
                    console.log('');
                    console.log('\033[90m'+ data.replace(/(.*)/g, '  $1') + '\033[39m');
                });
            }
        }
    }

    file(0);
});
