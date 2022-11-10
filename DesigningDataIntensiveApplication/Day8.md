## Writing to Column-Oriented Sotrage
* Pros
```
Column-oriented storage, compression, and sorting all help to make those read queries faster
```
* Cons
```
They have the downside of making writes more difficult
```

Update-in-place approach like B-trees is not possible with compressed columns. To insert a row in the middle of a sorted table, we have to rewrite all the column files. As rows are identified by their position within a column

* Solutions
```
LSM-trees
=> All wirtes first go to an in-memory store, where they are added to a sorted structure and prepared for writing to disk
```

## Aggregation: Data Cubes and Materialized Views
Columnar storage can be significantly faster for ad hoc analytical queries, so it is rapidly gaining popularity. Another aspect of dtata warehouses that is worth mentioning briefly is `materialized aggregates`.

## Summary
On a high level, we saw that storage engines fall into two broad categories: those optimized for transaction processing(OLTP), and those optimized for analytics (OLAP)
