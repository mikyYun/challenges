# Designing a data system
1. How to ensure that the data remains correct and complete, even when things go wrong internally?
2. How to provide consistently good performance to clients, even when parts of our system are degraded?
3. How to scale to handle an increase in load?
4. What does a good API for the service look like?

## Factors that may influence the design of a data system
1. skills and experience of the people involved
2. legacy system dependencies
3. the time scale for delivery
4. organization's tolerance of different kinds of risk
5. regulatory constraints

## Three concerns that are important in post software systems
1. Reliability
```
The system should continue to work correctly => performing the correct function at the desired level of performance
  even in the face of adversity(hardware or sofrware faults, and even human error)
```
2. Scalability
```
As the system grows(in data volume, traffic volume, or complexity), there should be reasonable ways of dealing with the growth
```
3. Maintainablity
```
Over time, many different people will work on the system. And they should all be able to work on it productively
```
---
## Reliability
Everybody has an intuitive idea of what it means for something to be reliable or unreliable.
```
! Working correctly => reliability as meaning, roughly, "coutinuing to work correctly, even when things go wrong"

  1. The application performs the function that the user expected
  2. It can tolerate the user making mistakes or using the software in unexpected ways
  3. Its performance is good enough for the required use case, under the expected load and data volume
  4. The system prevents any unauthorized access and abuse
```

* It is impossible to reduce the probability of a fault to zero; therefore it is usually best to design fault-tolerance mechanisms that `prevent faults` from causing failures.
* Counterintuitively, in such fault-tolerant systems, it can make sense to increase the rate of faults by triggering them deliberately
```
  Example..
  By randomly killling individual processes without warning.
```
* Prevention is better than cure

### Faults
1. Hardware Faults
```
Hard disks crash
RAM becomes faulty
Power grid has a blackout
unblugs the wrong network cable..
```
2. Software Errors
```
Systematic error within the system. Such faults are harder to anticipate, and because they are correlated across nodes, they tend to cause many more system failures than uncorrelated hardware faults.

Example
1. A software bug that causes every instance of an application server to crash when given a particular bad input.
2. A runaway process that uses up some shared resource
 => CPU time, memory, disk space, or network bandwidth
3. A service that the system depends on that slows down, becomes unresponsive, or starts returning corrupted responses.
4. Cascading failures, where a small fault in one component triggers a fault in another component, which in turn triggers further faults
```
There is no quick solution to the problem of systematic faults in software. Lots of small things can help
```
  1. process isolation
  2. allowing processes to crash and restart
  3. measuring, monitoring, and analyzing system behavior in production

  => If a system is expected to provide some guarantee, it can constantly check itself while it is running and raise an alert if a discrepancy is found
```

3. Human Errors
Human: design, build software systems, and operate the systems.

How do we make our systems reliable, in spite of unreliable humans?
```
COMBINE SEVERAL APPROACHES
1. Design systems in a way that minimizes opportunities for error
2. Decouple the places where people make the most mistakes from the places where they can cause failures
3. Test thoroughly at all levels, from unit tests to whole-system integration tests and manual tests
  => automated tesing is widely used, well understood, and especially valuable for covering corner cases that rarely arise in normal operation.
4. Allow quick and easy recovery from human errors, to minimize the impact in the case of a failure
  => fast to roll back, roll out new code gradually
5. Set up detailed and clear monitoring, such as performance metrics and error rates
6. Implement good manangement practices and training-a complex and important aspect, and beyond the scope of this book
```

### How important is `Reliability`?
Bugs in business applications cause lost productivity(and legal risks if figures are reported incorrectly), and outages of ecommerce sites can have huge costs in terms of lost revenue and damage to reputation

There are situations in which we may choose to sacrifice reliability in order to reduce development cost or operational cost, but we should be very conscious of when we are cutting corners

