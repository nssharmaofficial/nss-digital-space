---
id: 7
date: 2024-03-13
title: 'PostgreSQL + Python for Beginners 🐘🐍 (Part 2)'
shortTitle: 'PostgreSQL + Python for Beginners (Part 2)'
template: post
thumbnail: '../thumbnails/postgres.png'
slug: postgre-and-python-for-beginners-2
categories:
  - Technical
tags:
  - python
  - postgresql
  - tutorial
  - beginner
comments_off: true
description: PostgreSQL + Python for Beginners (Part 2)
---

If you've ever worked with older database systems, you're likely familiar with `.dbf` files. These files were widely used in dBase, FoxPro, and other database software before the rise of more modern systems like PostgreSQL. But what if your current project requires you to migrate data from these files into a PostgreSQL database?🤔

I will guide you step by step how to upload a `.dbf` file to the PostgreSQL database using Python.

Suppose we have a `.dbf` like:

| time | ID | value |
| --- | --- | --- |
| 01-02-2020 9:45:29 AM | 1 | 4 |
|  | 2 | 10 |
| 01-03-2020 6:30:18 AM | 3 | 9 |

### Step 1: Install Dependencies 🚀

Make sure you have all the libraries needed installed:

```terminal
pip install dbfread psycopg2-binary
```

* **DBFread Module**: This Python library allows us to read `.dbf` files
    
* **Psycopg2 Module**: This is a PostgreSQL adapter for Python, allowing database connections and operations
    

```python
import os
from dbfread import DBF, FieldParser
import psycopg2
from psycopg2.errors import UndefinedColumn
```

### Step 2: Connect to the Database ➡️🐘

First things first, we need to connect to our PostgreSQL database. We define a function, `connect_to_db`, which takes database credentials (like name, user, and password) and establishes a connection.

This function will be our bridge to PostgreSQL, allowing us to later execute SQL commands.

```python
def connect_to_db(dbname, user, password, host='localhost', port=5432):
    """
    Establishes a connection to the PostgreSQL database.

    Args:
    - dbname (str): The name of the database to connect to.
    - user (str): The username used to authenticate.
    - password (str): The password used to authenticate.
    - host (str): Database host address (defaults to 'localhost').
    - port (int): Port number (defaults to 5432).

    Returns:
    - conn: A connection object to the PostgreSQL database.
    """
    connection = psycopg2.connect(dbname=dbname,
                                  user=user,
                                  password=password,
                                  host=host,
                                  port=port)
    return connection
```

### Step 3: Create Custom Parser for DBF files ⚙️

`.dbf` files can have fields filled with binary zeros or unexpected formats. To handle these, we customize a `FieldParser` class from the `dbfread` module, named `CustomFieldParser`.

Now, it will return `None` for problematic fields instead of causing an error.

```python
class CustomFieldParser(FieldParser):
    """
    A custom field parser for handling special cases in DBF file data fields.
    
    This class extends the default FieldParser from dbfread to provide
    specialized handling of numeric fields ('N') that may contain
    unusual data, such as binary zeros or data that could raise a
    ValueError when being parsed in the standard way.
    """
    
    def parseN(self, field, data):
        """
        Parses numeric fields ('N') in DBF files, handling special cases.
        
        This method overrides the default numeric field parsing to address
        cases where the data might be composed of binary zeros or other
        formats that could cause the standard parsing to fail. In such cases,
        it aims to return a more sensible default (None) rather than raising an error.
        
        Args:
            field: The field descriptor.
            data: The raw bytes data for the field.
        
        Returns:
            The parsed value as a number if it can be parsed normally, or None
            if the data is composed of binary zeros or if a ValueError occurs
            during parsing.
        """
        try:
            # If the data is composed entirely of binary zeros, return None
            if data.strip(b'\x00').strip() == b'':
                return None
            return super(CustomFieldParser, self).parseN(field, data)
        except ValueError:
            # Handle any other ValueError by returning None
            return None
```

### Step 4: Clean Data Before Import 🧹

Not all data from `.dbf` files will fit well into our PostgreSQL tables, especially when it comes to special types like timestamps.

The `clean_values` function checks and modifies values (like converting empty strings in timestamp fields to `NULL`) before they're inserted into the database.

Without converting empty strings (`''`) in timestamp fields to `None` (which translates to `NULL` in SQL), you might encounter insertion errors. PostgreSQL expects timestamp fields to either contain valid timestamp data or be `NULL` if they are allowed to be null. Attempting to insert an empty string into a timestamp column would result in a type mismatch error, preventing the data from being inserted.

```python
def clean_values(value, field_type):
    """
    Cleans values for insertion into the database.

    Args:
    - value: The value to be cleaned.
    - field_type: The type of the field.

    Returns:
    - The cleaned value.
    """
    if field_type == 'TIMESTAMP' and value == '':
        return None
    return value
```

### Step 5: Creating and Updating Tables Dynamically 🎢

The main part the script is the `create_table_from_dbf` function. It reads the structure of a `.dbf` file and dynamically creates or updates a corresponding table in PostgreSQL to match it. This involves:

* Checking if the table already exists.
* Creating the table if it doesn't, with columns based on the `.dbf` file fields.
* Updating the table to add new columns if the table already exists but the `.dbf` file contains new fields.
* Inserting data into the table, row by row.

This approach is flexible and allows us to handle `.dbf` files with varying structures without manually adjusting our database schema each time.

```python
def create_table_from_dbf(connection, dbf_path, table_name):
    """
    Creates or updates a PostgreSQL table based on the .dbf
    file structure and inserts the data.
    """
    dbf = DBF(dbf_path, parserclass=CustomFieldParser)
    data_types = {
        'time': 'TIMESTAMP',
        'default': 'NUMERIC'  # Default for other columns
    }

    with connection.cursor() as cursor:
        # Check if the table exists
        cursor.execute(
            "SELECT EXISTS (SELECT FROM pg_tables WHERE tablename = %s);",
            (table_name,)
        )
        table_exists = cursor.fetchone()[0]

        if not table_exists:
            # Create table if not exists
            column_defs = ', '.join(
                f"{field.name} {data_types.get(field.name.lower(), 'NUMERIC')}"
                for field in dbf.fields
            )
            cursor.execute(
                f"CREATE TABLE {table_name} ({column_defs});"
            )
        else:
            # Alter table to add new columns if necessary
            for field in dbf.fields:
                field_name = field.name
                field_type = data_types.get(field.name.lower(), 'NUMERIC')
                cursor.execute(
                    f"ALTER TABLE {table_name} ADD COLUMN IF NOT EXISTS "
                    f"{field_name} {field_type};"
                )

        connection.commit()

        # Insert data into the table
        for record in dbf:
            # Clean values
            cleaned_values = [
                clean_values(value, data_types.get(field.lower(), 'NUMERIC'))
                for field, value in record.items()
            ]

            columns = ', '.join(record.keys())
            placeholders = ', '.join(['%s'] * len(record))
            insert_query = (
                f"INSERT INTO {table_name} ({columns}) VALUES ({placeholders})"
            )
            try:
                cursor.execute(insert_query, cleaned_values)
            except UndefinedColumn as e:
                print(f"Error: {e}")
                cursor.execute(
                    f"ALTER TABLE {table_name} ADD COLUMN {e.column_name} 'NUMERIC';"
                )
                cursor.execute(insert_query, cleaned_values)

        connection.commit()
```

### Step 6: Bring It All Together 🙌🏻

Finally, our `main` function orchestrates the entire process. It:

* Specifies the database connection details and the path to the folder containing `.dbf` files.
* Establishes a connection to the database.
* Loops through each `.dbf` file in the folder, processes it using our previously defined functions, and imports its data into PostgreSQL.
* Closes the database connection once all files are processed.

```python
def main():
    """
    Main function to process .dbf files and insert them
    into a PostgreSQL database.
    """
    # Database connection parameters - update these
    dbname = 'YourDatabaseName'
    user = 'postgres'
    password = 'YourPassword'
    host = 'localhost'
    port = 5432

    # Path to the folder containing .dbf files
    folder_path = "Path/To/Folder/Containing/.dbf/Files"

    # The name of the table to be created/updated
    table_name = "YourTable"

    # Establish database connection
    conn = connect_to_db(dbname, user, password, host, port)

    # Process each .dbf file in the folder
    for filename in os.listdir(folder_path):
        if filename.endswith('.dbf'):
            dbf_path = os.path.join(folder_path, filename)
            create_table_from_dbf(conn, dbf_path, table_name)
            print(f"Processed {filename}")

    # Close the connection
    conn.close()

if __name__ == '__main__':
    main()
```

---

This guide has walked you through each step of the script, explaining the purpose and functionality behind it and provides you with a base knowledge for data migration. 💫