Title: Git 的基本操作
Date: 2019-01-04 17:54
tags: Git


一句话摘要。

<!-- more -->

![](https://yxrct-1253965369.cos.ap-guangzhou.myqcloud.com/user/006yNh9ngy1fwspq1rn9sj30xq0b4q47.jpg)

---

## Git 常用配置命令

| 作用                 | 命令                                          |
| -------------------- | --------------------------------------------- |
| 列出当前配置         | `git config --list`                           |
| 列出 Repository 配置 | `git config --local --list`                   |
| 列出全局配置         | `git config --global --list`                  |
| 列出系统配置         | `git config --system --list`                  |
| 配置用户名           | `git config --global user.name "xxx"`         |
| 配置用户邮箱         | `git config --global user.email "xxx@xx.com"` |



---

## 工作区 常用操作命令

| 作用                                             | 命令                          |
| ------------------------------------------------ | ----------------------------- |
| 新建仓库                                         | `git init`                    |
| 克隆仓库                                         | `git clone <url> [rename]`    |
| 提交工作区所有文件到暂存区                       | `git add .` 或者 `git add -A` |
| 提交工作区中指定文件到暂存区                     | `git add <file1> <file2> ...` |
| 提交工作区中某个文件夹中所有文件到暂存区         | `git add [dir]`               |
| 删除工作区文件，并且也从暂存区删除对应文件的记录 | `git rm <file1> <file2>`      |
| 从暂存区中删除文件，但工作区依然还有该文件       | `git rm --cached <file>`      |
| 取消暂存区已经暂存的文件                         | `git reset HEAD <file>...`    |
| 撤销上一次对文件的操作                           | `git checkout --<file>`       |
| 隐藏当前变更，以便能够切换分支                   | `git stash`                   |
| 查看当前所有的储藏                               | `git stash list`              |
| 查询当前工作区所有文件的状态                     | `git status`                  |

---

## 暂存区 常用操作命令

| 作用                                           | 命令                            |
| ---------------------------------------------- | ------------------------------- |
| 将暂存区中的文件提交到本地仓库中，即打上新版本 | `git commit -m "提交信息"`      |
| 撤销上一次提交                                 | `git commit --amend`            |
| 列出现在所有的标签                             | `git tag`                       |
| 创建一个轻量级标签                             | `git tag v1.0.0`                |
| 将标签推送到远程仓库                           | `git push origin v1.0.0`        |
| 将本地所有的标签全部推送到远程仓库             | `git push origin --tags`        |
| 创建分支                                       | `git branch <branch-name>`      |
| 切换分支                                       | `git checkout <branch-name>`    |
| 新建并切换到新建分支                           | `git checkout -b <branch-name>` |
| 删除分支                                       | `git branch -d <branch-name>`   |
| 将当前分支与指定分支进行合并                   | `git merge <branch-name>`       |
| 显示本地仓库的所有分支                         | `git branch`                    |

---

## 本地仓库 常用操作命令

| 作用                                 | 命令                                   |
| ------------------------------------ | -------------------------------------- |
| 查看本地仓库关联的远程仓库           | `git remote`                           |
| 添加远程仓库                         | `git remote add [remote-name] [url]`   |
| 从远程仓库中抓取本地仓库中没有的更新 | `git fetch [remote-name]`              |
| 将本地仓库某分支推送到远程仓库上     | `git push [remote-name] [branch-name]` |
| 移除远程仓库                         | `git remote rm [remote-name]`          |

-----

## 忽略文件 .gitignore

```cmd
*.css            # 忽略所有 .css 结尾的文件
!index.css       # 但 index.css 除外
/index.js        # 仅忽略根目录下的 index.js 文件，不包括 other/index.js
build/           # 忽略 build 目录下的所有文件
static/*.html    # 忽略 static/index.html 但不包括 static/other/index.html
static/**/*.html # 忽略 static 目录下所有扩展名为 html 的文件
```



---
## FAQ

Q：

A：

---

## 总结

---

## 参考与致谢
* []()
* []()
* []()

---