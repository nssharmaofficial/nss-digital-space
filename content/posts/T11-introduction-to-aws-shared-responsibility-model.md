---
id: 11
date: 2024-03-29
title: 'Introduction to AWS Shared Responsibility Model 🫱🏼‍🫲🏽'
shortTitle: 'Introduction to AWS Shared Responsibility Model'
template: post
thumbnail: '../thumbnails/aws.png'
slug: introduction-to-aws-shared-responsibility-model
categories:
  - Technical
tags:
  - aws
  - introduction
  - beginner
comments_off: true
description: Introduction to AWS Shared Responsibility Model
---

The AWS Cloud world isn't just about AWS doing all the work. When it comes to security and following rules, it's a team effort between you and AWS. They call it the AWS Shared Responsibility Model, and it's all about who's in charge of what when it comes to keeping things safe and secure.

## What is AWS Responsible For? ☁️

First things first, AWS takes care of what they call *security of the cloud*. That's like being the guards of the infrastructure that powers everything in the AWS Cloud. Here's what AWS handles:

* **Physical security:** They make sure their data centers, those Regions and Availability Zones are like super-secured.
* **Infrastructure management:** AWS takes care of all the hardware, software, and networking stuff that keeps their services running.
But here's the deal: AWS's level of responsibility changes depending on the type of service they're providing. There are three types:

| **Category** | **Examples of AWS Services** | **AWS Responsibility** |
| --- | --- | --- |
| Infrastructure | Compute services like Amazon EC2 | Manages the underlying infrastructure and foundational services. |
| Container services | Services requiring less customer management, like Amazon RDS | Manages the infrastructure, foundational services, operating system, and application platform. |
| Abstracted services | Services requiring minimal customer management, like Amazon S3 | Manages the infrastructure layer, operating system, platforms, server-side encryption, and data protection. |

## What is the Customer Responsible For? 🙋🏻‍♀️

Now, here's what's your responsibility:

* **Infrastructure:** You're in charge of the operating system and any applications you're running on AWS services. Plus, keeping all your data safe.
* **Container services:** If you're using services running applications in containers, like Amazon ECS, you have make sure your data is encrypted and protected.
* **Abstracted services:** Even for hands-off services like Amazon S3, you've still got a job. Keep an eye on your data, make sure it's encrypted, and safe from hackers.

And here are some specific tasks you'll be handling:

* **Choosing a region:** Pick the AWS Region that fits best with any rules or laws about where your data can be stored.
* **Data protection:** Keep your data locked up tight with encryption and backups.
* **Access control:** Decide who can access your stuff in AWS, making sure only the right people get in.
    
