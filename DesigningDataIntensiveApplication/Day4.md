# Stoarage and Retrieval
Why should our developers care how the database handles stoarage and retrieval internally? In order to turn a storage engine to perform well on the workload, we need to have a rough idea of what the storage engine is doing under the hood.

There is a big difference between stoarage engines that are optimized for transactional workloads and those that are optimized for analytics.

## Data Structures That Power Your Database
### Hash Indexes
Key-value stores are quite similar to the dictionary type that you can find in most programming languages, and which is usually implemented as a hash map(hash table).
* Goods
1. Appending and segment merging are sequential write operations, which are generally much faster than random writes.
2. Concurrency and crash recovery are much simpler if segment files are append only or immutable.

* Bads
1. The hash table must fit in memory, so if you have a very large number of keys, the hash table is not a good option. In principle, you could maintain a hash map on disk, but unfortunately, it is difficult to make an on-dist hash map perform well. 
```
It requires a lot of random access I/O, it is expensive to grow when it becomes full, and hash collisions require fiddly logic
```
2. Range queries are not efficient.

### SSTables and LSM-Trees
* Constructing and maintaining SSTables
* Making an LSM-tree out of SSTables
* Performance optimizations

## B-Trees
The most widely used indexing structure. B-trees keep key-value pairs sorted by key, which allows efficient keyvalue lookups and range queries. But that’s where the similarity ends: B-trees have a very different design philosophy.

The log-structured indexes break the database down into variable-size segments, typically several megabytes or more in size, and always write a segment sequentially. By contrast, B-trees break the database down into fixed-size blocks or pages, traditionally 4KB in size, and read or write one page at a time.
```
This design corresponds more closely to the underlying hardware, as disks are also arranged in fixed-size blocks
```

If you want to update the value for an existing key in a B-tree, you search for the leaf
page containing that key, change the value in that page, and write the page back to
disk (any references to that page remain valid). If you want to add a new key, you
need to find the page whose range encompasses the new key and add it to that page.
If there isn’t enough free space in the page to accommodate the new key, it is split
into two half-full pages, and the parent page is updated to account for the new subdivision
of key ranges

## Making B-Trees reliable
In order to make the database resilient to crashes, it is common for B-tree implementations
to include an additional data structure on disk. This is an append-only file to which every B-tree modification must be written before it can be applied to the pages of the tree itself. When the database comes back up after a crash, this log is used to restore the B-tree back to a consistent state
