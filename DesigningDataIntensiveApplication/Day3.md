# Data Models and Query Languages
Data models show not only how the software is written, byt also on how we think about the problem that we are solving.

### Birth of NoSQL
* Several driving forces behind the adoption of NoSQL
1. A need for greater scalability than relational databases can easily achieve, including very large datasets or very high write throughput
2. A widespread preference for free and opensource software over commercial database products
3. Specialized query operations that are not well supported by the relational model
4. Frustration with the restrictiveness of relational schemas, and a desire for a more dynamic and expressive data model

### Many-to-One and Many-to-Many Relationships
* Advantages to having standardized lists of geographic regions and industries, and leeting users choose from a drop-down list or autocompleter.
1. Consistent style and spelling across profiles
2. Avoiding ambiguity(same name of cities)
3. Easy of updating
4. Localization support
5. Better search

* Advantage of using an ID
```
It has no meaning to humans, it never needs to change.
```

Normalizing data requires many-to-one relationships, which don't fit nicely the document model. `In relational databases`, it's normal to refer to rows in other tables by ID, because joins are easy. `In document databases`, joins are not needed for one-to-many tree structures, and support for joins in often weak.

Even if the initial version of an application fits well in a join-free document model, data has a tendency of becoming more interconnected as features are added to applications
