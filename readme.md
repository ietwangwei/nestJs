# nestJs

###开发笔记
1. interces只是生命文件， 要使用service文件把他实例化为provider才能使用，这就是为什么之前会报index[0]哪个错误的原因了， 记住interface是ts的语法糖，在真正执行程序的时候ts会被编译器忽略掉，所以需要使用service把它翻译为provider文件，才能在controller里面作为注入依赖来使用
