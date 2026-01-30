---
id: 13
date: 2024-03-31
title: 'Introduction to AWS Identity and Access Management (IAM) 🪪'
shortTitle: 'Introduction to AWS Identity and Access Management (IAM)'
template: post
thumbnail: '../thumbnails/aws.png'
slug: introduction-to-aws-iam
categories:
  - Technical
tags:
  - aws
  - introduction
  - beginner
comments_off: true
description: Introduction to AWS Identity and Access Management (IAM)
---

## What is IAM? 🤔

AWS Identity and Access Management (IAM) is a web service that enables you to manage access to your AWS account and resources .IAM is like the bouncer at the door of your AWS account. It checks who's coming in and what they're allowed to do once they're inside.

## IAM Features 🔥

IAM offers many features to help control access and manage identities within your AWS account:

* Works everywhere in AWS, no matter where you are.
* Hooks up with lots of other AWS services easily.
* Sets up rules for passwords, making sure they're strong and change regularly.
* Adds an extra layer of security with Multi-Factor Authentication (MFA).
* Lets people use their existing passwords to get into your AWS account, which is handy.

## What is an IAM User? 👤

An IAM user represents a person or service that interacts with AWS. Each user is defined within your AWS account, and any activity done by that user is billed to your account. Once created, an IAM user can sign in to gain access to AWS resources inside your account. You can add multiple users as needed, each with their own login credentials.

**Creating IAM Users:**

* You can make a user for each person in your team who needs access to AWS.
* Each user gets their own login details, like a username and password.
* You can set what each user can and can't do in AWS by attaching policies to them.

## What is an IAM Group? 👥

An IAM group is a collection of users that inherit the permissions assigned to the group.

**Managing Permissions with Groups:**

* You can put users with similar roles or permissions into the same group.
* Instead of setting permissions for each user individually, you set them once for the whole group.
* When someone new joins your team or changes roles, you just add or remove them from the relevant group.

## What is an IAM Role? **🎭**

Roles are like special passes that let you do certain things for a limited time. They're not tied to one person – anyone who needs them can use them. This is great for temporary access or for letting applications do stuff without giving them permanent keys.

**Using Roles for Temporary Access:**

* You can create roles with specific permissions for tasks like launching servers or accessing data.
* Instead of giving someone permanent access, you can assign them a role for a set period.
* Roles are often used by applications or scripts to access AWS resources without needing permanent credentials.

**Using Roles for Temporary Access:**

* You can create roles with specific permissions for tasks like launching servers or accessing data.
* Instead of giving someone permanent access, you can assign them a role for a set period.
* Roles are often used by applications or scripts to access AWS resources without needing permanent credentials.

### AWS IAM Identity Center

If you have an organization with many employees and multiple AWS accounts, you may want your employees to sign in with a single credential. AWS IAM Identity Center is an identity provider (IdP) that lets your users sign in to a user portal with a single set of credentials. It then provides them access to all their assigned accounts and applications in one central location. It is similar to IAM, as it offers a directory where you can create users, organize them in groups, set permissions across those groups, and grant access to AWS resources. However, AWS IAM Identity Center has advantages over IAM, such as syncing users and groups from a third-party IdP.

For example, if you have an employee, Natasha, who has access to multiple AWS accounts, instead of creating and managing multiple IAM users named Natasha in each of those AWS accounts, manage Natasha in your company’s IdP. If Natasha moves within the company or leaves, update Natasha's status in the IdP, rather than in every AWS account.

## What is an IAM Policy? 🚓

IAM policies manage access and provide permissions to AWS services and resources. Policies are created and attached to IAM users, groups, and roles. Whenever a user or role makes a request, AWS evaluates the policies associated with them to determine if the request should be allowed or denied.

* Policies are written in JSON format and define the permissions for users, groups, or roles.
* You can create custom policies or use predefined ones provided by AWS.
* Following the principle of least privilege ensures that users have only the permissions they need to do their jobs.

### IAM Policy Examples

IAM policies are typically stored in AWS as JSON documents with several policy elements. Here’s an example of an admin access policy:

```json
{
  "Version": "2012-10-17",
  "Statement": [{
    "Effect": "Allow",
    "Action": "*",
    "Resource": "*"
  }]
}
```

In every policy, there are four major JSON elements: Version, Effect, Action, and Resource.

* **Version**: Defines the policy language version.
* **Effect**: Specifies whether the statement allows or denies access.
* **Action**: Describes the actions that should be allowed or denied.
* **Resource**: Specifies the objects the policy statement covers.

This policy allows performing all actions on all resources inside your AWS account, referred to as an administrator policy.

And here's one that's more specific:

```json
{
  "Version": "2012-10-17",
  "Statement": [{
    "Effect": "Allow",
    "Action": [
      "iam:ChangePassword",
      "iam:GetUser"
    ],
    "Resource": "arn:aws:iam::123456789012:user/${aws:username}"
  }]
}
```

This policy allows an IAM user to change their password and get information about their user. It restricts access to their own credentials using the variable substitution `${aws:username}`.
