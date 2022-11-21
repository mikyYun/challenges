## Setting Up New Followers
How do you ensure that the new follower has an accurate copy of the leader's data?

Copying data files from one node to another is not sufficient
```
Clients are constantly writing to the database, and the data is always in flux, so a standard file copy would see different parts of the database at different points in time.
```

* Concepts
  
  1. Take a consistent snapshot of the leader's database at some point in time 
  
  - If possible, without taking a lock on the entire database. It is also required for backups. Might need third-party tools

  2. Copy the snapshot to the new follower node

  3. The follower connects to the leader and requests all the data changes that have happened since the snapshot was taken.

  - Require the snapshot is associated with an exact position in the leader's replication log

  4. When the follower has processed the backlog of data changes since the snapshot, we call it `caught up`. It can now continue to process data changes from the leader as they happen.

## Handling Node Outages

Being able to reboot individual nodes without downtime is a big advantage for operations and maintenance. Our goal is to keep the system as a whole running despite individual node failures, and to keep the impact of a node outage as small as possible
df
  * Follower failure: Catch-up recovery

    On its local dist, each follower `keeps a log of the data changes` it has received from the leader. If a follower crashes and is restarted, or if the network between the leader and the follower is temporarily interrupted, the follower can recover quite easily from `its log`, it knows the last transaction that was processed before the fault occured.
  
    => The follower can connect to the leader and request all the data changes that occrred during the time when the follower was disconnected.
    
    => When it has applied these changes, it has caught up to the leader and can continue receiving a stream of data change as before.

  * Leader failure : Failover
    
    One of the followers needs to be promoted to be the new leader, clients need to be reconfigured to send their writes to the new leader, and the other followers need to start consuming data changes from the new leader. This process is called `failover`

    `Failover` can happen manually or automatically.

    Automatic failover process
    
    1. Determining that the leader has failed

      * Potential reasons: Crashes, power outages, network issues, and more..

    2. Choosing a new leader
      
      * Election process OR appointed by a previously elected `controller node`
      * Best follower is the most up-to-date data changes from the old leader

    3. Reconfiguring the system to use the new leader

      * Request Routing : Clients send request to the new leader. Old leader becomes a follower and recognizes the new leader    
  
  Caution of `Failover`
    
    * If asynchronous replication is used, the new leader may not have received all the writes from the old leader before it failed.
    
    * Discarding writes is especially dangerous if other storage systems outside of the database need to be coordinated with the database contents.
    
    * In certain fault scenarios, it could happen that two nodes both believe that they are the leader. This is called `split brain`, and it is dangerous

    * What is the right time before the leader is declared dead? Longer timeout means a longer time to recovery in the case where the leader fails.