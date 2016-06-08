var th=require("through2");
var File=require("vinyl");
module.exports=function(){
    return th.obj(function(file,enc,cb){
        this.push(file);
        var f2=file.clone();
        var f3=file.clone();
        console.log(f2);
        console.log(f3.contents.buffer);
        ArrayBuffer

        //var source = file.contents.toString('utf8');
        //console.log(file.contents);
        //console.log(JSON.stringify(file));
        cb();
    });
};