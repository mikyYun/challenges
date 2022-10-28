# DB Design basics
https://support.microsoft.com/en-us/office/database-design-basics-eb2159cf-1e30-401a-8084-bd4f9c9ca1f5

Correct design is essential to achieving your goals in working with a database, investing the time required to learn the principles of good design makes sense.

## What is good database design?
The first principle is that duplicate information (called redundant data) is bad, because it wastes space and increases the likelihood of errors and inconsistencies.

The second principle is that the correctness and completeness of information is important.
1. Divides your information into subject-based tables to reduce redundant data
2. Provides Access with the information it requires to join the information in the tables together as needed
3. Helps support and ensure the accuracy and integrity of your information
4. Accomodates your data processing and reporting needs

## The design process
* STEPS
1. Determine the purpose of your database
2. Find and orhanize the information required
3. Divide the information into tables
4. Turn information items into columns
5. Specify primary keys
6. Set up the table relationships
7. Refine your design
8. Apply the normalization rules

## Determining the purpose of your database
Write down the purpose of the databse: its purpose, how you expect to use it, and who will use it

## Finding and organizing the required information
To find and organize the information required, start with your existing information. If you don't have any existing forms, imagine instead that you have to design a form to record the customer information. What information would you put on the form? What fill-in boxes would you create? Identify and list each of these items.

Next, consider the types of reports or mailings you might want to produce from the database. A key point to remember is that you should break each piece of information into its smallest useful parts.

## Dividing the information into tables
To divide the information into tables, choose the major entities, or subjects.

When you design your database, always try to record each fact just once.

## Turning information items into columns
To determine the columns in a table, decide what information you need to track about the subject recorded in the table. Once you have determined the initial set of columns for each table, you can further refine the columns. You should also consider whether the database will hold information that is of domestic origin only, or international, as well.

* a few tips for determining your columns.
1. Don’t include calculated data    
2. Store information in its smallest logical parts    

## Specifying primary keys
Each table should include a column or set of columns that uniquely identifies each row stored in the table.
* A primary key must always have a value.
* You should always choose a primary key whose value will not change. 
```
In a database that uses more than one table, a table’s primary key can be used as a reference in other tables. If the primary key changes, the change must also be applied everywhere the key is referenced.
```

## Creating the table relationships
* table relationships to bring the information together as needed.
1. One to many
```
To represent a one-to-many relationship in your database design, take the primary key on the "one" side of the relationship and add it as an additional column or columns to the table on the "many" side of the relationship. 
```
2. Many to many
```
A single order can include more than one product. On the other hand, a single product can appear on many orders. Therefore, for each record in the Orders table, there can be many records in the Products table. And for each record in the Products table, there can be many records in the Orders table.

Because for any product, there can be many orders; and for any order, there can be many products
```
3. One to one
```
When you detect the need for a one-to-one relationship in your database, consider whether you can put the information from the two tables together in one table. 
```
3. a.  If the two tables have the same subject, you can probably set up the relationship by using the same primary key in both tables.

3. b. If the two tables have different subjects with different primary keys, choose one of the tables (either one) and insert its primary key in the other table as a foreign key.

## Refining the design
Once you have the tables, fields, and relationships you need, you should create and populate your tables with sample data and try working with the information: creating queries, adding new records, and so on. `Doing this helps highlight potential problems`

```
Did you forget any columns? If so, does the information belong in the existing tables? If it is information about something else, you may need to create another table. Create a column for every information item you need to track. If the information can’t be calculated from other columns, it is likely that you will need a new column for it.

Are any columns unnecessary because they can be calculated from existing fields? If an information item can be calculated from other existing columns — a discounted price calculated from the retail price, for example — it is usually better to do just that, and avoid creating new column.

Are you repeatedly entering duplicate information in one of your tables? If so, you probably need to divide the table into two tables that have a one-to-many relationship.

Do you have tables with many fields, a limited number of records, and many empty fields in individual records? If so, think about redesigning the table so it has fewer fields and more records.

Has each information item been broken into its smallest useful parts? If you need to report, sort, search, or calculate on an item of information, put that item in its own column.

Does each column contain a fact about the table's subject? If a column does not contain information about the table's subject, it belongs in a different table.

Are all relationships between tables represented, either by common fields or by a third table? One-to-one and one-to- many relationships require common columns. Many-to-many relationships require a third table.
```

## Refining the Products table
The Products table could include a field that shows the category of each product.

## Applying the normalization rules
You use these rules to see if your tables are structured correctly. The process of applying the rules to your database design is called normalizing the database, or just normalization.

Normalization is most useful after you have represented all of the information items and have arrived at a preliminary design.
```
apply the rules in succession, at each step ensuring that your design arrives at one of what is known as the "normal forms."
```
* First normal form
First normal form states that at every row and column intersection in the table there, exists a single value, and never a list of values. 

* Second normal form
Second normal form requires that each non-key column be fully dependent on the entire primary key, not on just part of the key.

* Third normal form
Third normal form requires that not only every non-key column be dependent on the entire primary key, but that non-key columns be independent of each other.