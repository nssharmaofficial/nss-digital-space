# Installation and deploy guide

### Step 1: Install NVM (Node Version Manager)

To manage different versions of `Node.js`, isntall NVM:

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
```

After installation, load NVM into your shell

```
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```

To verify that NVM is installed correctly:

```
command -v nvm
```

### Step 2: Install `Node.js`

Use NVM to install the latest LTS (Long Term Support) version of `Node.js`:

```
nvm install --lts
```

Check that `Node.js` and `npm` are installed:

```
node -v
npm -v
```

### Step 3: Install prerequisities

Before running the project, you'll need to install some global dependencies:

- **Yarn**: a package manager
  ```
  npm install -g yarn
  yarn -v
  ```
- **Gatsby CLI**: a command-line tool for Gatsby
  ```
  npm install -g gatsby-cli
  gatsby -v
  ```
- **Linux build dependencies**: required to compile some packages (like `sharp`)

  ```
  sudo apt-get update
  sudo apt-get install -y build-essential libcairo2-dev libjpeg-dev libpango1.0-dev libgif-dev librsvg2-dev libvips-dev
  vips --version
  ```

### Step 4: Install project dependencies

Once the prerequisites are installed, install the project dependencies:

```
yarn install
```

### Step 5: Load content

The content for this site is stored in a separate private repository. You will need to add it as a submodule.

1. **Add the submodule**
    ```
    git submodule add https://github.com/your-username/your-private-repo.git content
    ```

1. **Initialize and update the submodule**
    ```
    git submodule init
    git submodule update
    ```

Don't forget to update the URL in the `.gitmodules` file if needed.

The structure of the repository is:

```
content
├── .github/workflows
├── pages
|     └── me.md
|     └── resume.md
├── posts
|     └── post.md
├── thumbnails
└── projectsList.js
```

#### `me.md`

Has structure:

```
---
title: Your Name
slug: me
template: page
---

The markdown.
```

#### `resume.md`

Has structure:

```
---
title: Your Name
slug: resume
template: page
---

The markdown.
```

#### `post.md`

Has structure:

```
---
id: 1
date: 2023-07-24
title: 'Title'
shortTitle: 'shortTitle'
template: post
slug: post1
categories:
  - Personal
tags:
  - life
comments_off: false
description: What its about
---

The markdown.
```

#### `projectsList.js`

Has structure:

```js
export const projectsList = [
  {
    name: 'title-to-appear',
    date: '2024',
    slug: 'github-repo-name',
    tagline: 'What it is about',
    highlight: true,
  },
]
```

### Step 6: Start the development server

To start the development server and view your site locally:

```
gatsby develop
```

Your site will be running at http://localhost:8000.

### Step 7: Prepare for deployment

#### Change your site name

Modify [`gatsby-config.js`](/gatsby-config.js) file to update your site URL:

```
siteUrl: 'https://www.your-site.netlify.app'
```

#### Configure netlify for deployment

1. **Create a Netlify account**: if you don't have one already, create an account at [Netlify](https://app.netlify.com/teams/nssharmaofficial).
1. **Generate an SSH deploy key**: generate this key on Netlify.
1. **Add the deploy key to your content repository**: in your GitHub account, go to `Settings` > `SSH and GPC keys` and add the key.
1. **Create a new site**: in Netlify, create a new site from your Git repository.
1. **Deploy the site**: click "Deploy site" and your site will go live.

### Step 8: Automate updates

To automatically update your website when you push new content to your private repository, set up a GitHub Action in your private repo.

1. **Create a workflow file**: In your private repo, add `.github/workflows/update-website-repo.yml`:

    ```
    name: Update Website Repository on Content Commit

    on:
      push:
        branches:
          - main

    jobs:
      update-website-repo:
        runs-on: ubuntu-latest

        steps:
          - name: Checkout Content Repository
            uses: actions/checkout@v3
            with:
              token: ${{ secrets.GITHUB_TOKEN }}

          - name: Checkout Website Repository
            uses: actions/checkout@v3
            with:
              repository: username/repo
              token: ${{ secrets.WEBSITE_REPO_ACCESS_TOKEN }}
              submodules: true
              path: content

          - name: Configure Git Identity
            run: |
              git config --global user.email "your@email"
              git config --global user.name "Your Name"
              git config --global user.username "username"

          - name: Update Submodule in Website Repository
            run: |
              cd content
              git submodule update --remote
              git add content
              git commit -m "Update submodule with new content" || echo "No changes to commit"
              git push origin main || echo "Nothing to push"
    ```

2. **Generate personal access token**: go to [GitHub Personal Access Tokens](https://github.com/settings/tokens) and generate a new token.
3. **Add the token as a secret**: In your private content repo, go to `Settings` > `Secrets` and add a new secret named `WEBSITE_REPO_ACCESS_TOKEN` with your token.

Now, whenever you push changes to your private content repository, the website will update automatically, and Netlify will trigger a new build.