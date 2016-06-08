"use strict";
var gulp=require("gulp");
var ex=require("./gulp-file-extract.js");

gulp.task("default",function(){
    gulp.src("src/views/*.ejs")
        .pipe(ex())
        .pipe(gulp.dest("dest/views/"));
});