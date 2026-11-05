---
sidebar_position: 1
description: "READ THIS FIRST"
---
# Setting up your master key

## Overview

Bottle Rocket is configured to store your data in a database you have configured.

<div class="text--center" style={{width: '600px'}}>
<p>
![Encryption key](/img/encryptionSteps.png)
</p>
</div>

When connecting to third party services, some of this stored data takes the form of the following:
* Access / refresh tokens
* API keys
* Credential files
* Passwords

It is considered best-practice **never** to store this kind of data in plain-text at rest in the given database, and instead 
use [encryption at rest](https://www.mongodb.com/resources/basics/data-at-rest) to read and write the data through the use of a secure
*encryption key*.

With field-level encryption, if a malicious user were to gain access to your database, any of the above data would not be immediately available
for them to use without the encryption key.

## Generating a Base64 32-byte encryption key
### Online tools
You can use any of the following (but not limited to) sites to generate an encryption key:
* https://encrypt-online.com/tools/encryption-key-generator
* https://generate-random.org/base64-string
* https://www.convertsimple.com/random-base64-generator/

<div class="text--center">
![Example key](/img/exampleKey.png)
</div>

You need to specify that the key be exactly 32-bytes, and in base64 format.

### Command line tools
If you have the OpenSSL tools on your operating system, you can run the following command to generate the required key:
```
openssl rand -base64 32
```
## I have a key - what do I do now?
* Treat the key like a password and keep it secure. Do not share it with anyone.
* We will use the key when [setting up the Bottle Rocket server](./server-installation/server-installation.md).