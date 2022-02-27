# nginx

## 1、基本概念

Nginx是一个高性能的HTTP和反向代理服务器。

有占用内存少，并发能力强的特点。

Nginx为性能优化而开发。





## 2、反向代理

用户请求反向代理服务器，反向代理服务器去选择目标服务器获取数据后，返回给用户。

用户对反向代理无感知，认为反向代理服务器和目标服务器就是一个服务器。

此时服务器对外只是暴露了代理服务器的ip地址，隐藏了真实服务器的ip地址。



## 3、负载均衡

高并发下，原先请求集中到单个服务器上，服务器容易崩溃。

而负载均衡是，采用多台服务器，将负载分发到不同的服务器上。





## 4、动静分离

把动态请求和静态请求分开

 将静态资源和动态资源分离，放在不同服务器上，降低单个服务器的压力。







## 5、常用命令

在nginx目录下运行

```
查看版本号
nginx -v

快速停止
nginx -s stop

重新加载nginx
nginx -s reload
```







## 6、配置文件nginx.conf

```
-----------全局块开始，主要是nginx的整体配置--------------------------
#user  nobody;
worker_processes  1;    ----------------值越大，支持的并发处理量越多

#error_log  logs/error.log;
#error_log  logs/error.log  notice;
#error_log  logs/error.log  info;

#pid        logs/nginx.pid;
--------------------------全局块结束-------------------------------



-----------event块开始，主要影响nginx服务器与用户的网络连接-------------
events {
    worker_connections  1024;     -----------支持的最大连接数
}
--------------------------event块结束-------------------------------


--------------------------http块开始-------------------------------
http {
    include       mime.types;
    default_type  application/octet-stream;

    #log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
    #                  '$status $body_bytes_sent "$http_referer" '
    #                  '"$http_user_agent" "$http_x_forwarded_for"';

    #access_log  logs/access.log  main;

    sendfile        on;
    #tcp_nopush     on;

    #keepalive_timeout  0;
    keepalive_timeout  65;

    #gzip  on;

    server {
        listen       80;
        server_name  localhost;

        #charset koi8-r;

        #access_log  logs/host.access.log  main;

        location / {
            root   html;
            index  index.html index.htm;
        }

        #error_page  404              /404.html;

        # redirect server error pages to the static page /50x.html
        #
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }

        # proxy the PHP scripts to Apache listening on 127.0.0.1:80
        #
        #location ~ \.php$ {
        #    proxy_pass   http://127.0.0.1;
        #}

        # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000
        #
        #location ~ \.php$ {
        #    root           html;
        #    fastcgi_pass   127.0.0.1:9000;
        #    fastcgi_index  index.php;
        #    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;
        #    include        fastcgi_params;
        #}

        # deny access to .htaccess files, if Apache's document root
        # concurs with nginx's one
        #
        #location ~ /\.ht {
        #    deny  all;
        #}
    }


    # another virtual host using mix of IP-, name-, and port-based configuration
    #
    #server {
    #    listen       8000;
    #    listen       somename:8080;
    #    server_name  somename  alias  another.alias;

    #    location / {
    #        root   html;
    #        index  index.html index.htm;
    #    }
    #}


    # HTTPS server
    #
    #server {
    #    listen       443 ssl;
    #    server_name  localhost;

    #    ssl_certificate      cert.pem;
    #    ssl_certificate_key  cert.key;

    #    ssl_session_cache    shared:SSL:1m;
    #    ssl_session_timeout  5m;

    #    ssl_ciphers  HIGH:!aNULL:!MD5;
    #    ssl_prefer_server_ciphers  on;

    #    location / {
    #        root   html;
    #        index  index.html index.htm;
    #    }
    #}
}
--------------------------http块结束-------------------------------
```

location匹配规则：https://segmentfault.com/a/1190000013267839



## 7、nginx配置高可用集群