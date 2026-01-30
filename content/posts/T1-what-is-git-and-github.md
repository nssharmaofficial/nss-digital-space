---
id: 1
date: 2024-02-25
title: 'What is Git and GitHub 🤔'
shortTitle: 'What is Git and GitHub'
template: post
thumbnail: '../thumbnails/git.png'
slug: what-is-git-and-github
categories:
  - Technical
tags:
  - git
  - introduction
  - beginner
comments_off: true
description: What is Git and GitHub
---

Before starting with Git and GitHub, first you have to understand about Version Control Systems.

## Introduction to Version Control Systems

A version control system records the changes made to our code over time in a special database called repository. We can see **who** has made **what** changes, **when** and **why**. Also, if we screw something up we can easily revert our project back to an earlier state 🙌. Without a version control system we would have to constantly store copies of the entire project in various folders 😫. This is very slow and doesn't scale at all especially if multiple people have to work on the same project.

> 🧠 With a version control system we can track our project history and work together on the same project effectively

Version control system falls into three categories: local, centralized and distributed.

### Local Version Control Systems (LVCS)

LVCS keeps patch sets (differences between files) in a special format on disk. By adding up all the patches it can then re-create what any file looked like at any point in time.

The main problem with this is that everything is stored locally. If anything were to happen to the local database, all the patches would be lost.

> 🧠 LVCS are good when you work on the project alone but there is a risk of loosing the entire project with its history.

### Centralized Version Control Systems (CVCS)

In CVCS all team members connect to a central server to get the latest copy of the code and to share their changes with others. Developers can simultaneously access files on the server, pull them to their local computer or push them onto the server from their local computer. This way, everyone usually knows what everyone else on the project is doing.

The problem with the centralized architecture is that if the server goes offline we cannot collaborate or save snapshots of our project so we have to wait until the server comes back online. Also, if anything happens to the central database and the backups were not done, you lose the entire history of the project except whatever single snapshots developers happen to have on their local machines.

> 🧠 CVCS are straightforward for project collaboration but risky due to their reliance on a single server, which can be a critical issue if the server goes down or becomes corrupted.

### Distributed Version Control Systems

In distributed systems we don't have these problems. Every developer has a full copy of the project including the history of all changes on their machine, so they don't have to constantly communicate with a central server.

Because of that, if the server goes offline or dies, any of the developers can still save their work locally as well as send a copy of the project's version to other developer.

> 🧠 DVCS makes it easier for project collaboration as developers don't have to constantly communicate with a central server. It is enough that one developer has a copy which can easily be distributed.

## What is Git?

Git is the most popular distributed version control system in the world. Why? Because it's free, open source, super fast and scalable.

## What is GitHub?

How about GitHub? It is actually hosted Git. So, where Git is the underlying system that runs on your local machine, GitHub is hosted in the cloud. It makes it easy for developers to share code files and collaborate with other developers on open-source projects.