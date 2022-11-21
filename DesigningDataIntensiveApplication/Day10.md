# Replication

Replication means keeping a copy of the same data on muliple machines that are connected via a network.
* Reasons
```
  1. To keep data geographically close to your users
  2. To allow the system to continue working even if some of its parts have failed
  3. To scale out the number of machines that can serve read queries
```

1. One of the replicas is designated `the leader` (known as master or primary). When clients want to write to the database, they must send their requests to the leader, which first writes the new data to its local storage.

2. The other replicas are known as `followers` (read replicas, slaves, secondaries, or hot standbys). Whenever the leader writes new data to its local storage, it also sends the data change to all of its followers as part of a replication log or change stream. Each follower takes the log from the leader and updates its local copy of the data-base accordingly, by applying all writes in the same order as they were processed on the leader.

3. When a client wants to read from the databse, it can query either the leader or any of the followers. However, writes are only accepted on the leader.

## Synchronous VS Asynchrounus Replication
The replication happens `synchronously or asynchronously`
* Sync
```
  User => Leader => <data change> to Follower1 => <oK> from Follower1 => Leader && <ok> from Leader => User
```

* Async
```
  User => Leader => <data change> to Follower2 && <ok> from Leader => User
                                              => <ok> from Follower2 to Leader
```

* Advantages of `Sync`

  The follower is guaranteed to have an up-to-date copy of the data that is consistent with the leader.
* Disadvantage of `Sync`

  The synchronous follower doesn't respond, the write cannot be processed. The leader must block all writes and wait until the synchronous replica is available again.

It is impractical for all followers to be synchronous
```
If the synchronous follower becomes unavailaable or slow, one of the asynchronous followers is mad synchronous. This guarantees that you have an up-to-date copy of the data on at least two nodes.

It can be a serious problem for asynchronously replicated systems to lose data if the leader fails, so researchers have continued investigating replication methods that DO NOT LOSE DATA but still provide good performance and availability.
```