(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{591:function(t,a,s){"use strict";s.r(a);var e=s(2),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"前言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),s("p",[t._v("最近在学习微服务系统.基本都是docker容器化"),s("br"),t._v("\n还有许多中间件的安装")]),t._v(" "),s("ul",[s("li",[t._v("消息中间件RabbitMq、RocketMq")]),t._v(" "),s("li",[t._v("分布式事务zk、Redis")])]),t._v(" "),s("p",[t._v("所以打算在电脑装个虚拟机运行Linux系统"),s("br"),t._v("\n最后选择用CentOs8.0系统")]),t._v(" "),s("h2",{attrs:{id:"环境搭建"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#环境搭建"}},[t._v("#")]),t._v(" 环境搭建")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("名称")]),t._v(" "),s("th",[t._v("说明")]),t._v(" "),s("th",[t._v("下载链接")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("VirtualBox")]),t._v(" "),s("td",[t._v("Oracle虚拟机")]),t._v(" "),s("td",[t._v("https://www.virtualbox.org/wiki/Downloads")])]),t._v(" "),s("tr",[s("td",[t._v("Centos8.8.1.1911")]),t._v(" "),s("td",[t._v("Linux系统版本")]),t._v(" "),s("td",[t._v("http://mirrors.aliyun.com/centos/8.1.1911/isos/x86_64/")])]),t._v(" "),s("tr",[s("td",[t._v("Redis")]),t._v(" "),s("td",[t._v("缓存中间件")]),t._v(" "),s("td",[t._v("http://download.redis.io/releases/redis-5.0.8.tar.gz")])]),t._v(" "),s("tr",[s("td",[t._v("RocketMq")]),t._v(" "),s("td",[t._v("消息队列中间件")]),t._v(" "),s("td")])])]),t._v(" "),s("h2",{attrs:{id:"系统设置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#系统设置"}},[t._v("#")]),t._v(" 系统设置")]),t._v(" "),s("h3",{attrs:{id:"关闭图形资源"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#关闭图形资源"}},[t._v("#")]),t._v(" 关闭图形资源")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("init "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#暂时关闭")]),t._v("\nsystemctl set-default mutil-user.target "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#设置默认，重启生效")]),t._v("\n")])])]),s("h3",{attrs:{id:"设置阿里镜像源"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#设置阿里镜像源"}},[t._v("#")]),t._v(" 设置阿里镜像源")]),t._v(" "),s("h4",{attrs:{id:"备份"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#备份"}},[t._v("#")]),t._v(" 备份")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mv")]),t._v(" /etc/yum.repos.d/CentOS-Base.repo /etc/yum.repos.d/CentOS-Base.repo.backup\n")])])]),s("h4",{attrs:{id:"下载新centos-base-repo到-etc-yum-repos-d"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#下载新centos-base-repo到-etc-yum-repos-d"}},[t._v("#")]),t._v(" 下载新CentOS-Base.repo到/etc/yum.repos.d/")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" -O /etc/yum.repos.d/CentOS-Base.repo http://mirrors.aliyun.com/repo/Centos-8.repo\n")])])]),s("h4",{attrs:{id:"运行yum-makecache-生成缓存"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#运行yum-makecache-生成缓存"}},[t._v("#")]),t._v(" 运行yum makecache 生成缓存")]),t._v(" "),s("h3",{attrs:{id:"安装docker容器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装docker容器"}},[t._v("#")]),t._v(" 安装docker容器")]),t._v(" "),s("div",{staticClass:"custom-block danger"},[s("p",[t._v("centos7.X的安装方式会失败")])]),t._v(" "),s("h4",{attrs:{id:"卸载旧版本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#卸载旧版本"}},[t._v("#")]),t._v(" 卸载旧版本")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("yum remove docker  docker-common docker-selinux docker-engine\n")])])]),s("h4",{attrs:{id:"安装依赖"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装依赖"}},[t._v("#")]),t._v(" 安装依赖")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("yum "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -y yum-utils  device-mapper-persistent-data  lvm2\n\nyum-config-manager  --add-repo   https://download.docker.com/linux/centos/docker-ce.repo\n\nyum "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" https://download.docker.com/linux/fedora/30/x86_64/stable/Packages/containerd.io-1.2.6-3.3.fc30.x86_64.rpm\n\nyum "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" docker-ce docker-ce-cli containerd.io\n")])])]),s("h4",{attrs:{id:"启动docker"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#启动docker"}},[t._v("#")]),t._v(" 启动docker")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("systemctl start docker\n")])])]),s("h4",{attrs:{id:"查看版本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看版本"}},[t._v("#")]),t._v(" 查看版本")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("docker --version\n")])])]),s("h4",{attrs:{id:"开机自启"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开机自启"}},[t._v("#")]),t._v(" 开机自启")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("systemctl "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("enable")]),t._v(" docker\n")])])]),s("h3",{attrs:{id:"安装node"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装node"}},[t._v("#")]),t._v(" 安装node")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#下载")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -L https://nodejs.org/dist/v12.18.3/node-v12.18.3-linux-x64.tar.xz -o /home/tool/node-v12.18.3.tar.xz\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" -xvf node-v12.18.3.tar.xz\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mv")]),t._v(" node-v12.18.3/ /usr/local/nodejs\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 返回根目录并添加以下jdk环境变量")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" ~\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("vim")]),t._v(" +  ./.bashrc\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 更新环境变量")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("source")]),t._v(" ~/.bashrc\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#查看版本")]),t._v("\nnode -v\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" -v\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("node环境变量")]),t._v(" "),s("p",[t._v("export PATH=$PATH:/usr/local/nodejs/bin")])]),t._v(" "),s("h2",{attrs:{id:"参考文献"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[t._v("#")]),t._v(" 参考文献")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://www.cnblogs.com/zhaoyanhaoBlog/p/12118473.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("CentOS7设置阿里镜像教程"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://developer.aliyun.com/mirror/centos?spm=a2c6h.13651102.0.0.3e221b11QPgwkB",target:"_blank",rel:"noopener noreferrer"}},[t._v("阿里Centos镜像设置"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://www.cnblogs.com/beyang/p/8513215.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("centos图形界面的开启和关闭"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://www.cnblogs.com/yadongliang/p/12535004.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("centos8 安装 docker"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://www.runoob.com/docker/centos-docker-install.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("CentOS Docker 安装"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://www.cnblogs.com/zhi-leaf/p/10979629.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("CentOS Nodejs 安装"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://www.cnblogs.com/fuqiang88/p/11426804.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("修改Nodejs内置的npm默认配置路径方法"),s("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=r.exports}}]);