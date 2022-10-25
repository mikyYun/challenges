# JSON vs BSON
https://www.mongodb.com/json-and-bson

## JSON
1. JSON is javascript object notation
2. It is a standard file format type
3. JSON contains some basic data types like string, numbers, boolean, null
4. Databases like AnyDB, redis, etc. stores the data into the JSON format
5. JSON requires less space as compared to BSON
6. It is comparatively less faster than BSON
7. It does not have encoding and decoding technique
8. If we want to read any particular information from the JSON file, it needs to go through whole content
9. JSON format does not require to be parsed as it is already human readable
10. JSO is a combination of objects and arrays where an object is a collection of key-value pairs while array is an ordered list of elements

* It is a human-readable data interchange format
### MongoDB-JSON connection
MongoDB was designed from its inception to be a database focused on delivering great development experience. JSON's ubiquity made it the obvious choice for representing data structures in MongoDB's document data model

`Issues` that makes JSON less ideal for usage inside of a database
```
  1. JSON only supports a limited number of basic data types. Most notably, JSON lacks support for dates and binary data
  2. JSON objects and properties don't have fixed length which makes traversal slower
```


## BSON
1. BSON is Binary JavaScript Object notaion
2. It is a binary file format type
3. BSON contains some additional data types like data, timestamp, etc.
4. The data in MongoDB is stored in a BSON format
5. BSON requires more space as compared to JSON
6. It is faster as compared to JSON
7. It is used for the storage of data
8. It has faster encoding and decoding technique
9. In BSON, indexes concept is used that skips all the content which are not in use
10. It requires to be parsed as it can be easily parsed by the machines
11. The binary encoding technique provides some additional information such as length of the string and object subtypes. BinData and Date are the additional data types supported by BSON over the JSON

* In order to make MongoDB JSON-first, but still high performance and general purpose, BSON was invented to bridge the gap
```
A binary representation to store data in JSONformat, optimized for speed, space, and efficiency.
It is not dissimilar from other binary interchange formats like Protocol Buffers, or Thrift, interms of approach
```

* `BSON` stands for "Binary JSON", and that's exactly what it was invented to be.
```
BSON's binary structure encodes type and length information, which allows it to be traversed much more quickly comared to JSON.

BSON adds some non-JSON-native data types, like dates and binary data, without which MongoDB would have been missing some valuable support
```