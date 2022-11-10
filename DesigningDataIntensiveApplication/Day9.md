# Encoding and Evolution
In most cases, a change to an application's features also requires a change to data that it stores: perhaps a new field or record type needs to be captured, or perhaps existing data needs to be presented in a new way.

When a data format or schema changes, a corresponding change to application code often needs to happen. However, in a large application, code changes often happen instaneously.
* Backward compatibility
Newer code can read data that was written by older code
* Forward compatibility
Older code can read data that was written by newer code

## Formats for Encoding Data
Programs usually work with data in (at least) two different representations
1. In memory, data is kept in objects, structs, lists, arrays, hash tables, trees, and so on. These data sturctures are optimized for efficient access and manipulation by the CPU
2. When you want to write data to a file or send it over the network, you have to encode it as some kind of self-contained sequence of bytes.

### Language-Specific Formats
Encoding libraries are very conveninent, because they allow in-memory objects to be saved and restored with minimal additional code.
`However`
1. The encoding is often tried to a particular programming language, and reading the data in another language is very ddifficult
2. In order to restore data in the same object types, the decoding process needs to be able to instantiate arbitrary classes which is frequently a source of security problems
3. Versioning data is often an afterthought in these libiraries
4. Efficiency is also often an afterthought

### JSON, XML, and Binary Varinats
* JSON, XSML, and CSV, like textual formats that human-readable also have problems.
1. A lot of abmiguity around the encoding of numbers
2. Not supporting Binary
3. Optional schema support for XML and JSON. These schema languages are quite powerful and thus quite complicated to learn and implement.
4. CSV does not have any schema, so it is up to the application to define the meaning of each row and column
