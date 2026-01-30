---
id: 16
date: 2024-06-15
title: 'Introduction to Serverless Services on AWS 😎'
shortTitle: 'Introduction to Serverless Services on AWS'
template: post
thumbnail: '../thumbnails/aws.png'
slug: introduction-to-aws-serverless-services
categories:
  - Technical
tags:
  - aws
  - introduction
  - beginner
comments_off: true
description: Introduction to Serverless Services on AWS
---

When you use Amazon EC2 or container services on EC2, you’re in charge of managing your instances. This means you need to:

* Patch your instances with the latest software and security updates.
* Scale your instances according to demand.
* Ensure high availability by deploying across at least two Availability Zones (AZs).

While it's less work than managing everything on-premises, you still need to set up and manage these processes. 😪The good news is, you get a lot of control over your solutions and you can modify the setup to your specific needs.

But not every solution needs this level of control. Sometimes, you just want to focus on your business logic and let AWS handle the rest. This is where serverless comes in.

## Serverless: Focus on Your Code 🚀

Serverless services mean you don’t have to see or manage the underlying infrastructure. AWS takes care of provisioning, scaling, fault tolerance, and maintenance. You just focus on your application. 🥳

Every definition of serverless mentions four key aspects:

1. No servers to provision or manage.
2. Scales with usage.
3. Never pay for idle resources.
4. Availability and fault tolerance are built-in.

## AWS Fargate: Serverless Containers 🐳

First, a quick recap from [Introduction to Container Services on AWS](https://nssharma.hashnode.dev/introduction-to-container-services-on-aws):

* ECS (Elastic Container Service) and EKS (Elastic Kubernetes Service) are container orchestrators. They manage the lifecycle of your containers.
* The compute platform is where these containers actually run. Traditionally, this has been on clusters of EC2 instances.

However, managing EC2 instances means you need to handle provisioning, patching, scaling, and ensuring high availability. 😰 This is where things can get a bit complex.

### Introducing AWS Fargate 📦

AWS Fargate is a serverless compute platform for containers. It works with both ECS and EKS, and it simplifies container management by handling the infrastructure for you.

Here’s why its great:

* You don't have to manage EC2 instances on your own - that means AWS takes care of the provisioning, patching and scaling
* Your containers automatically scale with demand and you get fault tolerance
* You only pay for the vCPU, memory, and storage resources your containerized applications actually use
* It integrates with AWS Identity and Access Management (IAM) and Amazon Virtual Private Cloud (VPC) which allows you to launch Fargate containers inside your network and control connectivity to your applications

### How Does AWS Fargate Work? 🤔

Using Fargate is simple:

1. Start by building your container images.
2. Push these images to a repository like Amazon Elastic Container Registry (ECR). Think of ECR as a storage place for your container images.
3. Specify the memory and compute resources needed for your tasks (in ECS) or pods (in EKS).
4. Deploy your containers and let Fargate handle the rest.

## AWS Lambda: Code on Demand ⚡

If you want to deploy your applications without having to manage any EC2 instances or containers, you can use AWS Lambda. AWS Lambda lets you run code without provisioning or managing servers or containers.

Here’s why its great:

* No servers to manage
* Lambda takes care of running scaling your code with high availability
* You pay only for the compute time you consume

### Use Cases for AWS Lambda 🔍

Lambda is currently designed to run code that has a runtime of under 15 minutes. So this isn't for long running processes like deep learning or batch jobs. You wouldn't host something like a WordPress site on AWS Lambda. It's more suited for quick processing like a web backend handling request, or a backend report processing service or microservice hosting.

### How Does AWS Lambda Work? 🤔

There are three primary components of a Lambda function:

1. **Configuration:** network placement, environment variables, memory, permission sets
2. **Code:** source code, that describes what the Lambda function should run:
    * You can create the code from scratch
    * You can use a blueprint that AWS provides
    * You can use same code from the AWS Serverless Application Repository, a resource that contains sample applications, such as “hello world” code, Amazon Alexa Skill sample code, image resizing code, video encoding, and more
3. **Trigger:** describe when the Lambda function should run - when the trigger (like an HTTP request, file upload to S3, or an event from another AWS service) is detected, the code is automatically run in a managed environment by AWS

For example, you can use Lambda to resize images uploaded to an S3 bucket. When a new photo is uploaded, it triggers a Lambda function that resizes the image and saves it back to the bucket.

## AWS Fargate vs AWS Lambda ✅

| Feature | AWS Fargate | AWS Lambda |
| --- | --- | --- |
| **Compute Type** | Runs entire containerized applications | Executes small functions or tasks |
| **Runtime Limitations** | Can handle longer processes | Limited to 15 minutes per invocation |
| **Trigger Mechanism** | Requires manual or automated scaling triggers | Automatically triggered by events |
| **Cost Structure** | Billed based on vCPU, memory, and storage usage | Billed per request and execution time |
| **Use Case** | Suitable for long-running applications | Ideal for short, event-driven tasks |

Both services are great for different kinds of jobs. Your choice will depend on what kind of workload you have and how you want to manage it.
