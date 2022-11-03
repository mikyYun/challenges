# RAM & ROM
## RAM : Volatile Memory
A volatile memory is a type of memory used by the `CPU` to access what it needs as fast as possible

`RAM` and `cache` are volatile memories: the data is temporarily stored iside them, and they are cleared every time you turn off the computer
* `RAM` stands for Random Access Memory.
* RAM is made to be accessed, read, and write by CPU
* Each information is stored there with a temporary `address` which allows the CPU to retrieve it
* RAM is perfect to make everything faster, but it's not infinite
```
  Its capacity is much smaller than permanent..
```
* Its space is partially taken by the `operating system`, and partially by the `running programs`
* The amount of RAM vary a lot depending by the computer
```
It can be incremented in most the cases
```
* Each motherboard has a certain number of `slots` where you can insert the RAM. Each slot has a miximum capacity
* Nowadays, the highest ram capacity module is `128GB`. If your computer's motherboard has 16 RAM slots, it means it can potentially have 2,048GB of RAM


### DRAM
* Dynamic Random Access Memory
* Dynamic, continuously refreshed
* Traditional RAM in computers

### SRAM : Cache
* Static Random Access Memory
* Static, which means it's not continuously refreshed like the DRAM
* Faster, but more expensive in hardware terms
* Used `inside` the CPU

### SDRAM
* Synchronous Dynamic Random Access Memory
* Much faster than DRAM, used in most computers nowadays
* It's synchronised with the CPU clock(type of sygnal)

#### DDR 4 SDRAM
* Double Data Rate Synchronous Dynamic Random Access Memory
* Much faster than SDRAM
* It use less electrical power

```
CPU takes instructions from memory(fetch), read them(decode) and execute them
  => This process of fetch-decode execute is also called fetch-execute cycle

The speed at which the CPU execute the fetch-execute cycle is called clock speed

The clock speed is measured in Hz. 1Hz means 1 cycle per second

CPU first checks if the data is available in the chache
```

## ROM : Non-volatile memory
A `non-volatile memory`, unline the volatile one, it's a memory that retains data even when the power is gone. `ROM` is an example of non-volatile memory
* ROM stands for Read Only Memory
* Data can not be writtne or modified, only read
* The ROM contains the BIOS: Basic Input Output System - what allows the correct operation of keyboard, mouse, screen, etc.
* The BIOS also carries essential information to start the processor when you turn on the computer, and crucial information for expansion cards (Sound, video, network...), and other essential instructions
* `ROM` is the hardware where the `BIOS` resides
* `ROM` retains all the static `BIOS` instructions

### HDD vs SSD
* A Hard Disk Drive(HDD) is made by `magnetic platters` where data can be read and written through a `head arm`. It's still a sidely used technology, even though it's `electromechanical`
* A Solid State Drive(SSD)
```
HDD is better for storage
SSD is better for performance
```
* Solutions
```
An SSD for the OS and programs
A HDD for files storages(especially large ones)
SSHD : It combines some aspects of the SSD and some others of the HD
```