本地文件夹上传到GitHub仓库 

1、在GitHub创建一个仓库，得到SSH地址 : `git@github.com:HzMayun/node.js.git`

git@github.com:nowLetsgo/nice0721.git



2、在本地文件夹 下   输入  

```   js
git  init      //初始化本地仓库 
git  git remote add origin git@github.com:HzMayun/node.js.git //连接到创建的GitHub仓库

git add .     //添加到暂存区
git commit .   //添加到本地仓库
git push -u  origin master  //添加到远程仓库   -u  第一次上传    origin ：远程仓库的别名 
```

