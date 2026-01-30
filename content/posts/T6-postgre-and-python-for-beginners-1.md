---
id: 6
date: 2024-03-07
title: 'PostgreSQL + Python for Beginners 🐘🐍 (Part 1)'
shortTitle: 'PostgreSQL + Python for Beginners (Part 1)'
template: post
thumbnail: '../thumbnails/postgres.png'
slug: postgre-and-python-for-beginners-1
categories:
  - Technical
tags:
  - python
  - postgresql
  - tutorial
  - beginner
comments_off: true
description: PostgreSQL + Python for Beginners (Part 1)
---

Setting up a PostgreSQL database and connecting to it from Python involves installing PostgreSQL, setting up a database, installing the necessary Python library for PostgreSQL, and writing Python code to connect to the database and execute queries.

### Step 1: Install PostgreSQL 🐘

1. **Download PostgreSQL**: Go to the official [PostgreSQL website](http://postgresql.org) and download the PostgreSQL installer for your OS.

2. **Install PostgreSQL**: Run the installer and follow the instructions. Make sure to note the password for the `postgres` user and the port number.

### Step 2: Create Your Database 🗄️

After installing PostgreSQL, you can create a new database using the `psql` command-line tool or through a graphical interface like `pgAdmin`.

#### Using psql:

1. Connect to PostgreSQL with the `psql` command:
    
    ```terminal
    psql -U postgres
    ```
    
2. Enter the password for the `postgres` user when prompted (that you set during installation).
    
3. Create a new database with the `CREATE DATABASE` command:
    
    ```terminal
    CREATE DATABASE mydatabase;
    ```
    
4. You can list all databases with the `\l` command and connect to your newly created database with the `\c mydatabase` command.
    

### Step 3: Create a Simple Table from a CSV file

Before you can upload the CSV data, you need a table in your PostgreSQL database that matches the CSV structure.

Here is an example of CSV file:

```plaintext
ID,name,age
1,Natasha,25
2,Abhimanyu,28
```

and its corresponding table in PostgreSQL database:

```terminal
CREATE TABLE people ( id INT, name TEXT, age INT );
```

Now, use the `COPY` command to import the CSV data into the table you created:

```terminal
COPY people FROM '/path/to/your/file.csv' DELIMITER ',' CSV HEADER;
```

> 💡 The `COPY` command requires superuser privileges or appropriate file read permissions set for the PostgreSQL user. If you run into permission issues, consider using the `copy` command which runs with the permissions of the your user account, rather than the server.

### Step 4: Install psycopg2 🚀

`psycopg2` is a popular PostgreSQL adapter for Python. To interact with PostgreSQL from Python, you need to install this package.

```terminal
pip install psycopg2-binary
```

### Step 5: Connect to the Database from Python 🐍

Now that you have a database and the necessary library installed, you can write Python code to connect to the database and execute queries.

1. **Import psycopg2**:
    
    ```python
    import psycopg2
    ```
    
2. **Connect to your database**:
    
    ```python
    connection = psycopg2.connect(
        dbname="mydatabase",
        user="postgres",
        password="yourpassword",
        host="localhost",
        port="5432"
    )
    ```
    
    Replace `'yourpassword'` with the password you set for the `postgres` user during PostgreSQL installation.
    
3. **Create a cursor object**:
    
    ```python
    cursor = connection.cursor()
    ```
    
    Cursor is a database object used to retrieve, and navigate through the result set of a database query. It is also used to insert and update data in the database. A cursor essentially acts as a pointer that allows you to work with your query results one row at a time.
    
4. **Execute a query**:
    
    ```python
    cursor.execute("SELECT * FROM people")
    rows = cursor.fetchall()
    for row in rows:
        print(row)
    ```
    
    An SQL query is a text string used to tell the database to perform a specific operation. This could be anything from selecting data, inserting new data, updating existing data, deleting data, or managing the database structure.

    > 🧠 The combination of the cursor object and SQL queries is central to interacting with databases and they provide the means to perform all manner of data retrieval and manipulation.

5. **Close the cursor and connection**:
    
    ```python
    cursor.close()
    connection.close()
    ```
    
---

Congratulations! 🎉 You just set up your first PostgreSQL database and you created a connection to it in Python 🙌🏻.

In the next part I will show you, how to upload a file to the PostgreSQL database and create a table using Python.