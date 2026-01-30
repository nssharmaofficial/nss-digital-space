---
id: 2
date: 2024-03-03
title: 'Creating Your First GitHub Repository with SSH Authentication 🐱🔐'
shortTitle: 'Creating Your First GitHub Repo'
template: post
thumbnail: '../thumbnails/git.png'
slug: creating-first-github-repo
categories:
  - Technical
tags:
  - git
  - github
  - tutorial
  - beginner
comments_off: true
description: Creating Your First GitHub Repo
---

## Set up Git and GitHub

### 🚀 Install Git 

First things first, you need Git on your machine:

* **Windows**: [Download the Git installer](https://git-scm.com/downloads) from the official Git website and follow the installation prompts.
* **Linux**: Use your distribution's package manager with `sudo apt-get install git`

With Git installed, open a terminal and configure your user name and email address:

```bash
git config --global user.name "Your Name"
git config --global user.email "youremail@example.com"
```

### 🐱 Creating a GitHub account 

If you haven't already, head over to [GitHub](https://github.com/) and sign up.

## Link Git with GitHub 

To connect your local Git environment with GitHub, you can use HTTPS or SSH. While HTTPS is straightforward, SSH offers a more secure and convenient method of authentication.

### 🌐 HTTPS method 

HTTPS stands for Hypertext Transfer Protocol Secure. It is the protocol used for secure communication over the internet.

It does not need any additional configuration, so you can start using it immediately after setting up your Git and GitHub accounts. Another advantage is that it works in almost any network environment without needing special permissions.

However, it requires frequent authentication (entering your username and password) which can be cumbersome for those who plan to push to GitHub frequently.

### 🔐 SSH method 

SSH stands for Secure Shell. It is a protocol used for secure login and communication over an unsecured network. When using SSH with Git and GitHub, you create a pair of SSH keys (a public key and a private key) and add the public key to your GitHub account. This setup allows secure, password-less communication with GitHub.

It is secure and it is very convenient for frequent use as once set up, you don't need to enter your credentials again for every push or pull.

However, it some corporate restricted networks block SSH traffic, which could require additional configuration or switching to HTTPS.

> 🧠 HTTPS is user-friendly and easy to set up, making it a good choice for beginners or for those who don't use Git very frequently. SSH, while requiring a bit more initial setup, offers a more secure and convenient workflow for those who are frequently interacting with GitHub.

### 🗒️ Step-by-step guide to set up SSH keys 

1. **Open terminal:** [Git Bash](https://git-scm.com/downloads) on Windows or the default terminal on Linux
2. **Generate a new SSH key**: Enter the following command, replacing `your_email@example.com` with your GitHub email address:

    ```terminal
    ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
    ```

    When prompted to "Enter a file in which to save the key," press Enter to accept the default file location.

3. **Start the SSH agent**: Before adding your SSH key to the agent, ensure the ssh-agent is running by executing:

    ```terminal
    eval $(ssh-agent -s)
    ```

4. **Change the file permissions of the private key**: SSH requires that the private key file is not accessible by others for security reasons.

    ```terminal
    chmod 600 ~/.ssh/id_rsa
    ```

5. **Add your SSH key to the SSH agent**: Run the following command:

    ```terminal
    ssh-add ~/.ssh/id_rsa
    ```

6. **Copy the SSH key**: Run this code to display your SSH key in the terminal, which you can then manually copy.

    ```terminal
    cat ~/.ssh/id_rsa.pub
    ```

7. **Add Your SSH Key to GitHub**: Go to your GitHub account, navigate to Settings &gt; SSH and GPG keys &gt; New SSH key, paste your key into the field, give it a title, and click "Add SSH key."

## Creating your first repository 

1. **Log in to GitHub and create a new repository:**
2. **Push an existing repository from the command line:**

    * Open terminal and change the current working directory to your local project.
    * Initialize the local directory as a Git repository, if you haven't already:

        ```terminal
        git init
        ```

    * If you do not have any files in your project yet, you can add simple `README.md`:

        ```terminal
        echo "# Project Title" > README.md
        ```

    * Add the files in your new local repository. This stages them for the first commit:

        ```terminal
        git add .
        ```

    * Commit the files that you've staged in your local repository:

        ```terminal
        git commit -m "First commit"
        ```

    * Copy the SSH URL of your repository from GitHub, which looks like `git@github.com:username/repository-name.git`.
    * Add the URL as a remote repository for your project:

        ```terminal
        git remote add origin git@github.com:username/repository-name.git
        ```

    * Push the changes in your local repository to GitHub:

        ```terminal
        git push -u origin main
        ```

---

Now that you've set up SSH authorization and created your first repository, you can start collaborating on projects more securely and efficiently 💫.