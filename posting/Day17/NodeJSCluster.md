# Node.js cluster
## Cluster
The cluster is a group of servers. It provides features of searching and indexing to store and manage all data. Default name is `elasticsearch`. Naming is important to struncturing.

Same name of cluster should not be used in different environment to prevent of mixing nodes.

One node in a cluster is valid and can have multiple independent clusters having unique naming.

## Node
Node is a single server where store data and do cluster's indexing and searching. Node is identified by `name` like the cluster and default name is `UUID`(Universally Unique Identifier). We can set the customized naming. `It is important that naming nodes are indentified to verifing relationships between clusters and nodes`

One cluster can contain multiple nodes. Also, any Elasticsearch node which is not on network can have a single node cluster named `elasticsearch`.

## Index
Index is a group of documents with similar topic
```
Example in Ecommerce
- Userdata
- Products
- Orders
```
Index is identified by name(all lowercase), the name is for indexing, searching, updating, deleting of documents. A single cluster can define multiple numbers of indexing

## Type
One index can have || define more than one of types. The type is divide/ distinguish logically and set by user. Type defined for a document having common fields.
```
Example => JSON, XML
```

## Shard // Replica
### Shard
Elasticsearch provides `shard` to prevent a single node handle big data. The shard can defined when generate index. Each shard is a index itself, and can hosting any nodes of cluster.
```
Main reason
1. horizontal distribution/ extend of contents volume
2. parallelize work loads to multiple shard to improve functionality
``` 

### Replica
copy shards to backup `fail-over`. Elasticsearch can copy one or more copies of shard.
```
Main reason
1. high availability in case of shard/node error. => `replica` is not placed on a same node of origin
2. all replica can do parellel search which makes expand of search volume/ thoughtput
```

Basically, each index of Elasticsearch contains 5 shard and one replica. 