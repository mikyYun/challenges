# Column-Oriented Storage
How can we execute multiple JOIN queries efficiently?

In most OLTP databases, storage is laid out in a `row-oriented` fashion
```
All the values from one row of a table are stored next to each other
```
Document databases are similar
```
  An entire document is typically stored as one contiguous sequence of bytes
```

In order to process a query with multiple `JOIN`, you may have indexes on columns that tell the storage engine where to find all the values for a particular data or for a particular product.

```
row-oriented storage engine still needs to load all of those rows from disk into memory, parse them, and filter out those that don't meet the required conditions which takes a long time
```

Idea behind `column-oriented storage` is simple
```
don't store all the values from one row together, but store all the values from each column togther instead
```

The `column-oriented` storage layout relies on each column file containing the rows in the same order.

## Sort Order in COlumn Storage
In a column store, it doesn’t necessarily matter in which order the rows are stored.
1. It’s easiest to store them in the order in which they were inserted, since then inserting a new row just means appending to each of the column files. However, we can choose to impose an order, like we did with SSTables previously, and use that as an indexing mechanism.

2. It can help with compression of columns
```
If the primary sort column does not have many distint values, then after sorting, it will have long sequences where the same value is repeated many times in a row
```
