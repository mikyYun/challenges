# Enter Urls

## What happens when type url ?

What happens when we type url in address bar?<br />
As soon as we press the 'Enter" key, our browser starts the first step to look up in its cache to see if that website was visited. And the first place to look up is in the hosts file. _ GET request not happens here

If the URL is not found inside the hosts file, the OS(Operating System) makes a DNS request to find IP Address of the url(web page) and ask the `Resolver(Resolving Name Server)` to look up in its cache to see if it knows the IP Address. If not, the Resolver ask the root server ! to ask the specific `.com || .io || .net || ...` TLD server.

The TLD server check in its cache to see the requested IP Address is there. If found, return the address and the `Resolver` save it as cache and return to OS.

After the OS has the IP Address, gives it to browser, then make a GET request to the responded IP Address with TCP traffic protocol.

### Resolver Caching
Saving and storing information from resolved DNS queries so that the information can be reused.

* Advantage: Improve performance that is obtained by elimination of repetitive queries to the name servers.

RESOURCE: https://www.linkedin.com/pulse/what-happens-when-you-type-googlecom-any-other-url-buitrago-vargas/