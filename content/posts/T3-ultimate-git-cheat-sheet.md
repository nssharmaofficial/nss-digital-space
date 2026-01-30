---
id: 3
date: 2024-03-05
title: 'The Ultimate Git Cheat Sheet  for Collaboration🐱🔥'
shortTitle: 'Git Cheat Sheet for Collaboration'
template: post
thumbnail: '../thumbnails/git.png'
slug: git-ultimate-cheat-sheet
categories:
  - Technical
tags:
  - git
  - github
  - introduction
  - beginner
comments_off: true
description: Git Cheat Sheet for Collaboration
---

From basic operations like staging and committing changes to more advanced techniques for synchronizing with remote branches, this cheat sheet will help you to contribute effectively to any Git-based project 😌.

## Setting Up and Cloning

Cloning a repository is often the first step in the Git workflow for a developer. It provides you with a local copy of the project including all branches and history. You can experiment and make commits locally without affecting the central repository.

```terminal
git clone git@github.com:username/repository.git
```

## Basic Operations

### Checking Status 👀

```terminal
git status
```

* **Purpose**: Displays the state of the working directory and staging area.
* **Why it matters**: Lets you see which changes are staged, which are not, and which files aren't being tracked by Git.

### Reviewing Changes 🔍

```terminal
git diff
```

* **Purpose**: Shows the differences not yet staged.
* **Why it matters**: Before staging, you can review what changes are being made to ensure accuracy.

If you wish to revert all changes in a file, use:

```terminal
git restore <file>
```

### Staging Changes 📤

```terminal
git add <file>
```

* **Purpose**: Adds file changes to the staging area, preparing them for a commit.
* **Why it matters**: Enables selective staging of changes for better commit management.

If you wish to unstage a file without loosing the changes made in it use:

```terminal
git restore --staged <file>
```

### Committing Changes 📨

```terminal
git commit -m "message"
```

* **Purpose**: Saves your staged changes to the local repository along with a descriptive message.
* **Why it matters**: Captures a snapshot of your project's currently staged changes.

You can undo the commit by:

```terminal
git revert <commit>
```

However, if you want the previous commit to disappear from the history, do:

```terminal
git reset --hard <commit>
```

### Viewing Commit History 📜

```terminal
git log
```

* **Purpose**: Shows the commit history for the current branch.
* **Why it matters**: Allows you to review changes and navigate your project's development history.

## Branch Management

### Listing Branches 🌳

```terminal
git branch -a
```

* **Purpose**: Lists all local and remote branches in your repository.
* **Why it matters**: Helps you see all the current branches and manage them.

### Creating a Branch 🌱

```terminal
git branch <branch-name>
```

* **Purpose**: Creates a new branch.
* **Why it matters**: Allows parallel development by isolating work in separate branches.

### Switching Branches 🔀

```terminal
git checkout <branch-name>
```

* **Purpose**: Switches to another branch.
* **Why it matters**: Allows you to work on different parts of your project simultaneously.

You can create a new branch and switch there with one command:

```terminal
git checkout -b <new-branch>
```

Keep on mind that you can't switch branches with unsaved changes in the current branch. If you don't want to commit the files, you can use `git stash` to temporarily save them and then `git stash apply` to retrieve the most recent stashed changes.

### Merging Branches ⏭️

```terminal
git merge <branch-name>
```

* **Purpose**: Integrates changes from one branch into another.
* **Why it matters**: Combines separate lines of development, such as merging feature branches into the main branch.
* **Handling merge conflicts:** Manually edit conflicted files, then `git add <file>` to stage the resolved files, and `git commit` to complete the merge.

### Deleting a Branch 🗑️

```terminal
git branch -D <branch-name>
```

* **Purpose**: Deletes a local branch.
* **Why it matters**: Cleans up your repository by removing local branches that are no longer needed.

Use `git fetch --all --prune` to clean up old remote branches.

## Synchronizing with Remote Repositories

### Fetching Changes 🔛

```terminal
git fetch
```

* **Purpose**: Downloads content from a remote repository without merging it into your local repository.
* **Why it matters**: Lets you review changes before integrating them into your branch.

### Pulling Changes ⤵️

```terminal
git pull
```

* **Purpose**: Fetches changes from the remote repository and merges them into your current branch.
* **Why it matters**: Keeps your local repository up-to-date with the remote repository.

### Pushing Changes ⤴️

```terminal
git push origin <branch-name>
```

* **Purpose**: Updates the remote repository with your local changes.
* **Why it matters**: Shares your contributions with the team and updates the project on the remote server.

---

Remember, the key to master Git is practice 🤓. The more you use these commands and experiment with them, the more comfortable you get with Git 🧘🏻‍♀️.