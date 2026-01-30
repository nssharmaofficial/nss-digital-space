---
id: 14
date: 2024-06-04
title: 'Introduction to Amazon EC2 Instances 🖥️'
shortTitle: 'Introduction to Amazon EC2 Instances'
template: post
thumbnail: '../thumbnails/aws.png'
slug: introduction-to-aws-ec2-instances
categories:
  - Technical
tags:
  - aws
  - introduction
  - beginner
comments_off: true
description: Introduction to Amazon EC2 Instances
---

## What is Amazon EC2? 🤔

Amazon EC2 is like renting a computer in the cloud. You get to pick what kind of computer you want – how powerful it is, how much memory it has, and all that good stuff.

**Why Use EC2?**

* **Flexibility:** You can choose exactly what type of virtual server you need, from small to super powerful.
* **Pay as You Go:** You only pay for what you use, whether it's by the second or by the hour.
* **Easy Setup:** Setting up a new server is quick and painless, and you can have as many as you want.

## Creating an EC2 Instance 🚀

When you're making your EC2 instance, you need to think about two things: what kind of computer you want and what you want it to do.

* **Hardware Specs:** This is like picking out the parts for your computer – how fast you want it to be, how much memory it needs, and so on.
* **Logical Configurations:** This is where you decide things like what operating system you want and how you want to connect to the internet.

The first step in launching an EC2 instance is selecting an Amazon Machine Image (AMI).

## What is an AMI? 🤔

Normally, setting up a computer involves installing all the software yourself. But with EC2, you can use something called an AMI, which is like a pre-made setup for your computer. It comes with everything you need already installed – the operating system, any software you want, and even some settings already configured.

### The Relationship Between AMIs and EC2 Instances 🫱🏼‍🫲🏽

AMIs are like blueprints for your EC2 instances. When you launch an instance, AWS creates a virtual machine based on the AMI you chose. It's like making a copy of a class to create an object in programming.

### Reusability of AMIs ♻️

One cool thing about AMIs is that you can reuse them. If you set up a server just the way you like it, you can save it as an AMI. Then, whenever you need another server with the same setup, just use that AMI instead of starting from scratch.

## EC2 Instance Types and Sizes ⚙️

EC2 offers different types of instances, each designed for specific tasks:

* **General purpose:** Good for everyday use, like web servers.
* **Compute optimized:** High-performance processors for demanding tasks.
* **Memory optimized:** Fast performance for memory-heavy apps.
* **Accelerated computing:** Specialized hardware for graphics and data processing.
* **Storage optimized:** High-speed storage for big data apps.

One of the benefits of EC2 is the flexibility to resize instances. You can start with an instance type, evaluate its performance, and later resize it to better suit your needs. This flexibility allows you to optimize your resources and adapt to changing requirements over time.

By default, your EC2 instances are placed in a network called the default Amazon Virtual Private Cloud (VPC). Any resource you put inside the default VPC will be public and accessible by the internet, so you shouldn’t place any customer data or private information inside of it. Inside this network, your instance resides in an Availability Zone of your choice. While EC2 instances are typically reliable, two is better than one, and three is better than two. Specifying the instance size gives you an advantage when designing your architecture because you can use more smaller instances instead of a few larger ones. If your frontend only has a single instance and that instance fails, your application goes down. On the other hand, if your workload is distributed across 10 instances and one fails, you lose only 10 percent of your fleet and your application availability is hardly affected.

## EC2 Instance Lifecycle ♻️

1. **Pending State**: When you launch an instance, it enters the pending state. Billing has not yet started. During this phase, AWS prepares the instance by copying the Amazon Machine Image (AMI) content to the root device and allocating the necessary networking components.
    
2. **Running State**: Once the instance is ready, it transitions to the running state. The instance is now fully operational, and you can perform actions like reboot, stop, terminate, and stop-hibernate.
    
3. **Reboot State**: Rebooting an instance is like rebooting an operating system. The instance stays on the same host computer, retaining its public and private IP addresses and any data on its instance store. This process typically takes a few minutes.
    
4. **Stop and Start State**: When you stop an instance, it may be moved to a new physical server upon restarting. This means you get a new public IP address, but the private IP address remains the same. Data on the previous host’s instance store is lost.
    
5. **Terminate State**: Terminating an instance erases the instance store and releases both the public and private IP addresses. Once terminated, you can no longer access the instance.
    

### Stop vs. Stop-Hibernate 😴

When you stop your instance, it enters the stopping state, followed by the stopped state. AWS does not charge for usage or data transfer fees while the instance is stopped, but storage charges for any attached Amazon EBS volumes still apply. While in the stopped state, you can modify some attributes, like the instance type. However, data stored in memory (RAM) is lost.

In contrast, stop-hibernate signals the operating system to perform hibernation, saving the RAM contents to the Amazon EBS root volume. This is particularly useful for applications that require data persistence in RAM, such as custom backend caching solutions. The stop-hibernate feature prevents the need to manually save RAM data before shutting down the server.

## EC2 Pricing 🏷️

Understanding EC2 pricing involves separating the instance cost from other associated services like storage and networking. Instance costs are typically billed on a per-second basis, but prices are often stated per-hour for simplicity. Billing starts when the instance is running and stops when it is stopped or terminated.

AWS offers three main pricing options for EC2 instances: on-demand, reserved, and spot instances.

### On-Demand Instances

You pay for compute capacity with no long-term commitments. Billing starts when the instance is running and stops when it is stopped or terminated. This option is suitable for applications with unpredictable workloads or short-term projects.

### Reserved Instances (RIs)

RIs provide a discounted hourly rate and optional capacity reservations for a one-year or three-year term. You can choose from three payment options: All Upfront, Partial Upfront, or No Upfront.

* **All Upfront**: Offers the highest discount.
* **Partial Upfront**: Offers a moderate discount.
* **No Upfront**: Offers a lower discount compared to Partial and All Upfront but still better than On-Demand pricing.

RIs are tied to specific instance types and Availability Zones. You continue to pay for RIs even if they are stopped because of the committed term.

### Spot Instances

Spot Instances allow you to utilize unused EC2 capacity at a substantial discount, up to 90% off On-Demand prices. You set a maximum price you're willing to pay for the instance hour, and if the current Spot price is lower, AWS provides the instance. However, Spot Instances can be interrupted if capacity is no longer available or if the Spot price exceeds your maximum bid.
