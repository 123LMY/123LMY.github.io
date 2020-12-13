$(function(){
  console.log(c) // underfine var 预解析（定义未赋值）
  var c = "c"
  console,log(d) //错误 let不存在变量提升
  let d='d'


})