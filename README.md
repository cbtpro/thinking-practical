# 运行Python服务器
### Python 2.x
```shell
python -m SimpleHTTPServer 8888 &
```
### Python 3.x
```shell
python -m http.server 8888 &
```
注意：请在cmd中运行命令，如果提示`不允许使用与号(&)。& 运算符是为将来使用而保留的；请用双引号将与号引起来("&")，以将其作为字符串的一部分传递。`，请将命令后面的`&`符号删除后执行。