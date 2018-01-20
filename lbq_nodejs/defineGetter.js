Date.prototype.__defineGetter__('now', function () {
    return new Date().getTime();
});
Date.prototype.__defineSetter__('now', function (time) {
    return new Date(time);
});
var a = new Date();
a.now = '12/12/1990';
console.log(a.now);

