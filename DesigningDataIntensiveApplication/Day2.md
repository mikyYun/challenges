## Scalability

Reliable system soesn't mean it will necessarily work reliably in the future. Common reason for degradation is increased load(multiple times of user increase).`Scalability` is the term we use to describe a system's ability to cope with increased load.
```
If the system grows in a particular way, what are our options for coping with the growth?
How can we add computing resources to handle the additional load?
```
### Describing Load
To discuss growth questions, first, we need to succinctly describe the current load on the system.
```
Example_Twitter
1. Posting a tweet simply insert the new tweet into a global collection of tweets
2. Maintain a cache for each user's home timeline: like a mailbox of tweets for each recipient user
```

### Describing Performance
Investigate what happens when the load increases.
```
  1. When you increase a load parameter and keep the system resources(CPU, memory, network bandwidth, etc.) unchanged, how is the performance of your system affected?
  2. When you increase a load parameter, how much do you need to increase the resources if you want to keep performance unchanged?
```

### Approaches for Coping with Load
How do we maintain good performance even when our load parameters increase by some amount?

`Rebalancing`
* Elastic systems : automatically add computing resources when they detect a load increase.
1. can be useful if load is highly unpredictable
* Manually scaled systems are simpler and may have fewer operational surprise

Keeping your database on a single node until scaling cost or high-availability requirements forced you to make it distributed was a common wisdom because distributing stateless services across multiple machines is fairly straightforward, taking stateful data systems from a single node to a distributed setup can introcude a lot of additional complexity.

It is conceivable that distributed data systems will become the default in the future, even for use cases that don't handle large volumes of data or traffic.

The architecture of systems that operate at large scale is usually highly specific to the application. The problem may be `the volume of reads`, `the volume of writes`, `the volume of data to store`, `the complexity of the data`, `the response time requirements`, `the access patterns`, or some mixture of all the these plus many more issues.

## Maintainability
In its ongoing maintenance--fixing bugs, keeping its systems operational, investigating failyres, adapting it to new platforms, modifying it for new use cases, repaying technical debt, and adding new features.

`Maintenancing legacy systems`
We can and should design software in such a way that it will hopefully minimize pain during maintenance, and thus avoid creating `legacy software`. 

* Three design principles for software systems
1. Operability
```
  Make it easy for operations teams to keep the system running smoothly
```

2. Simplicity
```
  Make it easy for new engineers to understand the system, by removing as much complexity as possible from the system
```

3. Evolvability
```
  Make it easy for engineers to make changes to the system in the future, adapting it for unanticipated use cases as requirements change. Also known as `extensibility, modifiability, or plasticity`.
```

### Operability: Making Life Easy for Operations
Good operations can often work around the limitations of bad (or incomplete) software, but good software cannot run reliably with bad operations

`Responsible of operations team`
```
  1. Monitoring the health of the system and quickly restoring service if it goes into a bad state
  2. Tracking down the cause of problems, such as system failures or degraded performance
  3. Keeping software and platforms up to date, including security patches
  4. Keeping tabs on how different systems affect each other, so that a problematic change can be avoided before it cause damage
  5. Anticipating future problems and solving them before they occur
  6. Establishing good practices and tools for deployment, configuration management, and more.
  7. Performing complex maintenance tasks, such as moving an application from one platform to another
  8. Defining processes that make operations predictable and help keep the production environment stable
  9. Preserving the organization's knowledge about the system, even as individual people come and go
```

### Simplicity: Managing Complexity
Complexity slows down everyone who needs to work on the system, further increasing the cost of maintenance.

* Possible symtoms of complexity
1. Explosion of the state space
2. Tight coupling of modules
3. Tangled dependencies
4. Inconsistent naming and terminology
5. Hacks aimed at solving performance problems
6. Special-casing to work around issues elsewhere

Reducing complexity greatly improves the maintainability of software, and thus simplicity should be a key goal for the system we build.
* One of the tools for removing accidental complexity: `abstraction`

## Evolvability: Making Change Easy
`Agile` working patterns provide a framework for adapting to change. It has also developed technical tools and patterns that are helpful when developing software in a frequently changing environment, such as TDD(test-driven development) and refactoring.