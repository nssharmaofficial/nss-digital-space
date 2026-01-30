---
id: 15
date: 2024-06-12
title: 'Introduction to Container Services on AWS 🐳'
shortTitle: 'Introduction to Container Services on AWS'
template: post
thumbnail: '../thumbnails/aws.png'
slug: introduction-to-aws-container-services
categories:
  - Technical
tags:
  - aws
  - introduction
  - beginner
comments_off: true
description: Introduction to Container Services on AWS
---

EC2 (Elastic Compute Cloud) is one of AWS’s main services. It’s great for many different things, like running websites or big data tasks. While EC2 is very flexible and reliable, sometimes you might need other options, especially if you want to run a lot of containers on AWS.

## What Are Containers? 🤔

First things first, what exactly are containers? Think of them as super-portable packages that contain everything your application needs to run smoothly, from code to libraries and settings. This makes containers super consistent and easy to move around, whether you're testing, developing, or running your app in production.

### Difference Between Container and VM 🔍

What sets containers apart from traditional virtual machines (VMs)? Well, containers share the same operating system and kernel as the host, making them lightweight and quick to spin up. 🎢 This very useful, especially when you need to respond rapidly to fluctuating demand. However, if you're looking for the full strength of an operating system and more resources, VMs might be the way to go.

> 🧠 Docker is a popular container runtime that is able to share the host OS across multiple containers rather than requiring each one to have and run its own full operating system.

## AWS Container Services 📦

In AWS, containers run on EC2 instances. For example, you may have a large instance and run a few containers on that instance. Managing a few containers is simple. 💁🏻‍♀️ But managing hundreds or thousands is complex. Tasks like starting, stopping, and monitoring containers become really hard. 😪 If you’re trying to manage your compute at a large scale, you need to know:

* How to place your containers on your instances.
* What happens if your container fails.
* What happens if your instance fails.
* How to monitor deployments of your containers.

AWS has two main services for managing containers: Amazon Elastic Container Service (ECS) and Amazon Elastic Kubernetes Service (EKS). Both services help you run and manage containers across a cluster of EC2 instances, but they use different tools and offer different features.

### Amazon ECS

Amazon ECS runs your containers on a cluster of Amazon EC2 virtual machine instances pre-installed with Docker. It handles installing containers, scaling, monitoring, and managing these instances through both an API and the AWS Management Console. It allows you to simplify your view of EC2 instances to a pool of resources, such as CPU and memory. The specific instance a container runs on, and maintenance of all instances, is handled by the platform. You don’t have to think about it.

To run and manage your containers, you need to install the Amazon ECS Container Agent on your EC2 instances. This agent is open source and responsible for communicating back to the Amazon ECS service about cluster management details. An instance with the container agent installed is often called a container instance.

Once the Amazon ECS container instances are up and running, you can perform actions like launching and stopping containers, getting cluster state, scaling in and out, assigning permissions, and more. To prepare your application to run on Amazon ECS, you create a task definition. The task definition is a text file, in JSON format, that describes the resources you need to run that container, such as CPU, memory, ports, images, storage, and networking information.

### Amazon EKS

Uses Kubernetes, an open-source tool for managing containers. If you are familiar with Kubernetes, EKS is a good choice.

Amazon EKS is pretty similar to Amazon ECS, but there are some differences.

* An EC2 instance with the ECS Agent installed and configured is called a container instance. In Amazon EKS, it is called a worker node.
* An ECS Container is called a task. In the Amazon EKS ecosystem, it is called a pod.
* While Amazon ECS runs on AWS native technology, Amazon EKS runs on top of Kubernetes.
