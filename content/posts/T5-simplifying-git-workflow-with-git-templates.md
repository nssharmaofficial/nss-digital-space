---
id: 5
date: 2024-03-31
title: 'Simplifying Your Git Workflow with Git Templates 🗂️🐱'
shortTitle: 'Simplifying Your Git Workflow with Git Templates'
template: post
thumbnail: '../thumbnails/git.png'
slug: simplifying-git-workflow-with-git-templates
categories:
  - Technical
tags:
  - git
  - github
  - tutorial
  - beginner
comments_off: true
description: Simplifying Your Git Workflow with Git Templates
---

Git is incredibly flexible for managing code repositories, but setting up each project consistently can be a hassle, especially when you’re working on multiple projects 😪. That’s where Git templates come in handy 🥳. They let you pre-define a bunch of settings and scripts, so every new project starts off on the right foot . Let’s break down what Git templates are, why they’re super useful, and how you can set up your own.

## What is a Git Template? 🤔

Think of a Git template as a starter pack for your projects. It’s a folder where you stash away all the settings, hooks and other files you want every new project to have.

## Why Use Git Templates? 👀

Git templates can make your life a lot easier for a few reasons:

* **Consistency**: They make sure every project starts with the same settings and scripts, cutting down on confusion and mistakes.
* **Saves time**: They automate setting up hooks and other configurations, so you don’t have to do it manually every time.
* **Customizable**: They let you and your team set specific rules and workflows right from the start, like making sure commit messages follow a certain format or automatically checking code quality.

## Setting Up Your Own Git Template 🚀

Here’s how to create a `git_template` directory that’ll act as your go-to template for new projects.

### Step 1: Create Your Template Directory

First, make a folder called `git_template`. This is where you’ll keep all your custom settings and scripts.

### Step 2: Adding Hooks

Hooks are scripts that run automatically during different parts of the Git process. To add a hook:

1. Drop your script files into `~/git_template/hooks`.
2. Make sure they’re executable with `chmod +x ~/git_template/hooks/*`.

For instance, a `pre-commit` hook could check your code style automatically before you commit. You can check an example of `pre-commit` in my previous article [Git Hooks for Perfect Commit Message](https://nssharma.hashnode.dev/git-hooks-for-perfect-commit-message) 💌.

### Step 3: Custom Configuration

Next, set up a `config` file in your template directory to specify things like the default branch name or handy aliases:

```plaintext
[init]
    defaultBranch = main
[pull]
    rebase = true
[alias]
    co = checkout
    br = branch
    ci = commit
    st = status
```

### Step 4: Create the `.gitignore` File

Create a `.gitignore` file in your template directory to keep unwanted files out of your projects. Here’s an example for basic Python projects:.

```.gitignore
# Byte-compiled / optimized / DLL files
__pycache__/
*.py[cod]
*$py.class

# Jupyter Notebook
.ipynb_checkpoints

# Environments
.env
```

### Step 5: Add Project Description

Write a brief description of your repository in a file named `description`.

```plaintext
"Template-based Project Repository"
```

## Using Your Git Template 💫

### During `git init`

To start a new project with your template, just use the `--template` option with `git init`:

```terminal
git init --template=~/git_template new_project
```

This command initializes `new_project`, applying your custom hooks and configurations.

### Adding to an Existing Project

Got an already started project? No problem. Just manually copy over the hooks, configurations, and `.gitignore` file from your template.

### Setting Up Globally

If you want all your projects to automatically use this template, tell Git to set it globally:

```terminal
git config --global init.templateDir '~/git_template'
```

Now, every time you run `git init`, your custom template will be used automatically.

And if you ever need to go back to the default setup, just run:

```terminal
git config --global --unset init.templateDir
```

## Conclusion

Git templates are a game-changer for keeping your projects organized and reducing setup time. By walking through the setup process once and applying it to future projects, you’re free to concentrate on what matters most: your work. So give Git templates a try, and take your development process to the next level!