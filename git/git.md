# Git

Git is a version control system. It is used to track changes in files and to collaborate with other developers.

Table of content

[Illustration](#illustration)

[Official documentation](#official-documentation)

[Installation](#installation)

* [Windows](#windows)

* [Mac](#mac)

* [Linux](#linux)

[Configuration](#configuration)

[Commands](#commands)

* [Clone a repository](#clone-a-repository)

* [Create a repository](#create-a-repository)

* [Add files to the staging area](#add-files-to-the-staging-area)

* [Commit changes](#commit-changes)

* [Sync with remote repository](#sync-with-remote-repository) 

* [Push changes](#push-changes)

* [Pull changes](#pull-changes)

* [Branches](#branches)

* [Commits](#commits)

* [Tags](#tags)

* [Rebase](#rebase)

* [Stash](#stash)

* [Diff](#diff)

* [Status](#status)

* [Clean](#clean)

* [Origin](#origin)

## Illustration

![Git illustration](https://git-scm.com/book/en/v2/images/areas.png)

## Official documentation

[Git documentation](https://git-scm.com/doc)

[Book](https://git-scm.com/book/en/v2)

[Reference](https://git-scm.com/docs)

## Installation

### Linux

```bash
sudo apt install git
```

### Windows

Download the installer from [git-scm.com](https://git-scm.com/download/win).

### Mac

Download the installer from [git-scm.com](https://git-scm.com/download/mac).

## Configuration

```bash
git config --global user.name "John Doe"
git config --global user.email "john.doe@example.com"
```

## Commands

### Clone a repository

```bash
# clone using SSH
git clone git@github.com:USER/REPOSITORY.git

# clone using HTTPS
git clone https://github.com/USER/REPOSITORY.git

# clone using Personnal Access Token
git clone https://TOKEN@github.com/USER/REPOSITORY.git
```

> Note: All provided examples use Github as a remote repository. You can use any other remote repository like Gitlab or Bitbucket.

### Create a new repository

```bash
# create a new directory
mkdir my-project
# go into the directory
cd my-project
# create some files
touch README.md
echo "# My Project" >> README.md
# initialize the repository
git init
```

### Add files to the staging area

```bash
# Add all files
git add .

# Add a specific file
git add file.txt
```

### Commit changes

```bash
git commit -m "Commit message"
```

### Sync with remote repository

```bash
git fetch
```

### Push changes

```bash
git push
```

### Pull changes

```bash
git pull
```

### Branches

Create new branch from the main

```bash
# checkout main
git checkout main
# ensure to be up to date
git pull
# create a new branch
git checkout -b branch-name
```

Switch to a branch

```bash
git checkout branch-name
```

Merge a branch

```bash
# let's suppose we are on the feat/my-feature branch
# checkout main
git checkout main
# ensure to be up to date
git pull
# merge the branch
git merge feat/my-feature
```

Delete a branch

```bash
git branch -d branch-name
```

List branches

```bash
git branch

# List remote branches
git branch -r

# List all branches
git branch -a
```

### Commits

List commits

```bash
# basic
git log

# List commits with diff
git log -p

# List commits with diff and stats
git log -p -stat

# List commits with diff and stats and graph
git log -p -stat --graph
```

Revert a commit

```bash
# Revert the last commit
git revert HEAD

# Revert a specific commit
git revert COMMIT_HASH
```

Reset a commit

> Warning: This command is destructive. It will remove all commits after the specified commit.

```bash
# Reset the last commit
git reset --hard HEAD

# Reset a specific commit
git reset --hard COMMIT_HASH
```

### Tags

```bash
# List tags
git tag

# Create a tag
git tag v1.0.0 -m "Version 1.0.0"

# Push a tag
git push origin v1.0.0
```

### Rebase

```bash
# Rebase the current branch on the main branch
git rebase main

# Squash 3 last commits into one
git rebase -i HEAD~3
```

### Stash

```bash
# Stash all changes
git stash

# Stash specific files
git stash push file1.txt file2.txt

# List stashes
git stash list

# Pop the last stash
git stash pop

# Apply a stash
git stash apply stash@{0}

# Delete a stash
git stash drop stash@{0}
```

### Diff

```bash
# Diff between the working directory and the staging area
git diff
```

### Status

```bash
# Show the status of the working directory
git status
```

### Clean

```bash
# Remove untracked files
git clean -f
```

### Origin

```bash
# Show the origin
git remote show origin

# Change the origin
git remote set-url origin NEW_URL
```