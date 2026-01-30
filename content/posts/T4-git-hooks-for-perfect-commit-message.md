---
id: 4
date: 2024-03-16
title: 'Git Hooks for Perfect Commit Message 🪝💌'
shortTitle: 'Git Hooks for Perfect Commit Message'
template: post
thumbnail: '../thumbnails/git.png'
slug: git-hooks-for-perfect-commit-message
categories:
  - Technical
tags:
  - git
  - github
  - tutorial
  - beginner
comments_off: true
description: Git Hooks for Perfect Commit Message
---

Ever scrolled through a Git repository's log and noticed how chaotic and unstructured the commit messages look? 😨 Writing a good commit message is often overlooked, but it significantly impacts the readability of your project.

A well written commit message is also a sign of respect to your colleagues and other developers as it saves time by trying to understand the context and purpose of changes 😌. These changes might seem simple to you at the moment of writing a commit message, but your future self and team will thank you if you take a moment to consider how you can make your commit message better, and you can use Git Hooks to help you with that.

## What Are Git Hooks? 🤔

Git hooks are scripts that Git executes before or after events. Think of them as customizable, automatic actions that occur at specific phases of the Git process.

There are two types of Git hooks:

1. **Client-side hooks**: These run on your local machine. They're useful for operations like committing and merging.
    
2. **Server-side hooks**: These run on the server. They're great for tasks that happen after pushing changes, like continuous integration checks.
    

## Structure of Commit Message 💌

To commit a message, the following command is used:

```terminal
git commit -m <subject line> -m <body>
```

Subject line is there to summarize the changes in short and informative manner while the body is there to describe the changes in more detail.

But how exactly should the subject line and body look like? 👀

### Subject Line

There are some conventions that are being used for the subject line, such as:

1. **Maximum 50 Characters Long**
2. **Start with Capital Letter**
3. **Remove Punctuation**
4. **Use Imperative**

### Body

There are some conventions that are being used for the subject line, such as:

1. **Wrap the Body at 72 Characters**
2. **Explain What and Why, Not How**
    

In most cases, you can leave out details about how a change has been made. Code should be self-explanatory in this regard. Focus on explaining the reasons why you made the change - the way things worked before the change (and what was wrong with that), the way they work now, and why you decided to solve it the way you did.

## Using Git Hooks for Commit Messages 🚀

To ensure every commit message follows your custom rules, you can use the `commit-msg` hook.

### **Setting Up** `commit-msg` Hook

1. Navigate to your Git repository on your local machine.
2. Find the `.git/hooks` directory
3. Create a new file named `commit-msg` (no file extension) in the `.git/hooks` directory.
4. Edit this file to define the rules for your commit messages. Here's an example of a script for enforcing perfect commit message format:
    

    ```bash
    #!/bin/sh

    INPUT_FILE="$1"
    TEMP_FILE=$(mktemp)

    {
        read -r subject
        echo "$subject" | fold -sw 50
        echo
        while IFS= read -r line; do
            echo "$line" | fold -sw 70
        done
    } < "$INPUT_FILE" > "$TEMP_FILE"

    mv "$TEMP_FILE" "$INPUT_FILE"
    ```

5. Make the script executable by running `chmod +x .git/hooks/commit-msg` from your terminal.
6. Congrats! This `commit-msg` will now be executed each time you commit a message.

**Here is the explanation of the script:**

```bash
INPUT_FILE="$1"
```

This line assigns the first argument passed to the script (`$1`) to a variable named `INPUT_FILE`. In the context of a `commit-msg` hook, this argument is the path to a temporary file that contains the commit message.
    

```bash
TEMP_FILE=$(mktemp)
```

This line creates a temporary file using `mktemp` command and assigns its path to the variable `TEMP_FILE`. This temporary file is used to store the formatted commit message before it's moved back to replace the original commit message.
    

```bash
    read -r subject
    echo "$subject" | fold -sw 50
```

This command reads the first line from the `INPUT_FILE` (which is the subject line of the commit message) and stores it in the variable `subject`.
    
Then it echoes the subject line and pipes it through `fold -sw 50`, which wraps the line at a maximum width of 50 characters. The `-s` flag causes `fold` to break lines at spaces (making the breaks occur between words when possible), and `-w 50` sets the wrap width.
    
The second `echo` command adds an empty line after the subject to separate the subject from the body of the commit message, adhering to good commit message practices.
    

```bash
    while IFS= read -r line; do
        echo "$line" | fold -sw 72
    done
```

Then starts a `while` loop that reads the rest of the commit message line by line. `IFS=` (Input Field Separator) is set to nothing to prevent leading/trailing whitespace from being trimmed. Inside the loop, each line of the commit message body is echoed and piped through `fold -sw 72` to wrap at 72 characters. The loop continues until all lines of the commit message have been processed.
    

```bash
{ ... } < "$INPUT_FILE" > "$TEMP_FILE"
```

The block is redirected to read from `INPUT_FILE` (the original commit message) and write the output (the formatted commit message) to `TEMP_FILE`.
    

```bash
mv "$TEMP_FILE" "$INPUT_FILE"
```

This command moves the `TEMP_FILE` (which now contains the formatted commit message) back to `INPUT_FILE`, effectively replacing the original commit message with the formatted one.
    

## Conclusion

Git hooks, specifically the `commit-msg` hook, offer a powerful way to enhance the quality of your project's commit messages. 💪🏻 You ensure consistency of your commit messages and also help your team and future self to understand the changes done in the code. Remember, great commit messages are a sign of a thoughtful developer. 🙌🏻