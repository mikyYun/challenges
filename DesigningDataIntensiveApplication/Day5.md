## B-tree optimizations
* Optimizations
1. Instead of overwriting pages and maintaining a WAL for crash recovery, some database (like LMDB) use a copy-on-write scheme.
```
A modified page is sritten to a different location, and a new version of the parent pages in the trees is created, pointing at the new location.
=> useful for concurrency control
```

2. We can save space in pages by not storing the entire key, but abbreviating it
```
Especially in pages on the interior of the tree, keys only need to provide enough information to act as boundaries between key ranges.
```

3. In general, pages can be positioned anywhere on disk; there is nothing requiring pages with nearby key ranges to be nearby on disk.

4. Additional pointers have been added to the tree

5. B-tree variants such as fractal trees `borrow` some log-structured ideas to reduce disk seeks.

## Comparing B-Trees and LSM-Trees
Even though B-tree implementations are generally more mature than LSM-tree implementations, `LSM-trees` are typically faster for `writes`, whereas B-trees are thought to be faster for reads. `Reads` are typically slower on LSM-trees because they have to check several different data structures and SSTables at different stages of compaction.

### `Advantages` of LSM-trees
B-tree index must write every piece of data at least twice: once to the write-ahead log, and once to the tree page itself. Log-structured indexes also rewrite data multiple times due to repeated compaction and merging of SSTables.

1. LSM-trees are typically able to sustain higher write throughput than B-trees, partly because they sometimes have lower write amplification, and partly because they sequentially write compact SSTable files rather than having to overwrite several pages in the tree.
2. LSM-trees can be compresssed better, and thus often produce smaller files on disk than B-trees.
3. On many SSDs, the firmware internally uses a log-structured algorithm to turn random writes into sequential writes on the underlying storage chips, so the impact of the storage engine's write pattern is less pronounced.

### `Downsides` of LSM-trees
1. The compaction process can sometimes interfere with the performance of ongoing reads and writes. Even though storage engines try to perform compaction incrementally and without affecting concurrent access, disks have limited resources, so it can easily happen that a request needs to wait while the disk finishes an expensive compaction operation.
2. Compaction arises at high write throughput
```
The disk's finite write bandwidth needs to be shared between the initial write and the compaction threads running in the background.
```

### Note
An advantage of `B-trees` is that each key exists in exactly one place in the index, whereas a log-structured storage engine may have multiple copies of the same key in different segments.

## Other Indexing Structures
It is very common to have secondary indexes. A secondary index can easily be constructed from a key-value index. The main difference is that `keys are not unique`. This can be solved in two ways
```
1. making each value in the index a list of matching row identifiers
2. making each key unique by appending a row identifier to it
```
