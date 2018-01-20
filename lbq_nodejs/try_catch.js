function a() {
    var b = 5;
    try{
        b();
    }catch(e){
        e instanceof Error;
    }
    console.log('you get here!');  ////无try catch该行不执行
}
a();

function b() {
    console.log(this.hello === 'world');
}
var c = b.bind({hello: 'world'});
c();