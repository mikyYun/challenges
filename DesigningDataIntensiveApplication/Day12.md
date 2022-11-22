## Implementation of Replication Logs
Leader-based replication methods

* Statement-based replication

  The leader logs every `write request` that it executes and sends that statement log to its followers.

  For relational DB, this means every [INSERT, UPDATE, DELETE] statement is forwared to followers

  There are various ways in which this approach to replication can break down

  1. Any statement that calls a nondeterministic function, such as `NOW()` to get the current date and time or `RAND()` to get a random number, is likely to generate a different value on each replica

  2. If statements use an autoincrementing column, or if they depend on the existing data in the database, they must be executed in exactly the same order on each replica, or else they may have a different effect. This can be limiting when there are multiple concurrently executing transactions

  3. Statements that have side effects may result in different side effects occuring on each replica, unless the side effects are absolutely determinstic

  It is possible to work around those issues. However, because there are so many edge cases, other replication methods are now generally preferred.

* Write-agead log(WAL) shipping
  
  Usually every write is appended to a log

  1. In the case of a log-structured storage engine, this log is the main place for storage.

  2. In the case of a B-tere, which overwrites individual disk blocks, every modification is first written to a write-agead log so that `the index can be restored to a consistent state after a crash`

  This method of replication is used in PSQL and Oracle, among others. The main `disadvantage` is that the log describes the data on a very low level
  ```
  a WAL contains details of which bytes were changed in which disk blocks. This makes replication closely coupled to the storage engine. If the database changes its storage format from one version to another, it is typically not possible to run differnt versions of the dtatabase software on the leader and the followers
  
  This makes replication closely coupled to the storage engine. If the database changes its storage format from one version to another, it is typically not possible to run different version of the database on the leader and the followers
  ```
  It can have a big operational impact. If the replication protocol allows the follower to use a newer software version than the leader, you can perform a zero-downtime upgrade of the database software by first upgrading the followers and then performing a failover to make one of the upgraded nodes the new leader.


* Logical(row-based) log replication

  `Logical log`: to distinguish it from the storage engine's data representation. 
    
  Use different log formats for replication and for the storage engine which allows the replication log to be decoupled from the storage engine internals.

  It is usually a sequence of records describing writes to database tables at the granularity of a row

    1. For an inserted row, the log contains the new values of all columns
    
    2. For a deleted row, the log contains enough information to uniquely identify the row that was deleted. Typically this would be the primary key, but if there is no primary key on the table, the old values of all columns need to be logged

    3. For an updated row, the log contains enough information to uniquely identify the updated row, and the new values of all columns(or at least the new values of all columns that changed)

  A transaction that modifies several rows generates several log records

  Since a logical log is decoupled from the storage engine internals, it can more easily be kept backward compatible, allowing the leader and the follower to run different versions of the database software, or even different storage engines.

  This aspect is useful if you want to send the contents of a database to an external system, such as a data warehouse for offline analysis, or for building custom indexes and caches. It is called `change data cpature`

  * Trigger-based replication

  Some tools, such as Oracle GoldenGate, can make data changes available to an application by reading the database log. An alternative is to use features that are available in many relational databases: `triggers` and `stored procedures`.

  `Trigger`
  ```
  A `trigger` lets you register custom application code that is automatically executed when a data change occurs in a database system.

  It has the opportunity to log this change into a seperate table, form which it can be read by an external process. That external process can then apply any necessary application logic and replicate the data change to another system.
  ```

  `Trigger-based replication` typically has greater overheads than other replication methods, and is more prone to bugs and limitations than the database's built-in replication. However, it can nevertheless be useful due to its `flexibility`