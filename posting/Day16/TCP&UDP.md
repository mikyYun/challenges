# TCP / UDP
Transmission control protocol(TCP) drives `reliable` data transfers. In contrast, user datagram protocol(UDP) prioritizes `speed and efficiency`, which are crucial to internet operations

## TCP
`Three-way  handshake(synchronization, synchronization acknowledgment, and final acknowledgement)`. TCP is defined as a connection-oriented communication protocol that allows computing devices and applications to send data via a network and verify its delivery, forming one of the crucial pillars of the global internet.

Before one can send any data, the client and server must establish a connection. The server must actively listen for client requests whenever a connection is established.

* Connection based
1. any information that travels through the internet is guaranteed to arrive unaltered.
* critical features of TCP
1. The client confirms data delivery from the server
2. Agter a timeout period, the server attempts retransmission for data that is not delivered
3. In a congested network, TCP delays data transmission
4. It uses a three-way handshake to check for data transmission errors

`However`, these feedback mechanisms result in a more significant `overhead size`.
* consume significantly more of the bandwidth available on the system.
// Most online applications use the `user datagram protocol(UDP)` in conjunction with TCP to work around this issue

## UDP(User Datagram Protocol)
Is a message-oriented communication protocol that allows computing devices and applications to send data via a network without verifying its delivery, which is `best suited to real-time communication and broadcast systems`

```js
  // UDP enables continuous data transmision without acknowledging or comfirming the connection
```

* Distinctive about UDP
1. It is not connection-based. `Connectionless` refers to the fact that no connection is established before communication occurs.

* Most cases, UDP is faster than TCP
1. it does not assure delivery of the packets as TCP does.
2. `Not` suitable for sending E-mail, viewing a web page, or downloading a file.
3. `Preferred` mainly for real-time applications like broadcasting or multitasking network traffic

### UDP's key features
* Adapts to bandwidth-intensive applications that tolerate a loss of packets
* Fewer delays in data transmission
* Be used to send a large number of packets at a time(download, send data..)
* Possibility of losing some data

## Differences
* TCP / UDP
  ```
  1-1. TCP: Slower but more reliable transfers

  1-2. UDP: Faster but not guaranteed transfer

  2-1. TCP: Typical Applications: File Transfer Protocol / Web Browsing / Email

  2-2. UDP: Typical APpications: Live streaming / Online Games / VoIP
  ```
  1. TCP is connection-oriented while UDP is connectionless
  2. TCL leverages more error-checking mechanisms than UDP
  3. TCP sends data in a particular sequence, whereas there is no fixed order for UDP protocol
  4. UDP is faster and more efficient than TCP
  5. Unlike UDP, TCP cannot be used for multicast or broadcast services
  6. TCP leverages flow control, while UDP does not
  7. UDP does not control congestion, whereas TCP implements congestion avoidance algorithms
  8. TCP is more reliable than UDP
  9. The TCP header is different from the UDP header
  10. UDP is suitable for live and real-time data transmission, which TCP cannot support

SOURCE: 
  https://www.spiceworks.com/tech/networking/articles/tcp-vs-udp/#:~:text=Transmission%20control%20protocol%20(TCP)%20and,UDP%20prioritizes%20speed%20and%20efficiency.