# Git



## 1、分布式版本控制工具

像SVN这种集中式版本控制工具，用单一服务器保存文件的各种版本。

Git作为分布式版本控制工具，客户端对远程库代码提取相当于把代码库完整地备份下来，在本地进行版本控制。



![image-20210724195600303](/Users/huanglongzhan/Library/Application Support/typora-user-images/image-20210724195600303.png)



## 2、Git的工作机制

![image-20210724202528260](/Users/huanglongzhan/Library/Application Support/typora-user-images/image-20210724202528260.png)

工作区：工程目录

在工作区和暂存区都不会生成版本，commit后版本就生成了 





### 3、设置用户签名

可以随便填user和邮箱，存在本地.gitconfig用来确定是谁commit，与GitHub账号无关





### 4、初始化本地库

git init



### 5、查看本地库状态

git status



### 6、添加暂存区

git add hello.txt,将hello.txt添加到暂存区

暂存区的文件可以删除，使用git rm --cached hello.txt,将文件移除暂存区。此时文件仍在工作区。



注意：

untrack ：表示是新文件，没有被add过，是为跟踪的意思。

not staged ：表示add过的文件，即跟踪文件，再次修改没有add，就是没有暂存的意思





使用git restore --staged <文件名>取消暂存区的修改，文件的修改会回到工作区。



### 7、提交到本地库

git commit -m “commit message”

可以使用git log和git reflog查看版本的详情





### 8、版本穿梭

git切换版本，其实是Head指针发生移动

git reset --hard 454545（版本号）    此时指针指向对应454545版本





### 9、分支

分支实际上是移动HEAD指针，创建分支就是多创建一个指针

git branch -v     查看分支详情

git branch demobranch   创建分支

git checkout demobranch   切换分支

git merge 即将合入的分支     合并分支



head指针指向分支，而分支指针指向具体版本



### 10、冲突

当merge时，同一文件的同一位置都发生了修改，会merge失败

需手动解决冲突

然后git add

然后commit







### 11、远程库

git remote -v 查看远程库别名

![image-20210725011007274](/Users/huanglongzhan/Library/Application Support/typora-user-images/image-20210725011007274.png)

此时表示，origin为远程库的别名



若git remote -v为空，即没有关联远程库，此时需要git remote add 别名 远程库地址

如git remote add origin https://github.com/juaneboosham/Front-end-basic-skills.git





### 12、推送本地库到远程库

git push origin main   向远程库推送main分支





### 13、拉取远程库

git pull <远程库> <远程分支>

常用：git pull origin master

等价于git fetch origin master，git merge FETCH_HEAD。



git pull就是只是git pull <远程仓库名> <当前分支名>的缩写



### 14、克隆远程库

在公共库克隆时，不需要任何验证

克隆时相当于进行了①拉取代码②初始化本地库③创建别名





### 15、远程Git使用Reset回滚后，其他人如何做到本地与线上代码同步

https://blog.csdn.net/qqHJQS/article/details/107704328

