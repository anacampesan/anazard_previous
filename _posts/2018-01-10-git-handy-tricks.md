---
layout: post
comments: true
title: "[GIT] Handy tricks"
tags: [git, tricks, development]
img: ['git.png']
excerpt_separator: <!--more-->
---

What's up, everyone? Happy new year, before I forget! :) Long time no post, eh? I've been on a trip to Brazil for the holidays, but that's not the subject today. Let's get on to a couple handy git tricks I used quite often these days.

### Reverting the current branch to a specific commit

Committed anything by mistake and want to rollback?

```
git reset --hard <commit_sha>
```

### Copying files across branches

Use this in case you have new files that have been committed, and you also want them to be in another branch without having to merge it with a pull request, for example. On the desired branch do the following:

```
git checkout <branch_where_files_are> -- <file_relative_path>
```

I will keep updating this post over time.