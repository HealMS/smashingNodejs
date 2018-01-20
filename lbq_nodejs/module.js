// var fs = require('fs');
// fs.readFile('./Error.js', function (err, content) {
//     if(!err){
//         console.log(content.toString());
//     }else{
//         console.error(err);
//     }
// });

module.exports = Person;
function Person(name) {
    this.name = name;
}
Person.prototype.talk = function () {
    console.log('我的名字是' + this.name);
};