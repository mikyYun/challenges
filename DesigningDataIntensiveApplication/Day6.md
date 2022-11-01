# Transaction Processing or Analytics?
Databases started being increasingly used for `data analytics`, which has very different access pattern. Usually an analytic query needs to scan over a huge number of records, only reading a few columns per record, and calculates aggregate statistics rather than returning the raw data to the user.

## Data Warehousing
`OLTP System`: Systems like plowering the customer-facing website, controlling point for sale systems in physical stores, tracking inventory in warehouses, planning routes for vehicles, managing suppliers, administering employees, etc are usually expected to be highly available and to process transactions with `low latency`, since they are often critical to the operation of the business.
```
reluctant to let business analysts run ad hoc analytic queries on an OLTP database, since the queries are often "expensive", "scanning large parts of the dataset", which can harm the performance of concurrently executing transactions
```

`Data Warehouse` is a separate database that analysts can query to their hearts' content, `without affecting OLTP operations`.
```
  contains a read-only copy of the data in all the variou OLTP systems
```

Most of large enterprises has Data warehouse, but small companies not becuase they don't have so may different OLTP systems, and most small companies have a small amount of data(small enough that it can be queried in a conventional SQL database, or even analyzed in a spreadsheet)

* Advantage
```
The data warehouse can be optimized for analytic access patterns.
=> It turns out that the indexing algorithms discussed in the first half of this chapter work well for OLTP, but are not very good at answering analytic queries
```

* Divergence between OLTP databases and data warehouse
```
* They both have a SQL query interface
* Internals of the systems can look quite different, because they are optimized for very different query patterns.
* Many database vendors now focus on supporting either transaction processing or analytics workloads, but not both.
```

## Stars and Snowflakes: Schemas for Analytics
`Star Schema`: Many data warehoses are used in a fairly formulatic style(also known as dimensional modeling)

The name `star schema` comes from the fact that when the table relationships are visualized, the fact table is in the middle, surrounded by its dimension tables

`snowflake schema`: A variation of this template, where dimensions are further broken down into subdimensions.