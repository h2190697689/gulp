const {src,dest,task}=require("gulp");
const path=require("path");
const babel=require("gulp-babel");
const uglify=require("gulp-uglify");

task("min",async()=>{
	await src("js/*.js")
	.pipe(babel())
	.pipe(dest("dest/js"))
})